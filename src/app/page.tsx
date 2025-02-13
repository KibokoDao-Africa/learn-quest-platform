"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Profile from "../app/profile/page";
import Courses from "../app/courses/page";
import CreateCourse from "../app/createCourse/page";
import { Trophy, Shield, Coins } from "lucide-react";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);

  // Use window.location.pathname instead of useRouter
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      <main className="container mx-auto px-4 py-8">
        <section>
          <div className="space-y-12">
            <section className="text-center space-y-6 py-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Learn, Stake, Achieve
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Welcome to the future of learning where you can stake to learn,
                bet on others, and earn rewards for completing courses.
              </p>
            </section>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-xl space-y-4">
                <Trophy className="w-12 h-12 text-yellow-500" />
                <h3 className="text-xl font-semibold">Stake to Learn</h3>
                <p className="text-slate-300">
                  Put your crypto where your commitment is. Stake to enroll and
                  get it back upon completion.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl space-y-4">
                <Shield className="w-12 h-12 text-purple-500" />
                <h3 className="text-xl font-semibold">Back Others</h3>
                <p className="text-slate-300">
                  Believe in someone&apos;s success? Stake on their journey and
                  share their rewards.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl space-y-4">
                <Coins className="w-12 h-12 text-green-500" />
                <h3 className="text-xl font-semibold">Earn Rewards</h3>
                <p className="text-slate-300">
                  Complete courses, earn back your stake, and gain rewards from
                  your supporters.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Render components based on pathname */}
        {pathname === "/profile" && <Profile />}
        {pathname === "/courses" && <Courses />}
        {pathname === "/createCourse" && <CreateCourse />}
      </main>
    </div>
  );
}
