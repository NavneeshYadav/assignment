import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <main className="main-content">
        <Section1 />
      </main>
    </div>


  );
}
