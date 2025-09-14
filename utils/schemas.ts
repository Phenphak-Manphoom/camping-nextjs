import { z } from "zod";
import { categories } from "./categories";

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

export const landmarkSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(30, { message: "Name must not exceed 30 characters" }),
  category: z.string(),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters" })
    .max(200, { message: "Description must not exceed 200 characters" }),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: "Price must be greater than 0" }),
  province: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
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
