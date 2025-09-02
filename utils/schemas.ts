import { z } from "zod";

//const profileSchema = z.string().min(2, "Name must be at least 2 characters");

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  userName: z
    .string()
    .min(2, { message: "User name must be at least 2 characters" }),
});

type SchemaType = z.infer<typeof profileSchema>;

export const validateWithZod = <T extends z.ZodTypeAny>(
  schema: T,
  data: unknown
): z.infer<T> => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.issues.map((issue) => issue.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
};
