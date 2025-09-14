"use server";

import {
  imageSchema,
  landmarkSchema,
  profileSchema,
  validateWithZod,
} from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in");
  }

  if (!user.privateMetadata.hasProfile) redirect("/create-profile");
  return user;
};

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
    const user = await currentUser(); //ใช้สำหรับเช็คตอน create profile ว่ามี user หรือยัง ทำแค่ครั้งเดียว
    if (!user) throw new Error("You must be logged in");
    const rawData = Object.fromEntries(formData);
    const validatedData = validateWithZod(profileSchema, rawData);
    //console.log("validated", validatedData);
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedData,
      },
    });

    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    // return { message: "Profile created successfully!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};

export const createLandmarkAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await getAuthUser();

    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    const validatedFile = validateWithZod(imageSchema, { image: file });
    const validatedField = validateWithZod(landmarkSchema, rawData);

    console.log("validated", validatedFile);
    console.log("validated", validatedField);

    //step 1 validate data
    //step 2 upload image to supabase
    //step 3 insert data to db

    return { message: "Landmark created successfully!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  //  redirect("/");
};
