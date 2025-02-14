"use client";

import React from "react";


export default function Footer() {
  return (
    <footer className="bg-slate-900 py-6 mt-4 pt-5 ">
      <div className="container flex justify-center items-center mx-auto px-4 text-center text-white"></div>{" "}
      <p className="text-sm text-slate-400 mx-auto flex justify-center items-center ">
        © {new Date().getFullYear()} Splash Academy. All rights reserved.
      </p>
    </footer>
  );
}
