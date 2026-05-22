"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter your name");
      return;
    }

    localStorage.setItem("user", name);
    router.push("/");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome 👋
        </h1>

        <p className="text-center text-gray-300 mb-6">
          Login to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}