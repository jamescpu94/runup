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

export default function Review() {
  const router = useRouter();
  return (
    <div>
      <h2>Review</h2>
    </div>
  );
}
