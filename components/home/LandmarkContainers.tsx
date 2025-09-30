import { fetchLandmarks, fetchLandmarksHero } from "@/actions/actions";
import LandmarkLists from "./LandmarkLists";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoriesList from "./CategoriesList";
import EmptyList from "./EmptyList";

const LandmarkContainers = async ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({
    search,
    category,
  });
  const landmarksHero: LandmarkCardProps[] = await fetchLandmarksHero();

  //console.log(landmarks);
  // if (landmarks.length === 0) {
  //   return <EmptyList />;
  // }
  return (
    <div>
      <Hero landmarks={landmarksHero} />
      <CategoriesList search={search} category={category} />
      {landmarks.length === 0 ? (
        <EmptyList />
      ) : (
        <LandmarkLists landmarks={landmarks} />
      )}
    </div>
  );
};
export default LandmarkContainers;
