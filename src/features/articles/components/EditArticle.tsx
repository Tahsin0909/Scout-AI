"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    FileImage,
    ImagePlus,
    Loader2,
    Upload,
    X,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Article, ArticleCategory, articles } from "./data/articles-data";
import { articleCategories, EditArticleFormValues, editArticleSchema } from "../articles.schema";
import EmptyState from "@/components/others-state/EmptayState";
import { ArticlesIcon } from "@/utils/icons";


const JoditEditor = dynamic(
    () => import("jodit-react"),
    {
        ssr: false,
    },
);

const EditArticle = () => {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();
    const { resolvedTheme } = useTheme();

    const editor = useRef(null);

    const article = articles.find(
        (articleItem) =>
            articleItem.id === Number(id),
    );

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [newImagePreview, setNewImagePreview] =
        useState<string | null>(null);

    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: {
            errors,
            isDirty,
        },
    } = useForm<EditArticleFormValues>({
        resolver: zodResolver(editArticleSchema),

        values: article
            ? {
                title: article.title,
                excerpt: article.excerpt,
                category: article.category as EditArticleFormValues["category"],
                content: article.content,
                image: article.image,
            }
            : undefined,
    });

    const title = watch("title");
    const excerpt = watch("excerpt");
    const image = watch("image");

    const editorConfig = useMemo(
        () => ({
            readonly: false,
            height: 320,
            placeholder: "Write your article content...",
            toolbarAdaptive: false,
            theme:
                resolvedTheme === "dark"
                    ? "dark"
                    : "default",

            style: {
                background:
                    resolvedTheme === "dark"
                        ? "#111111"
                        : "#ffffff",

                color:
                    resolvedTheme === "dark"
                        ? "#f5f5f5"
                        : "#111111",
            },

            containerStyle: {
                background:
                    resolvedTheme === "dark"
                        ? "#111111"
                        : "#ffffff",

                borderColor:
                    resolvedTheme === "dark"
                        ? "#333333"
                        : "#e5e7eb",
            },

            buttons: [
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "|",
                "ul",
                "ol",
                "|",
                "paragraph",
                "fontsize",
                "|",
                "link",
                "image",
                "|",
                "align",
                "undo",
                "redo",
            ],
        }),
        [resolvedTheme],
    );

    if (!article) {
        return (
            <EmptyState
                title="No articles available"
                description="This article could not be found. Browse other articles to continue reading."
                icon={<ArticlesIcon />}
                action={
                    <Button asChild>
                        <Link href="/admin/article">
                            Go Back
                        </Link>
                    </Button>
                }
            />
        );
    }

    const handleImageChange = (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        if (newImagePreview) {
            URL.revokeObjectURL(
                newImagePreview,
            );
        }

        const previewUrl =
            URL.createObjectURL(file);

        setNewImagePreview(previewUrl);

        setValue("image", file, {
            shouldDirty: true,
            shouldValidate: true,
        });
    };

    const handleRemoveNewImage = () => {
        if (newImagePreview) {
            URL.revokeObjectURL(
                newImagePreview,
            );
        }

        setNewImagePreview(null);

        setValue(
            "image",
            article.image,
            {
                shouldDirty: true,
                shouldValidate: true,
            },
        );
    };

    const calculateReadTime = (
        html: string,
    ) => {
        const text = html
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim();

        const wordCount = text
            ? text.split(" ").length
            : 0;

        return Math.max(
            1,
            Math.ceil(wordCount / 200),
        );
    };

    const onSubmit = async (
        data: EditArticleFormValues,
    ) => {
        try {
            setIsSubmitting(true);

            let imageUrl =
                typeof data.image === "string"
                    ? data.image
                    : article.image;

            /*
             * If data.image is a File,
             * upload it here and replace imageUrl
             * with the URL returned from your API.
             */
            if (data.image instanceof File) {
                console.log(
                    "New image selected:",
                    data.image,
                );

                // Example:
                // imageUrl = await uploadArticleImage(data.image);

                imageUrl =
                    newImagePreview ??
                    article.image;
            }

            const updatedArticle: Article = {
                ...article,

                title: data.title,
                excerpt: data.excerpt,
                category: data.category as ArticleCategory,
                content: data.content,
                image: imageUrl,

                readTime:
                    calculateReadTime(
                        data.content,
                    ),

                /*
                 * Keep original publish date.
                 */
                publishedAt:
                    article.publishedAt,

                /*
                 * Keep existing views.
                 */
                views: article.views,
            };

            console.log(
                "Updated Article:",
                updatedArticle,
            );

            /*
             * Later:
             *
             * await updateArticle({
             *   id: article.id,
             *   data: updatedArticle,
             * });
             */

            // router.push("/admin/articles");
        } catch (error) {
            console.error(
                "Failed to update article:",
                error,
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentImage =
        newImagePreview ??
        (typeof image === "string"
            ? image
            : article.image);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Edit Content
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Update article information,
                    content, category, and cover
                    image.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(
                    onSubmit,
                )}
            >
                <Card className="rounded-2xl border-border bg-card shadow-sm">
                    <CardContent className="space-y-6 p-5 sm:p-6">
                        {/* Title + Category */}
                        <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
                            {/* Title */}
                            <div>
                                <label htmlFor="title" className="mb-2 block text-sm font-medium text-foreground">
                                    Content Title{" "}
                                    <span className="text-destructive">
                                        *
                                    </span>
                                </label>

                                <div className="relative">
                                    <input id="title" type="text" maxLength={64} placeholder="Enter article title" {...register("title")} className={`h-11 w-full rounded-lg border bg-background px-3 pr-16 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary ${errors.title ? "border-destructive" : "border-border"}`} />

                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">
                                        {title?.length ?? 0}
                                        /64
                                    </span>
                                </div>

                                {errors.title && (
                                    <p className="mt-1.5 text-xs text-destructive">
                                        {
                                            errors.title
                                                .message
                                        }
                                    </p>
                                )}
                            </div>

                            {/* Category */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-foreground">
                                    Category{" "}
                                    <span className="text-destructive">
                                        *
                                    </span>
                                </label>

                                <Controller
                                    name="category"
                                    control={control}
                                    render={({
                                        field,
                                    }) => (
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger className={`h-11 w-full ${errors.category ? "border-destructive" : ""}`}>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                {articleCategories.map(
                                                    (
                                                        category,
                                                    ) => (
                                                        <SelectItem key={category} value={category}>
                                                            {
                                                                category
                                                            }
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />

                                {errors.category && (
                                    <p className="mt-1.5 text-xs text-destructive">
                                        {
                                            errors
                                                .category
                                                .message
                                        }
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Overview */}
                        <div>
                            <div className="mb-2 flex items-center justify-between gap-4">
                                <label htmlFor="excerpt" className="text-sm font-medium text-foreground">
                                    Key Overview{" "}
                                    <span className="text-destructive">
                                        *
                                    </span>
                                </label>

                                <span className="text-[10px] text-muted-foreground">
                                    {excerpt?.length ?? 0}
                                    /300
                                </span>
                            </div>

                            <textarea id="excerpt" maxLength={300} rows={4} placeholder="Write a short overview of the article..." {...register("excerpt")} className={`w-full resize-none rounded-lg border bg-background p-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary ${errors.excerpt ? "border-destructive" : "border-border"}`} />

                            {errors.excerpt && (
                                <p className="mt-1.5 text-xs text-destructive">
                                    {
                                        errors.excerpt
                                            .message
                                    }
                                </p>
                            )}
                        </div>

                        {/* Jodit */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-foreground">
                                Content Body{" "}
                                <span className="text-destructive">
                                    *
                                </span>
                            </label>

                            <Controller
                                name="content"
                                control={control}
                                render={({
                                    field,
                                }) => (
                                    <div className={`overflow-hidden rounded-lg border ${errors.content ? "border-destructive" : "border-border"}`}>
                                        <JoditEditor ref={editor} value={field.value ?? ""} config={editorConfig} onBlur={(newContent) => field.onChange(newContent)} onChange={() => { }} />
                                    </div>
                                )}
                            />

                            {errors.content && (
                                <p className="mt-1.5 text-xs text-destructive">
                                    {
                                        errors.content
                                            .message
                                    }
                                </p>
                            )}
                        </div>

                        {/* Cover Image */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-foreground">
                                Cover Image{" "}
                                <span className="text-destructive">
                                    *
                                </span>
                            </label>

                            {currentImage ? (
                                <div className="max-w-md overflow-hidden rounded-xl border border-border bg-muted/30">
                                    <div className="relative aspect-video w-full">
                                        <Image src={currentImage} alt={article.title} fill unoptimized={currentImage.startsWith("blob:")} className="object-cover" />

                                        {newImagePreview && (
                                            <button type="button" onClick={handleRemoveNewImage} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-colors hover:bg-destructive hover:text-destructive-foreground">
                                                <X className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-card p-3">
                                        <div className="flex items-center gap-2">
                                            <FileImage className="h-4 w-4 text-primary" />

                                            <span className="text-xs text-muted-foreground">
                                                {newImagePreview
                                                    ? "New cover image selected"
                                                    : "Current cover image"}
                                            </span>
                                        </div>

                                        <label className="cursor-pointer text-xs font-semibold text-primary hover:underline">
                                            Change Image

                                            <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleImageChange} className="hidden" />
                                        </label>
                                    </div>
                                </div>
                            ) : (
                                <label className={`flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 px-6 py-8 text-center transition-colors hover:border-primary hover:bg-primary/5 ${errors.image ? "border-destructive" : "border-border"}`}>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <ImagePlus className="h-6 w-6" />
                                    </div>

                                    <p className="mt-3 text-sm font-semibold text-foreground">
                                        Upload cover image
                                    </p>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        JPG, PNG or WEBP.
                                        Maximum 5MB.
                                    </p>

                                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary">
                                        <Upload className="h-4 w-4" />
                                        Choose Image
                                    </div>

                                    <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleImageChange} className="hidden" />
                                </label>
                            )}

                            {errors.image && (
                                <p className="mt-1.5 text-xs text-destructive">
                                    {
                                        errors.image
                                            .message as string
                                    }
                                </p>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
                            <Button type="button" variant="outline" onClick={() => router.back()}>
                                Cancel
                            </Button>

                            <Button type="submit" variant="primary" disabled={isSubmitting || !isDirty}>
                                {isSubmitting ? (
                                    <>
                                        Updating Content
                                        <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                                    </>
                                ) : (
                                    "Update Content"
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
};

export default EditArticle;