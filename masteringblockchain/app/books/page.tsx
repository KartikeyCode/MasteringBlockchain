"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import { isUser } from "../private/actions";
import { User } from "../private/actions";
import { useEffect, useState } from "react";
import links from "../notes/links";

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

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full min-h-screen xl:pt-16 pt-32 py-8">
        {isLoggedIn && userData && (
          <p className="text-xl font-semibold mb-4">Hello, {userData.email}</p>
        )}

        {/* Generate buttons dynamically */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {Object.keys(links.books).map((slug) => (
            <button
              key={slug}
              onClick={() => router.push(`/books/${slug}`)}
              className="px-10 py-5 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              {slug} 
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
