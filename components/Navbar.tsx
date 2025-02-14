"use client";

import React from "react";
import Link from "next/link";
import { Wallet, Book, User, Plus, } from "lucide-react";
import SplashSchoolImg from "../public/images/splash_school.png"
import Image from "next/image";

interface NavbarProps {
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
}

export default function Navbar({ isConnected, setIsConnected }: NavbarProps) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConnect = () => setIsConnected(true);
  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // useEffect(() => {
  //   const img = new Image(); // ✅ Runs only on the client
  // }, []);

  return (
    <nav className="bg-slate-800 border-b border-slate-700 py-3">
      <div className="container  px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2 p-3">
          <Image
            src={SplashSchoolImg}
            alt="LearnQuest Logo"
            width={70} // Specify width
            height={70} // Specify height
          />
          <span className="text-xl font-bold text-white">Splash Academy</span>
        </Link>

        <div className="flex justify-evenly items-center space-x-4 ">
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
