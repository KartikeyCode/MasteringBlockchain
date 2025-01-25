"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import { isUser } from "./actions";
import { User } from "./actions";
import { useEffect, useState } from "react";
export default function PrivatePage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  useEffect(() => {
    async function checkUser() {
      const userExists = await isUser();
      if (userExists && userExists.success) {
        setIsLoggedIn(userExists.success);
        setUserData(userExists.data.user);
      } else {
        router.push("/login");
      }
    }
    checkUser();
  }, []);

  const handleClick = (location:string)=>{
      router.push("/"+location)
  }

  return (
    <>
      <Navbar />
    <div className="flex flex-col items-center justify-center w-full min-h-screen xl:pt-16 pt-32">
      {isLoggedIn && userData && <p>Hello {userData.email}</p>}

      <div className="flex flex-col lg:flex-row items-center mt-4 xl:mt-20 w-full p-10 gap-12">
        <button onClick={()=>handleClick("notes")} className="rounded-xl text-2xl xl:text-4xl w-full h-48 bg-[#FAEDCB] border-2 border-[black] hover:scale-105 transition-all"> Session Notes </button>
        <button onClick={()=>handleClick("videos")} className="rounded-xl text-2xl xl:text-4xl w-full h-48 bg-[#C9EFDE] border-2 border-[black] hover:scale-105 transition-all">
          {" "}
          Online Lectures{" "}
        </button>
        <button onClick={()=>handleClick("books")} className="rounded-xl text-2xl xl:text-4xl w-full h-48 bg-[#C6DEF1] border-2 border-[black] hover:scale-105 transition-all">
          {" "}
          Books and Articles{" "}
        </button>
      </div>
    </div>
    </>
  );
}
