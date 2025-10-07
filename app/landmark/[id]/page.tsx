import { fetchLandmarkDetails } from "@/actions/actions";

const LandmarkDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const landmark = await fetchLandmarkDetails({ id });
  console.log(landmark);
  return <div>LandmarkDetails</div>;
};
export default LandmarkDetails;
