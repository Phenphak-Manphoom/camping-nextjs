import { Heart } from "lucide-react";
import { Button } from "../ui/button";

const FavoriteToggleButton = ({ landmarkId }: { landmarkId: string }) => {
  return (
    <Button size="icon" variant="outline">
      <Heart />
    </Button>
  );
};
export default FavoriteToggleButton;
