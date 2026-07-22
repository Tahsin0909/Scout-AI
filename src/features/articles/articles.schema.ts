import { z } from "zod";

export const ArticlesSchema = z.object({});

export type ArticlesSchemaType = z.infer<typeof ArticlesSchema>;
