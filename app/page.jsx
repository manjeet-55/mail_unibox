"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Mail Unibox</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => router.push("/gmail")}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Gmail
          </button>
          <button
            onClick={() => router.push("http://localhost:3000/login")}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Outlook
          </button>
        </div>
      </div>
    </>
  );
}
