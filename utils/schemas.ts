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

const validateImage = () => {
  const maxFileSize = 1024 * 1024; // 1MB
  return z.instanceof(File).refine(
    (file) => {
      return file.size <= maxFileSize;
    },
    { message: "File size should be less than 1MB" }
  );
};
export const imageSchema = z.object({
  image: validateImage(),
});

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
