import { z } from "zod";

export const MemberSchema = z.object({});

export type MemberSchemaType = z.infer<typeof MemberSchema>;
