"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Profile from "../app/profile/page";
import Courses from "../app/courses/page";
import CreateCourse from "../app/createCourse/page";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);

  // Use window.location.pathname instead of useRouter
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      <main className="container mx-auto px-4 py-8">
        {/* Render components based on pathname */}
        {pathname === "/profile" && <Profile />}
        {pathname === "/courses" && <Courses />}
        {pathname === "/createCourse" && <createCourse />}
      </main>
    </div>
  );
}
