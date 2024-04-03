import React from "react";

export default function Navbar() {
  return (
    <div className="w-full border h-[4rem] py-6 px-4 fixed top-0 bg-transparent">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex gap-4">
          <a href="" className="text-lg">
            Home
          </a>
          <a href="design" className="text-lg">
            Design
          </a>
          <a href="development" className="text-lg">
            Development
          </a>
          <a href="#" className="text-lg">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
