import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import Section10 from "@/components/Section10";
import Image from "next/image";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="main-content">
        <Section1 />
        <InfiniteSlider />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        {/* <Section6 /> */}
        <Section7 />
        {/* <Section8/> */}
        <Section9 />
        <Section10 />
        <InfiniteCarousel />
        <Footer />
      </main>
    </div>


  );
}
