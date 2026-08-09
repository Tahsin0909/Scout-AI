import { z } from "zod";

export const TriptraxSchema = z.object({});

export type TriptraxSchemaType = z.infer<typeof TriptraxSchema>;
