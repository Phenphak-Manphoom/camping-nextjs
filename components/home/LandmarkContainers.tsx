import { fetchLandmarks } from "@/actions/actions";
import LandmarkLists from "./LandmarkLists";
import { LandmarkCardProps } from "@/utils/types";

const LandmarkContainers = async () => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks();
  console.log(landmarks);
  return (
    <div>
      <LandmarkLists landmarks={landmarks} />
    </div>
  );
};
export default LandmarkContainers;
