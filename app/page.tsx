"use client"
import { useRouter } from "next/navigation"; 
import Navbar from "./components/navbar";
export default function Home() {
  const router = useRouter();
  const handleClick = ()=>{
    router.push("/private")
  }
  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <Navbar />
      <button onClick={handleClick} className="px-10 py-5 rounded-xl hover:scale-105 transition-all bg-[#034DA1] text-white text-3xl border-2 border-black"> View resources </button>
    </div>
  );
}
