"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [users, setUsers] = useState("");
  const [useCase, setUseCase] = useState("");
  const [result, setResult] = useState("");

  const router = useRouter();

  // 🔐 Login check
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, []);

  // 🧠 Audit logic
  const handleSubmit = (e: any) => {
  e.preventDefault();

  let message = "";
  let savings = 0;

  if (Number(spend) > 100) {
    message = `⚠️ High spending detected on ${tool}. Consider downgrading your ${plan} plan.`;
    savings = 30;
  } else if (Number(spend) > 50) {
    message = `⚠️ Moderate overspending on ${tool}. Try optimizing usage.`;
    savings = 15;
  } else {
    message = `✅ Your spending on ${tool} is well optimized.`;
  }

  if (savings > 0) {
    message += ` 💰 You could save around $${savings}/month.`;
  }

  setResult(message);
};

  return (
    <main className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900"></div>

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Card */}
      <div className="relative w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8">

        {/* 🔴 Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("user");
            router.push("/login");
          }}
          className="absolute top-4 right-4 bg-red-500 px-3 py-1 rounded-lg text-sm hover:bg-red-600"
        >
          Logout
        </button>

        <h1 className="text-3xl font-bold text-center mb-2">
          AI Spend Audit
        </h1>

        <p className="text-gray-300 text-center mb-6">
          Analyze and optimize your AI tool expenses
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Tool (ChatGPT, Claude...)"
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            value={tool}
            onChange={(e) => setTool(e.target.value)}
          />

          <input
            type="text"
            placeholder="Plan (Free, Pro, Team)"
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          />

          <input
            type="number"
            placeholder="Monthly Spend ($)"
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            value={spend}
            onChange={(e) => setSpend(e.target.value)}
          />

          <input
            type="number"
            placeholder="Number of Users"
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            value={users}
            onChange={(e) => setUsers(e.target.value)}
          />

          <input
            type="text"
            placeholder="Use Case"
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Analyze Spend
          </button>
        </form>

        {/* Result */}
        {result && (
          <div className="mt-6 p-4 bg-white/10 rounded-lg text-center text-lg font-medium border border-gray-700">
            {result}
            </div>
          )}
      </div>
    </main>
  );
}