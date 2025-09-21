import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SigninCardButton } from "../form/Buttons";

const FavoriteToggleButton = async ({ landmarkId }: { landmarkId: string }) => {
  const { userId } = await auth();
  console.log(userId)
  if(!userId) return <SigninCardButton/>
  return (
    <Button size="icon" variant="outline">
      <Heart />
    </Button>
  );
};
export default FavoriteToggleButton;
