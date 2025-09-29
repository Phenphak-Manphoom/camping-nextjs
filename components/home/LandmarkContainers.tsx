import { fetchLandmarks } from "@/actions/actions";
import LandmarkLists from "./LandmarkLists";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoriesList from "./CategoriesList";

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
  console.log(landmarks);
  return (
    <div>
      <Hero landmarks={landmarks} />
      <CategoriesList search={search} category={category} />
      <LandmarkLists landmarks={landmarks} />
    </div>
  );
};
export default LandmarkContainers;
