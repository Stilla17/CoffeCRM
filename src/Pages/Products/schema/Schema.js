import z from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(1, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(1, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});
