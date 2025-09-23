import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SigninCardButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/actions/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { fa } from "zod/v4/locales";

const FavoriteToggleButton = async ({ landmarkId }: { landmarkId: string }) => {
  const { userId } = await auth();
  console.log(userId);
  if (!userId) return <SigninCardButton />;
  const favoriteId = await fetchFavoriteId({ landmarkId });

  return <FavoriteToggleForm favoriteId={favoriteId} landmarkId={landmarkId} />;
};
export default FavoriteToggleButton;
