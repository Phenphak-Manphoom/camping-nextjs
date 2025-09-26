import { fetchLandmarks } from "@/actions/actions";
import LandmarkLists from "./LandmarkLists";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";

const LandmarkContainers = async () => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks();
  console.log(landmarks);
  return (
    <div>
      <Hero landmarks={landmarks} />
      <LandmarkLists landmarks={landmarks} />
    </div>
  );
};
export default LandmarkContainers;
