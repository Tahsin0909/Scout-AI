import { z } from "zod";

export const ExploreMapSchema = z.object({});

export type ExploreMapSchemaType = z.infer<typeof ExploreMapSchema>;
