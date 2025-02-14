"use client";

import { Book, Users, Coins } from "lucide-react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { useState } from "react";
import Footer from "../../../components/Footer";

export default function Courses() {
  const [isConnected, setIsConnected] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Web3 Development Fundamentals",
      description:
        "Learn the basics of Web3 development and blockchain technology",
      stakeAmount: "0.5 ETH",
      students: 156,
      totalStaked: "78 ETH",
    },
    {
      id: 2,
      title: "Smart Contract Security",
      description: "Master the art of writing secure smart contracts",
      stakeAmount: "0.8 ETH",
      students: 89,
      totalStaked: "71.2 ETH",
    },
  ];

  return (
    <section className="max-w-full">
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      <div className="space-y-8 max-w-2xl mx-auto pt-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Available Courses</h1>
          <Link
            href="/create-course"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
          >
            Create Course
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-800 p-6 rounded-xl space-y-4"
            >
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-slate-300">{course.description}</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-purple-400" />
                  <span>{course.stakeAmount}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-slate-400" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Book className="w-5 h-5 text-green-400" />
                  <span>{course.totalStaked} staked</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
