// src/app/admin/layout.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./admin.css";

export default function AdminLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setIsSidebarOpen(false); // Tutup sidebar saat pindah halaman
    }, [pathname]);

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/auth/logout", { method: "POST" });

            if (res.ok) {
                router.push("/auth");
                router.refresh();
                return;
            }
        } catch (err) {
            console.error("Logout error:", err);
        }

        // fallback jika gagal
        window.location.href = "/auth";
    };

    return (
        <div id="admin-scope" className="admin-layout">

            {/* MOBILE OVERLAY */}
            <div
                className={`mobile-overlay ${isSidebarOpen ? "active" : ""}`}
                onClick={() => setIsSidebarOpen(false)}
            />

            {/* SIDEBAR */}
            <aside className={`admin-sidebar ${isSidebarOpen ? "mobile-open" : ""}`}>
                <div className="flex justify-between items-center mb-8 px-2">
                    <div className="sidebar-logo text-xl font-bold text-white">
                        Admin Panel
                    </div>
                    <button
                        className="btn-close-sidebar"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        ✕
                    </button>
                </div>

                <nav>
                    <Link
                        href="/admin/dashboard"
                        className={`nav-item ${pathname === "/admin/dashboard" ? "active" : ""
                            }`}
                    >
                        <span className="w-6 text-center">📊</span>
                        <span>Dashboard</span>
                    </Link>

                    <Link
                        href="/admin/users"
                        className={`nav-item ${pathname.startsWith("/admin/users") ? "active" : ""
                            }`}
                    >
                        <span className="w-6 text-center">👥</span>
                        <span>Users</span>
                    </Link>

                    <Link
                        href="/admin/blog"
                        className={`nav-item ${pathname.startsWith("/admin/blog") ? "active" : ""
                            }`}
                    >
                        <span className="w-6 text-center">📝</span>
                        <span>Blog Posts</span>
                    </Link>

                    <Link
                        href="/admin/settings"
                        className={`nav-item ${pathname.startsWith("/admin/settings") ? "active" : ""
                            }`}
                    >
                        <span className="w-6 text-center">⚙️</span>
                        <span>Settings</span>
                    </Link>

                    <button className="nav-item nav-logout mt-auto" onClick={handleLogout}>
                        <span className="w-6 text-center">🚪</span>
                        <span>Logout</span>
                    </button>
                </nav>
            </aside>

            {/* MAIN AREA */}
            <div className="admin-main flex flex-col flex-grow">
                {/* TOP BAR */}
                <header className="admin-topbar">
                    <button
                        className="btn-toggle-sidebar"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        ☰
                    </button>
                    <h1 className="admin-title">Administration</h1>
                </header>

                {/* CONTENT AREA (IMPORTANT) */}
                <main className="admin-content">
                    {children}
                </main>
            </div>
        </div>
    );
}
