import { fetchFavorites } from "@/actions/actions";
import EmptyList from "@/components/home/EmptyList";
import LandmarkLists from "@/components/home/LandmarkLists";

const FavoritePage = async () => {
  const favorites = await fetchFavorites();
  if (favorites.length === 0) {
    return <EmptyList heading="No favorites yet" message="Go add some!" />;
  }

  return <LandmarkLists landmarks={favorites} />;
};
export default FavoritePage;
