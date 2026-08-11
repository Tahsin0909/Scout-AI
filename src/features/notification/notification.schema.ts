import { z } from "zod";

export const NotificationSchema = z.object({});

export type NotificationSchemaType = z.infer<typeof NotificationSchema>;
