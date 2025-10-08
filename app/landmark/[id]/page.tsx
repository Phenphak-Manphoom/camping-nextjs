import { fetchLandmarkDetails } from "@/actions/actions";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import MyBreadcrumb from "@/components/landmark/MyBreadcrumb";
import { redirect } from "next/navigation";

const LandmarkDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const landmark = await fetchLandmarkDetails({ id });
  if (!landmark) redirect("/");

  return (
    <section>
      <MyBreadcrumb name={landmark.name} />
      <header className="flex justify-between mt-4 items-center">
        <h1 className="text-4xl font-bold">{landmark.name} </h1>
        <div className="flex gap-4 items-center">
          <span>share</span>
          <FavoriteToggleButton landmarkId={landmark.id} />
        </div>
      </header>
    </section>
  );
};
export default LandmarkDetails;
