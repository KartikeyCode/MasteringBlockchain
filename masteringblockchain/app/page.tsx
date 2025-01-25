import Image from "next/image";
import Navbar from "./components/navbar";
import { createClient } from '@/utils/supabase/server'
export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
    </div>
  );
}
