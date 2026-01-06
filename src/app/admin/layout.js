// src/app/admin/layout.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Tambah useRouter
import './admin.css';

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Tutup sidebar saat pindah halaman (Mobile UX)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  // --- FUNGSI LOGOUT ---
  const handleLogout = async () => {
    try {
      // Panggil API Logout
      const res = await fetch('/api/auth/logout', { method: 'POST' });

      if (res.ok) {
        // Redirect ke halaman Auth/Login
        router.push('/auth');
        router.refresh(); // Refresh agar session di server clear
      }
    } catch (error) {
      console.error("Logout error:", error);
      // Fallback jika API gagal
      window.location.href = '/auth';
    }
  };

  return (
    <div id="admin-scope">
      <div className="admin-layout">

        {/* 1. OVERLAY (Mobile Only) */}
        <div
          className={`mobile-overlay ${isSidebarOpen ? 'active' : ''}`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        {/* 2. SIDEBAR NAVIGATION */}
        <aside className={`admin-sidebar ${isSidebarOpen ? 'mobile-open' : ''}`}>
          <div className="flex justify-between items-center mb-8 px-2">
            <div className="sidebar-logo text-xl font-bold text-white">Admin Panel</div>
            <button className="btn-close-sidebar hidden" onClick={() => setIsSidebarOpen(false)}>
              ✕
            </button>
          </div>

          <nav>
            {/* LINK DASHBOARD */}
            <Link href="/admin/dashboard" className={`nav-item ${pathname === '/admin/dashboard' ? 'active' : ''}`}>
              <span className="w-6 text-center">📊</span>
              <span>Dashboard</span>
            </Link>

            {/* LINK USERS */}
            <Link href="/admin/users" className={`nav-item ${pathname.includes('/admin/users') ? 'active' : ''}`}>
              <span className="w-6 text-center">👥</span>
              <span>Users</span>
            </Link>

            {/* LINK BLOG */}
            <Link href="/admin/blog" className={`nav-item ${pathname.includes('/admin/blog') ? 'active' : ''}`}>
              <span className="w-6 text-center">📝</span>
              <span>Blog Posts</span>
            </Link>

            {/* LINK SETTINGS (Contoh) */}
            <Link href="/admin/settings" className={`nav-item ${pathname.includes('/admin/settings') ? 'active' : ''}`}>
              <span className="w-6 text-center">⚙️</span>
              <span>Settings</span>
            </Link>

            {/* TOMBOL LOGOUT (Button dengan onClick) */}
            <button
              className="nav-item nav-logout mt-auto"
              onClick={handleLogout}
              type="button"
            >
              <span className="w-6 text-center">🚪</span>
              <span>Logout</span>
            </button>
          </nav>
        </aside>

        {/* 3. MAIN AREA */}
        <div className="admin-main flex flex-col flex-grow">

          {/* TOP HEADER */}
          <header className="admin-header">
            <div className="flex items-center gap-4">
              {/* HAMBURGER BUTTON */}
              <button
                className="hamburger-btn"
                onClick={() => setIsSidebarOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>

              <h2 className="text-lg font-bold text-gray-700">
                {pathname.includes('blog') ? 'Manajemen Blog' :
                  pathname.includes('users') ? 'Manajemen User' :
                    pathname.includes('dashboard') ? 'Dashboard' : 'Admin Area'}
              </h2>
            </div>

            {/* Profil Admin Kecil di Kanan */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 hidden md:block">Administrator</span>
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm border border-slate-300">
                A
              </div>
            </div>
          </header>

          {/* CONTENT BODY */}
          <div className="admin-content">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}