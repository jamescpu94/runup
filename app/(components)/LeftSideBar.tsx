import React from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  icon?: string; // Optional icon class
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Review", href: "/review" },
  { label: "Quest", href: "/quest" },
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/profile" },
];

const LeftSideBar: React.FC = () => {
  return (
    <nav className="w-64 fixed h-full bg-gray-800 text-white flex flex-col left-0 ps-5">
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
    </nav>
  );
};

export default LeftSideBar;
