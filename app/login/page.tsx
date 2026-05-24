"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!name) {
      alert("Enter your name");
      return;
    }

    localStorage.setItem("user", name);
    router.push("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">🚀 Welcome</h1>
        <p className="subtitle">Login to continue</p>

        <input
          className="input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="button" onClick={handleLogin}>
          Login →
        </button>
      </div>
    </div>
  );
}