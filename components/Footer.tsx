"use client";

import React from "react";
import Link from "next/link";
import { Book, User, Plus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-6">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="flex justify-center space-x-8 mb-4">
          <Link href="/" className="flex flex-col items-center space-y-1">
            <Book className="w-6 h-6" />
            <span className="text-sm">Home</span>
          </Link>
          <Link
            href="/courses"
            className="flex flex-col items-center space-y-1"
          >
            <Book className="w-6 h-6" />
            <span className="text-sm">Courses</span>
          </Link>
          <Link
            href="/createCourse"
            className="flex flex-col items-center space-y-1"
          >
            <Plus className="w-6 h-6" />
            <span className="text-sm">Create</span>
          </Link>
          <Link
            href="/profile"
            className="flex flex-col items-center space-y-1"
          >
            <User className="w-6 h-6" />
            <span className="text-sm">Profile</span>
          </Link>
        </div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} LearnQuest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
