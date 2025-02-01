"use client"; // Ensure this is included at the top of your file

import { useState } from "react";
import { First } from "@/components/First";
import { UpcomingMovies } from "@/components/UpcomingMovies";
import { TopRatedMovies } from "@/components/TopRatedMovies";
import { PopularMovies } from "@/components/PopularMovies";
import { CarouselDemo } from "@/components/CarouselDemo";

export default function Home() {
  const [showNext, setShowNext] = useState(false);
  return (
    <div className="bg-[black]">
      <First />
      <CarouselDemo />

      <div className="max-w-7xl mx-auto p-4 space-y-12">
        <PopularMovies setShowNext={setShowNext} showNext={showNext} />

<UpcomingMovies setShowNext={setShowNext} showNext={showNext}/>
<TopRatedMovies />
      </div>
    </div>
  );
}
