// src/app/admin/layout.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './admin.css'; // Wajib import CSS di sini

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Tutup sidebar otomatis saat pindah halaman (UX Mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (res.ok) {
        router.push('/auth');
        router.refresh();
      }
    } catch (error) {
      console.error("Logout error:", error);
      window.location.href = '/auth';
    }
  };

  // Tentukan judul header berdasarkan URL
  const getPageTitle = () => {
    if (pathname.includes('/blog')) return 'Manajemen Blog';
    if (pathname.includes('/users')) return 'Manajemen Pengguna';
    if (pathname.includes('/dashboard')) return 'Dashboard';
    return 'Admin Panel';
  };

  return (
    <div id="admin-scope">
      <div className="admin-layout">

        {/* 1. OVERLAY (Mobile) */}
        <div
          className={`mobile-overlay ${isSidebarOpen ? 'active' : ''}`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        {/* 2. SIDEBAR */}
        <aside className={`admin-sidebar ${isSidebarOpen ? 'mobile-open' : ''}`}>
          <div className="flex justify-between items-center mb-8 px-2">
            <div className="sidebar-logo text-xl font-bold text-white">Admin Panel</div>
            <button className="btn-close-sidebar hidden" onClick={() => setIsSidebarOpen(false)}>✕</button>
          </div>

          <nav>
            <Link href="/admin/dashboard" className={`nav-item ${pathname === '/admin/dashboard' ? 'active' : ''}`}>
              <span className="w-6 text-center">📊</span> <span>Dashboard</span>
            </Link>

            <Link href="/admin/users" className={`nav-item ${pathname.includes('/admin/users') ? 'active' : ''}`}>
              <span className="w-6 text-center">👥</span> <span>Users</span>
            </Link>

            <Link href="/admin/blog" className={`nav-item ${pathname.includes('/admin/blog') ? 'active' : ''}`}>
              <span className="w-6 text-center">📝</span> <span>Blog Posts</span>
            </Link>

            {/* Tombol Logout */}
            <button className="nav-item nav-logout mt-auto" onClick={handleLogout}>
              <span className="w-6 text-center">🚪</span> <span>Logout</span>
            </button>
          </nav>
        </aside>

        {/* 3. MAIN CONTENT WRAPPER */}
        <div className="admin-main flex flex-col flex-grow">
          {/* Header Global */}
          <header className="admin-header">
            <div className="flex items-center gap-4">
              <button className="hamburger-btn" onClick={() => setIsSidebarOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
              <h2 className="text-lg font-bold text-gray-700">{getPageTitle()}</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">A</div>
            </div>
          </header>

          {/* Halaman yang sedang aktif (page.js) akan dirender di sini */}
          <div className="admin-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}