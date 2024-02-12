import React from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  icon?: string; // Optional icon class
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const RightSideBar: React.FC = () => {
  return (
    <div className="w-full fixed h-full bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-xl font-bold">Run Up</h2>
        {/* <button className="text-gray-400 hover:text-gray-200">Close</button> */}
      </div>
      <ul className="mt-4">
        {navItems.map((item) => (
          <li key={item.href} className="mb-2 hover:bg-gray-700">
            <Link href={item.href}>
              <button className="flex items-center px-4 py-2">
                {item.icon && <span className="mr-2 text-lg">{item.icon}</span>}
                {item.label}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSideBar;
