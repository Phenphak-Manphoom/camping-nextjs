import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainers from "@/components/home/LandmarkContainers";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
const Homepage = () => {
  //Search
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainers />
      </Suspense>
    </section>
  );
};
export default Homepage;
