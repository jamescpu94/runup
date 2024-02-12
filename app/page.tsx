"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface NavItem {
  label: string;
  href: string;
  icon?: string; // Optional icon class
}

const navItems: NavItem[] = [
  { label: "Traffic signs", href: "quiz/traffic-signs" },
  { label: "Situational", href: "/situational" },
  { label: "Laws and Fines", href: "/lawsandfines" },
];

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <div className=" bg-slate-100 w-full p-5 top-0  ">
        <button onClick={() => router.back()}>Back</button>
        <h2 className=" text-center text-gray-500">Title</h2>
      </div>
      <div className="p-5 scroll-auto w-full flex flex-col justify-center clear-both">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border rounded-2xl border-slate-400 bg-green-700 p-5 text-white my-5"
          >
            {item.icon && <span className="mr-2 text-lg">{item.icon}</span>}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
