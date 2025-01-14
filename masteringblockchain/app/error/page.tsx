'use client';

import { useRouter } from 'next/navigation';

export default function ErrorPage() {
  const router = useRouter();


  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-black text-4xl">Wrong Credentials</h1>
      <button
        onClick={()=>router.push("/")}
        className="text-xl mt-5 p-2 bg-[#C7A008] text-white rounded hover:scale-105 transition-all"
      >
        Click here to go back
      </button>
    </div>
  );
}
