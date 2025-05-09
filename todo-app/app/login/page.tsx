"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Error Please fill in all fields");
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));

        window.location.href = "/todo";
        return;
      } else {
        alert(" user does not exist");
      }
    }

    console.log(storedUser);

    alert("Error Invalid email or password");
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className=" flex flex-col gap-10 w-full max-w-md bg-gray-100 rounded-lg  p-6">
        <h1 className="text-xl font-semibold text-center mb-6">Welcome back</h1>

        <div className=" flex justify-center">
          <img src="/login_img.png" alt="" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-200"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-200"
            />
          </div>

          <div className="text-right">
            <Link href="#" className="text-[#0DD3C5] text-sm hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className=" p-3 rounded-xl  w-full bg-[#0DD3C5] hover:bg-[#0bb0a3] text-white mt-4"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Dont have an account?" </span>
          <Link href="/register" className="text-[#0DD3C5] hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
