import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Sections from "@/components/Home/Sections";
import HomeZxN from "@/components/Home/HomeZxN";
import HomeZxS from "@/components/Home/HomeZxS";
import HomeYx from "@/components/Home/HomeYx";
import BestGear from "@/components/Home/BestGear";

export default function Home() {
  return (
    <main className="">
      <Hero/> 
      <Sections/>
      <HomeZxN/>
      <HomeZxS/>
      <HomeYx/>
      <BestGear/>
    </main>
  );
}
