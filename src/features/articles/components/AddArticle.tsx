"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
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

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { articleCategories, articleFormSchema, ArticleFormValues } from "../articles.schema";
import { useTheme } from "next-themes";



const JoditEditor = dynamic(
    () => import("jodit-react"),
    {
        ssr: false,
    },
);

const AddArticle = () => {
    const editor = useRef(null);

    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: {
            errors,
        },
    } = useForm<ArticleFormValues>({
        resolver: zodResolver(articleFormSchema),
        defaultValues: {
            title: "",
            excerpt: "",
            category: undefined,
            content: "",
        },
    });

    const title = watch("title");
    const excerpt = watch("excerpt");
    const { resolvedTheme } = useTheme();
    const editorConfig = useMemo(
        () => ({
            readonly: false,
            height: 320,
            placeholder: "Write your article content...",
            toolbarAdaptive: false,
            theme: resolvedTheme === "dark" ? "dark" : "default",

            style: {
                background: resolvedTheme === "dark" ? "#111111" : "#ffffff",
                color: resolvedTheme === "dark" ? "#f5f5f5" : "#111111",
            },

            containerStyle: {
                background: resolvedTheme === "dark" ? "#111111" : "#ffffff",
                borderColor: resolvedTheme === "dark" ? "#333333" : "#e5e7eb",
            },

            styleValues:
                resolvedTheme === "dark"
                    ? {
                        "color-background-default": "#111111",
                        "color-panel": "#181818",
                        "color-text": "#f5f5f5",
                        "color-border": "#333333",
                    }
                    : {},

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
    const handleImageChange = (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        setValue("image", file, {
            shouldValidate: true,
            shouldDirty: true,
        });

        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }

        const previewUrl = URL.createObjectURL(file);

        setImagePreview(previewUrl);
    };

    const handleRemoveImage = () => {
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }

        setImagePreview(null);

        setValue("image", undefined as unknown as File, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    const calculateReadTime = (html: string) => {
        const plainText = html
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim();

        const wordCount = plainText
            ? plainText.split(" ").length
            : 0;

        return Math.max(1, Math.ceil(wordCount / 200));
    };

    const onSubmit = async (
        data: ArticleFormValues,
    ) => {
        try {
            setIsSubmitting(true);

            /*
             * Upload the selected image to your backend/storage first.
             * Replace this with the URL returned by your API.
             */
            const imageUrl = imagePreview ?? "";

            const article = {
                id: Date.now(),
                title: data.title,
                excerpt: data.excerpt,
                category: data.category,
                image: imageUrl,
                publishedAt: new Date().toISOString(),
                readTime: calculateReadTime(data.content),
                content: data.content,
                views: 0,
            };

            console.log("Article:", article);

            /*
             * Example:
             *
             * await createArticle(article);
             */
        } catch (error) {
            console.error(
                "Failed to create article:",
                error,
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Add Article
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Create, organize, and publish informative articles for your audience.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="rounded-2xl border-border bg-card shadow-sm">
                    <CardContent className="space-y-6 p-5 sm:p-6">
                        {/* Title + Category */}
                        <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
                            {/* Title */}
                            <div>
                                <label htmlFor="title" className="mb-2 block text-sm font-medium text-foreground">
                                    Content Title <span className="text-destructive">*</span>
                                </label>

                                <div className="relative">
                                    <input id="title" type="text" maxLength={64} placeholder="Enter article title" {...register("title")} className={`h-11 w-full rounded-lg border bg-background px-3 pr-16 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary ${errors.title ? "border-destructive" : "border-border"}`} />

                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">
                                        {title?.length ?? 0}/64
                                    </span>
                                </div>

                                {errors.title && (
                                    <p className="mt-1.5 text-xs text-destructive">
                                        {errors.title.message}
                                    </p>
                                )}
                            </div>

                            {/* Category */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-foreground">
                                    Category <span className="text-destructive">*</span>
                                </label>

                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field }) => (
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger className={`h-11 w-full ${errors.category ? "border-destructive" : ""}`}>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                {articleCategories.map((category) => (
                                                    <SelectItem key={category} value={category}>
                                                        {category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />

                                {errors.category && (
                                    <p className="mt-1.5 text-xs text-destructive">
                                        {errors.category.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Key Overview */}
                        <div>
                            <div className="mb-2 flex items-center justify-between gap-4">
                                <label htmlFor="excerpt" className="text-sm font-medium text-foreground">
                                    Key Overview <span className="text-destructive">*</span>
                                </label>

                                <span className="text-[10px] text-muted-foreground">
                                    {excerpt?.length ?? 0}/300
                                </span>
                            </div>

                            <textarea id="excerpt" maxLength={300} rows={4} placeholder="Write a short overview of the article..." {...register("excerpt")} className={`w-full resize-none rounded-lg border bg-background p-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary ${errors.excerpt ? "border-destructive" : "border-border"}`} />

                            {errors.excerpt && (
                                <p className="mt-1.5 text-xs text-destructive">
                                    {errors.excerpt.message}
                                </p>
                            )}
                        </div>

                        {/* Content */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-foreground">
                                Content Body <span className="text-destructive">*</span>
                            </label>

                            <Controller
                                name="content"
                                control={control}
                                render={({ field }) => (
                                    <div className={`overflow-hidden rounded-lg border bg-background ${errors.content ? "border-destructive" : "border-border"}`}>
                                        <JoditEditor ref={editor} value={field.value} config={editorConfig} onBlur={(newContent) => field.onChange(newContent)} onChange={() => { }} />
                                    </div>
                                )}
                            />

                            {errors.content && (
                                <p className="mt-1.5 text-xs text-destructive">
                                    {errors.content.message}
                                </p>
                            )}
                        </div>

                        {/* Cover Image */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-foreground">
                                Cover Image <span className="text-destructive">*</span>
                            </label>

                            {!imagePreview ? (
                                <label className={`flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 px-6 py-8 text-center transition-colors hover:border-primary hover:bg-primary/5 ${errors.image ? "border-destructive" : "border-border"}`}>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <ImagePlus className="h-6 w-6" />
                                    </div>

                                    <p className="mt-3 text-sm font-semibold text-foreground">
                                        Upload cover image
                                    </p>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        JPG, PNG or WEBP. Maximum file size 5MB.
                                    </p>

                                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary">
                                        <Upload className="h-4 w-4" />
                                        Choose Image
                                    </div>

                                    <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleImageChange} className="hidden" />
                                </label>
                            ) : (
                                <div className="relative max-w-md overflow-hidden rounded-xl border border-border bg-muted">
                                    <div className="relative aspect-video w-full">
                                        <Image src={imagePreview} alt="Article cover preview" fill unoptimized className="object-cover" />
                                    </div>

                                    <button type="button" onClick={handleRemoveImage} aria-label="Remove cover image" className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-destructive hover:text-destructive-foreground">
                                        <X className="h-4 w-4" />
                                    </button>

                                    <div className="flex items-center gap-2 border-t border-border bg-card px-3 py-2">
                                        <FileImage className="h-4 w-4 text-primary" />

                                        <span className="text-xs text-muted-foreground">
                                            Cover image selected
                                        </span>
                                    </div>
                                </div>
                            )}

                            {errors.image && (
                                <p className="mt-1.5 text-xs text-destructive">
                                    {errors.image.message}
                                </p>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>

                            <Button type="submit" variant="primary" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        Creating Content
                                        <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                                    </>
                                ) : (
                                    "Create Content"
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
};

export default AddArticle;