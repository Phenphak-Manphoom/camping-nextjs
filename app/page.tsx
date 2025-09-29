import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainers from "@/components/home/LandmarkContainers";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
const Homepage = async ({
  searchParams,
}: {
  searchParams: { search?: string; category?: string };
}) => {
  //Search
  const { search, category } = await searchParams;
  
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainers search={search} category={category} />
      </Suspense>
    </section>
  );
};
export default Homepage;
