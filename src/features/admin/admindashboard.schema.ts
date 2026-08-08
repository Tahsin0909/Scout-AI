import { z } from "zod";

export const AdmindashboardSchema = z.object({});

export type AdmindashboardSchemaType = z.infer<typeof AdmindashboardSchema>;
