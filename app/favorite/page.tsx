import { fetchFavorites } from "@/actions/actions";
import LandmarkLists from "@/components/home/LandmarkLists";

const FavoritePage = async () => {
  const favorites = await fetchFavorites();

  return <LandmarkLists landmarks={favorites} />;
};
export default FavoritePage;
