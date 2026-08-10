import { z } from "zod";

export const ScoutaiSchema = z.object({});

export type ScoutaiSchemaType = z.infer<typeof ScoutaiSchema>;
