"use server";

import { profileSchema, validateWithZod } from "@/utils/schemas";

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

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
    return renderError(error);
  }
};
