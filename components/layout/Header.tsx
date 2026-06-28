"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight">
            GALICIX
          </span>

          <span className="rounded-md bg-blue-600 px-2 py-1 text-xs font-bold text-white">
            STORE
          </span>
        </Link>

        {/* Search */}
        <div className="hidden w-full max-w-xl items-center px-8 md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <Input
              placeholder="Search products..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          <Link href="#">Categories</Link>
          <Link href="#">Deals</Link>
          <Link href="#">Buying Guides</Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <ShoppingBag className="h-5 w-5 cursor-pointer" />

          <Avatar>
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
        </div>

      </div>
    </header>
  );
}