"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Wallet, Book, User, Plus, Menu, X } from "lucide-react";

interface NavbarProps {
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
}

export default function Navbar({ isConnected, setIsConnected }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConnect = () => setIsConnected(true);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-slate-800 border-b border-slate-700 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <Book className="w-8 h-8 text-purple-500" />
          <span className="text-xl font-bold text-white">LearnQuest</span>
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 `}
        >
          <Link
            href="/courses"
            className="group flex flex-col items-center lg:space-y-1 text-white hover:text-purple-400"
          >
            <Book className="w-6 h-6 group-hover:text-purple-400" />
            <span className="text-sm">Courses</span>
          </Link>
          <Link
            href="/createCourse"
            className="group flex flex-col items-center lg:space-y-1 text-white hover:text-purple-400"
          >
            <Plus className="w-6 h-6 group-hover:text-purple-400" />
            <span className="text-sm">Create</span>
          </Link>
          <Link
            href="/profile"
            className="group flex flex-col items-center lg:space-y-1 text-white hover:text-purple-400"
          >
            <User className="w-6 h-6 group-hover:text-purple-400" />
            <span className="text-sm">Profile</span>
          </Link>
          <button
            onClick={handleConnect}
            className={`mt-4 lg:mt-0 px-4 py-2 rounded-lg ${
              isConnected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-purple-600 hover:bg-purple-700"
            } text-white flex items-center space-x-2`}
          >
            <Wallet className="w-5 h-5" />
            <span>{isConnected ? "Connected" : "Connect Wallet"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
