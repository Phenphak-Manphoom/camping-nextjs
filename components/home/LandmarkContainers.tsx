import { fetchLandmarks } from "@/actions/actions";
import LandmarkLists from "./LandmarkLists";
const LandmarkContainers = async () => {
  const landmarks = await fetchLandmarks();
  console.log(landmarks);
  return (
    <div>
      <LandmarkLists landmarks={landmarks} />
    </div>
  );
};
export default LandmarkContainers;
