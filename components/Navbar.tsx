"use client";

import React from "react";
import Link from "next/link";
import { Wallet, Book, User, Plus } from "lucide-react";

interface NavbarProps {
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
}

export default function Navbar({ isConnected, setIsConnected }: NavbarProps) {
  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <nav className="bg-slate-800 border-b border-slate-700 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 ">
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 "
          >
            <Book className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">LearnQuest</span>
          </Link>

          <div className="flex items-center space-x-6 ">
            <Link
              href="/courses"
              className="group flex flex-col items-center space-y-1"
            >
              <Book className="w-6 h-6 group-hover:text-purple-400 transition-transform transform group-hover:scale-110" />
              <span className="text-sm group-hover:text-purple-400 transition-colors">
                Courses
              </span>
            </Link>
            <Link
              href="/createCourse"
              className="group flex flex-col items-center space-y-1"
            >
              <Plus className="w-6 h-6 group-hover:text-purple-400 transition-transform transform group-hover:scale-110" />
              <span className="text-sm group-hover:text-purple-400 transition-colors">
                Create
              </span>
            </Link>
            <Link
              href="/profile"
              className="group flex flex-col items-center space-y-1"
            >
              <User className="w-6 h-6 group-hover:text-purple-400 transition-transform transform group-hover:scale-110" />
              <span className="text-sm group-hover:text-purple-400 transition-colors">
                Profile
              </span>
            </Link>

            <button
              onClick={handleConnect}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isConnected
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              <Wallet className="w-5 h-5" />
              <span>{isConnected ? "Connected" : "Connect Wallet"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
