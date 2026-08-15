import { z } from "zod";

export const articleCategories = [
    "Adventure",
    "Travel",
    "Safety",
    "Gear",
    "Hiking",
    "Overlanding",
] as const;

export const articleFormSchema = z.object({
    title: z.string().trim().min(3, "Title must be at least 3 characters").max(64, "Title cannot exceed 64 characters"),
    excerpt: z.string().trim().min(10, "Overview must be at least 10 characters").max(300, "Overview cannot exceed 300 characters"),
    category: z.enum(articleCategories, {
        message: "Please select a category",
    }),
    content: z.string().trim().min(20, "Article content must be at least 20 characters"),
    image: z.instanceof(File, {
        message: "Cover image is required",
    }).refine((file) => file.size <= 5 * 1024 * 1024, "Image must be smaller than 5MB").refine((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type), "Only JPG, PNG, and WEBP images are allowed"),
});

export type ArticleFormValues = z.infer<typeof articleFormSchema>;


const imageFileSchema = z
    .instanceof(File)
    .refine(
        (file) => file.size <= 5 * 1024 * 1024,
        "Image must be smaller than 5MB",
    )
    .refine(
        (file) =>
            ["image/jpeg", "image/png", "image/webp"].includes(file.type),
        "Only JPG, PNG, and WEBP images are allowed",
    );

export const editArticleSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "Title must be at least 3 characters")
        .max(64, "Title cannot exceed 64 characters"),

    excerpt: z
        .string()
        .trim()
        .min(10, "Overview must be at least 10 characters")
        .max(300, "Overview cannot exceed 300 characters"),

    category: z.enum(articleCategories, {
        message: "Please select a category",
    }),

    content: z
        .string()
        .trim()
        .min(20, "Article content must be at least 20 characters"),

    image: z.union([
        z.string().min(1, "Cover image is required"),
        imageFileSchema,
    ]),
});

export type EditArticleFormValues = z.infer<
    typeof editArticleSchema
>;