"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function CreateCourse() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <section className="max-w-full">
        <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      <div className="max-w-2xl mx-auto pt-4 pb-8 space-y-8">

        <h1 className="text-3xl font-bold">Create a New Course</h1>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium">
              Course Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              placeholder="Enter course title"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              placeholder="Enter course description"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="stake" className="block text-sm font-medium">
              Stake Amount (ETH)
            </label>
            <input
              type="number"
              id="stake"
              step="0.1"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              placeholder="0.5"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Create Course
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
}
