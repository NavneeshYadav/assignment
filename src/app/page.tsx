import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <h1>Welcome to My Responsive Website</h1>
        <p>This is a demo website using Next.js 15.</p>
      </main>
    </div>


  );
}
