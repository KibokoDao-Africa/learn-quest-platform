"use client";

import { Book, Trophy, Timer } from "lucide-react";
import Navbar from "../../../components/Navbar";
import { useState } from "react";
import Footer from "../../../components/Footer";

export default function Profile() {
  const [isConnected, setIsConnected] = useState(false);

  const enrolledCourses = [
    {
      id: 1,
      title: "Web3 Development",
      progress: 75,
      staked: "0.5 ETH",
      supporters: 12,
      opponents: 3,
    },
  ];

  return (
    <section className="max-w-full">
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      <div className="max-w-2xl mx-auto pt-4 space-y-8">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">JD</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-slate-400">0x1234...5678</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-800 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <Book className="w-5 h-5 text-purple-500" />
              <span className="text-lg font-semibold">3 Courses</span>
            </div>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="text-lg font-semibold">2 Completed</span>
            </div>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <Timer className="w-5 h-5 text-green-500" />
              <span className="text-lg font-semibold">1 In Progress</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Enrolled Courses</h2>
          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="bg-slate-800 p-6 rounded-xl space-y-4"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <span className="text-purple-400">{course.staked}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>{course.progress}% Complete</span>
                  <div className="flex space-x-4">
                    <span>👍 {course.supporters}</span>
                    <span>👎 {course.opponents}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
