"use client"
import { useParams } from "next/navigation";
import links from "../../notes/links";
import Navbar from "@/app/components/navbar";
export default function ResourcePage() {
  const { slug } = useParams(); 
  const slugString = typeof slug === "string" ? slug : undefined;
  const link: string | undefined = slugString ? links.notes[slugString as keyof typeof links.notes] ?? undefined : undefined;

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-8">
      <Navbar/>
      {link ? (
        <iframe
          src={link}
          className="w-full max-w-4xl h-[80vh] border rounded-lg shadow-lg mt-16"
          allowFullScreen
        />
      ) : (
        <p className="text-red-500">Resource not found.</p>
      )}
    </div>
  );
}
