import LandmarkCard from "../card/LandmarkCard";

//type landmark
const LandmarkLists = ({ landmarks }) => {
  return (
    <div>
      {landmarks.map((landmark) => {
        return <LandmarkCard key={landmark.id} landmark={landmark} />;
      })}
    </div>
  );
};
export default LandmarkLists;
