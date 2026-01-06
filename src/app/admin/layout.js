// src/app/admin/layout.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../styles/admin.css';

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Tutup sidebar otomatis saat pindah halaman (UX Mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div id="admin-scope">
      <div className="admin-layout">

        {/* 1. OVERLAY (Latar Gelap saat menu terbuka di HP) */}
        <div
          className={`mobile-overlay ${isSidebarOpen ? 'active' : ''}`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        {/* 2. SIDEBAR */}
        <aside className={`admin-sidebar ${isSidebarOpen ? 'mobile-open' : ''}`}>
          <div className="sidebar-header">
            <div className="sidebar-logo">Admin Panel</div>
            {/* Tombol Close khusus Mobile */}
            <button className="btn-close-sidebar" onClick={() => setIsSidebarOpen(false)}>
              ✕
            </button>
          </div>

          <nav>
            <Link href="/admin/dashboard" className={`nav-item ${pathname === '/admin/dashboard' ? 'active' : ''}`}>
              <i>📊</i> Dashboard
            </Link>
            <Link href="/admin/users" className={`nav-item ${pathname.includes('/admin/users') ? 'active' : ''}`}>
              <i>👥</i> Users
            </Link>
            <Link href="/admin/blog" className={`nav-item ${pathname.includes('/admin/blog') ? 'active' : ''}`}>
              <i>📝</i> Blog Posts
            </Link>
            <Link href="/admin/settings" className={`nav-item ${pathname === '/admin/settings' ? 'active' : ''}`}>
              <i>⚙️</i> Settings
            </Link>

            <button className="nav-item nav-logout">
              <i>🚪</i> Logout
            </button>
          </nav>
        </aside>

        {/* 3. MAIN CONTENT WRAPPER */}
        <main className="admin-main">

          {/* TOP NAVBAR / HEADER */}
          <header className="admin-header">
            <div className="header-left">
              {/* HAMBURGER BUTTON (Muncul di Mobile) */}
              <button
                className="hamburger-btn"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
              <h2 className="header-title">
                {pathname.includes('dashboard') ? 'Dashboard' :
                  pathname.includes('users') ? 'User Management' :
                    pathname.includes('blog') ? 'Blog Management' : 'Admin Area'}
              </h2>
            </div>

            <div className="header-right">
              <div className="admin-profile">
                <span className="admin-name">Administrator</span>
                <div className="admin-avatar">A</div>
              </div>
            </div>
          </header>

          {/* PAGE CONTENT */}
          <div className="content-body">
            {children}
          </div>

        </main>
      </div>
    </div>
  );
}