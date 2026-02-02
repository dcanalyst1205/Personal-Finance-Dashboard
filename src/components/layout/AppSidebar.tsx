"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    PiggyBank,
    ScrollText,
    TrendingUp,
    Bitcoin,
} from "lucide-react";

export function AppSidebar() {
    const pathname = usePathname();

    const links = [
        { name: "Overview", href: "/", icon: LayoutDashboard },
        { name: "Savings", href: "/savings", icon: PiggyBank },
        { name: "Bonds", href: "/bonds", icon: ScrollText },
        { name: "Index Funds", href: "/index-funds", icon: TrendingUp },
        { name: "Crypto", href: "/crypto", icon: Bitcoin },
    ];

    return (
        <div className="flex flex-col h-screen w-64 bg-slate-950 text-white border-r border-slate-800">
            <div className="p-6 border-b border-slate-800">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    RiskDash
                </h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-slate-800 text-white shadow-md shadow-slate-900/50"
                                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                            )}
                        >
                            <Icon className={cn("w-5 h-5", isActive ? "text-blue-400" : "text-slate-500")} />
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 border-t border-slate-800">
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                    <div className="text-xs">
                        <p className="font-medium text-slate-200">Demo User</p>
                        <p className="text-slate-500">Premium Plan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
