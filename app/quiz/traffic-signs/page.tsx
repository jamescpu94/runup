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

export default function TrafficSigns() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      Traffic Signs
    </div>
  );
}
