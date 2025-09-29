import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainers from "@/components/home/LandmarkContainers";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
const Homepage = async ({
  searchParams,
}: {
  searchParams: { search?: string };
}) => {
  //Search
  const { search } = await searchParams;

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainers search={search} />
      </Suspense>
    </section>
  );
};
export default Homepage;
