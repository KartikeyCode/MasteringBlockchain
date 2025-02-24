"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { isUser } from "./actions"; 
import signOut from "@/app/private/actions"


export default function Navbar() {
  // Color palette: primary: #034DA1, secondary: #C7A008
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkUser() {
      const userExists = await isUser();
      setIsLoggedIn(userExists);
    }
    checkUser();
  }, []);

  return (
    
    <div className="w-full flex items-center justify-between h-24 bg-[#fcfcfc] absolute  top-0  px-4 xl:px-10 border-b-4 border-[#034DA1]">
      <div className="flex items-center gap-4">
      <Image src="/srmlogo.png" width={100} height={30} alt="SRM logo" />
      <h1 className="text-black text-xl xl:text-2xl font-semibold">Mastering Blockchain</h1>
      </div>
      
      {isLoggedIn &&
       
       <button onClick={signOut} className=" p-2 xl:p-3 font-semibold bg-[#d8ba41]  hover:scale-105  transition-all text-white rounded">Sign Out</button>
        
    }
    
      
    </div>
    
  );
}
