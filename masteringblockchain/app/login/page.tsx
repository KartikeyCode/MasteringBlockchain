"use client"
import Navbar from "../components/navbar";
import { login } from './actions'; // Import the server action


export default function Login() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <form  className="bg-white p-12 shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button formAction={login} className="w-full p-2 bg-[#d8ba41] hover:scale-105 transition-all text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
}
