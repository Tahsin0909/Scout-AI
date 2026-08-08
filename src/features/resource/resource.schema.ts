import { z } from "zod";

export const ResourceSchema = z.object({});

export type ResourceSchemaType = z.infer<typeof ResourceSchema>;
