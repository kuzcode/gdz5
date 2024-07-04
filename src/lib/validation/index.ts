import * as z from "zod";

export const PostValidation = z.object({
  link: z.string().min(3, { message: "Минимум 3 символа" }).max(2200, { message: "Maximum 2,200 caracters" }),
  caption: z.string().min(0, { message: "" }).max(2200, { message: "Maximum 2,200 caracters" }),
  contact: z.string().min(4, { message: "Минимум 4 символа" }).max(2200, { message: "Maximum 2,200 caracters" }),
});
