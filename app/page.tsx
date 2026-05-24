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

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push("/login");
  }, [router]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!tool || !plan || !spend || !users || !useCase) {
      setResult("⚠️ Please fill all fields");
      return;
    }

    let message = "";
    let savings = 0;

    if (Number(spend) > 100) {
      message = `⚠️ High spending on ${tool}`;
      savings = 30;
    } else if (Number(spend) > 50) {
      message = `⚠️ Moderate spending on ${tool}`;
      savings = 15;
    } else {
      message = `✅ Spending is optimized`;
    }

    setResult(`${message}\n💰 Save up to $${savings}/month`);
  };

  return (
    <main className="container">
      <div className="card">

        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("user");
            router.push("/login");
          }}
        >
          Logout
        </button>

        <h1 className="title">💡 AI Spend Audit</h1>
        <p className="subtitle">Analyze & optimize your tools</p>

        <form onSubmit={handleSubmit}>
          <input className="input" placeholder="Tool (ChatGPT...)" value={tool} onChange={(e) => setTool(e.target.value)} />
          <input className="input" placeholder="Plan (Pro...)" value={plan} onChange={(e) => setPlan(e.target.value)} />
          <input className="input" type="number" placeholder="Monthly Spend" value={spend} onChange={(e) => setSpend(e.target.value)} />
          <input className="input" type="number" placeholder="Users" value={users} onChange={(e) => setUsers(e.target.value)} />
          <input className="input" placeholder="Use Case" value={useCase} onChange={(e) => setUseCase(e.target.value)} />

          <button className="button" type="submit">
            Analyze 🚀
          </button>
        </form>

        {result && (
          <div className="result">
            {result.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}