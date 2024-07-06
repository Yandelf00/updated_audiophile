import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Sections from "@/components/Home/Sections";

export default function Home() {
  return (
    <main className="">
      <Hero/> 
      <Sections/>
    </main>
  );
}
