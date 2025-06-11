import { z } from "zod/v4";

export const userDetailsSchema = z.strictObject({
  id: z.number().int().positive(),
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.url(),
});

export type UserDetails = z.infer<typeof userDetailsSchema>;

const supportSchema = z.strictObject({
  url: z.url(),
  text: z.string(),
});

export const listUsersRespSchema = z.strictObject({
  page: z.number().int().positive(),
  per_page: z.number().int().positive(),
  total: z.number().int().positive(),
  total_pages: z.number().int().positive(),
  data: z.array(userDetailsSchema),
  support: supportSchema,
});
