import z from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(1, "Name id required")
    .max(32, "name must be at most 32 characters."),
 
});
