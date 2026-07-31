import { z } from "zod";

export const AffiliationSchema = z.object({});

export type AffiliationSchemaType = z.infer<typeof AffiliationSchema>;
