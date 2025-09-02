"use server";

import { profileSchema, validateWithZod } from "@/utils/schemas";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedData = validateWithZod(profileSchema, rawData);
    console.log("validated", validatedData);

    return { message: "Profile created successfully!" };
  } catch (error) {
    console.log(error);
    return { message: (error as Error).message || "An error server" };
  }
};
