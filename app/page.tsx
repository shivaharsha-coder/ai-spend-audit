"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function Home() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [users, setUsers] = useState("");
  const [useCase, setUseCase] = useState("");
  const [result, setResult] = useState("");
  const [username, setUsername] = useState("");
  const [savings, setSavings] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    } else {
      setUsername(user);
    }
  }, [router]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!tool || !plan || !spend || !users || !useCase) {
      setResult("⚠️ Please fill all fields");
      return;
    }

    let message = "";
    let suggestion = "";
    let save = 0;

    if (Number(spend) > 100) {
      message = `⚠️ High spending on ${tool}`;
      suggestion = `Downgrade ${plan} plan`;
      save = 30;
    } else if (Number(spend) > 50) {
      message = `⚠️ Moderate spending on ${tool}`;
      suggestion = `Optimize usage`;
      save = 15;
    } else {
      message = `✅ Spending is optimized`;
      suggestion = `No changes needed`;
    }

    setSavings(save);
    setResult(`${message}\n${suggestion}`);
  };

  return (
    <main className="container">

      {/* CENTER HEADER */}
      <div className="header-center">
        <h1>👋 Welcome, {username}</h1>
        <p>AI Spend Optimization Dashboard</p>
      </div>

      {/* MAIN CARD */}
      <div className="card">

        {/* Logout */}
        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("user");
            router.push("/login");
          }}
        >
          Logout
        </button>

        <h2 className="title">💡 AI Spend Audit</h2>

        <form onSubmit={handleSubmit}>

          <div className="grid">
            <input className="input" placeholder="Tool (e.g., ChatGPT,Claude...)" value={tool} onChange={(e) => setTool(e.target.value)} />
            <input className="input" placeholder="Plan (e.g., Free,Pro,Team...)" value={plan} onChange={(e) => setPlan(e.target.value)} />
          </div>

          <div className="grid">
            <input className="input" type="number" placeholder="Monthly Spend" value={spend} onChange={(e) => setSpend(e.target.value)} />
            <input className="input" type="number" placeholder="Users" value={users} onChange={(e) => setUsers(e.target.value)} />
          </div>

          <input className="input" placeholder="Use Case" value={useCase} onChange={(e) => setUseCase(e.target.value)} />

          <button className="button">Analyze 🚀</button>
        </form>

        {/* RESULT */}
        {result && (
          <div className="result">
            {result.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}

      </div>

      {/* 📊 DASHBOARD */}
      {result && (
        <div className="dashboard">

          <div className="dash-card">
            <h3>💰 Estimated Savings</h3>
            <p>${savings}/month</p>
          </div>

          <div className="dash-card">
            <h3>📊 Spend Level</h3>
            <p>{Number(spend) > 100 ? "High" : Number(spend) > 50 ? "Medium" : "Low"}</p>
          </div>

          <div className="dash-card">
            <h3>⚡ Efficiency</h3>
            <p>{Number(spend) > 50 ? "Needs Optimization" : "Good"}</p>
          </div>

        </div>
      )}

    </main>
  );
}