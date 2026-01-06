// src/app/platform/page.js
"use client";
import React from "react";
import Link from 'next/link';

export default function PlatformPage() {
    return (
        <div className="platform-page">

            {/* SECTION 1: HERO */}
            <section className="platform-hero">
                <div className="hero-bg-shapes">
                    <div className="hero-shape shape-1"></div>
                    <div className="hero-shape shape-2"></div>
                </div>

                <div className="hero-content">
                    <div className="hero-badge animate-fade-in-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                            <path d="M9 22v-4h6v4"></path>
                            <path d="M8 6h.01"></path>
                            <path d="M16 6h.01"></path>
                            <path d="M12 6h.01"></path>
                            <path d="M12 10h.01"></path>
                        </svg>
                        <span>E-Commerce SCM Platform</span>
                    </div>

                    <h1 className="hero-title">
                        Mall <span style={{ color: "var(--brand-blue)" }}>APTIKNAS</span>
                    </h1>

                    <p className="hero-desc">
                        Platform Supply Chain Management untuk Industri Teknologi Indonesia. Hubungkan bisnis Anda dengan ribuan mitra.
                    </p>

                    <div className="hero-promo">
                        🎉 GRATIS Keanggotaan Periode Januari - Maret 2026
                    </div>
                </div>
            </section>

            {/* SECTION 2: PRICING TIERS */}
            <section className="section-wrapper">
                <div className="section-header">
                    <h2 className="section-title">Pilih Tier Keanggotaan Anda</h2>
                    <p style={{ color: "var(--brand-grey)" }}>
                        Bergabunglah dengan ekosistem e-commerce SCM terbesar di Indonesia.
                    </p>
                </div>

                <div className="pricing-grid">

                    <PricingCard
                        title="Principal"
                        subtitle="Untuk brand owner & manufacturer"
                        color="var(--brand-blue)" // Mengirim variabel warna
                        icon={<IconCrown />}
                        benefits={[
                            "Visibilitas",
                            "Kontrol Ketat",
                            "Otomatisasi",
                            "Analisis Data",
                            "Promosi",
                        ]}
                    />

                    <PricingCard
                        title="Distributor"
                        subtitle="Untuk distributor resmi & wholesaler"
                        color="var(--brand-red)"
                        icon={<IconBuilding />}
                        benefits={[
                            "Akses katalog produk principal",
                            "Sistem pemesanan otomatis (PO)",
                            "Tracking pengiriman",
                            "Harga khusus distributor",
                            "Credit limit management",
                            "Multi-warehouse support"
                        ]}
                    />

                    <PricingCard
                        title="Mitra"
                        subtitle="Untuk reseller & UMKM"
                        color="var(--brand-green)"
                        icon={<IconUsers />}
                        benefits={[
                            "Akses katalog produk lengkap",
                            "Harga kompetitif reseller",
                            "Dropship & fulfillment support",
                            "Training & edukasi bisnis",
                            "Komunitas mitra APTIKNAS",
                            "Promo & diskon eksklusif"
                        ]}
                    />

                </div>
            </section>

            {/* SECTION 3: DOKUMEN */}
            <section className="docs-section">
                <div className="container mx-auto">
                    <div className="section-header">
                        <h2 className="section-title">Syarat Pendaftaran</h2>
                        <p style={{ color: "var(--brand-grey)" }}>Siapkan dokumen berikut untuk mendaftar</p>
                    </div>

                    <div className="doc-cards-grid">
                        <DocCard
                            title="NIB"
                            subtitle="Nomor Induk Berusaha"
                            desc="Dokumen resmi dari OSS yang menjadi identitas pelaku usaha."
                        />
                        <DocCard
                            title="NPWP"
                            subtitle="Nomor Pokok Wajib Pajak"
                            desc="Nomor identitas wajib pajak untuk administrasi perpajakan."
                        />
                    </div>

                    <div className="cta-banner">
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Proses Pendaftaran Mudah & Cepat</h3>
                        <p>Unggah dokumen NIB dan NPWP Anda, tim kami akan memverifikasi dalam 1x24 jam kerja.</p>
                        <button>Mulai Pendaftaran</button>
                    </div>
                </div>
            </section>

        </div>
    );
}

// --- SUB COMPONENTS ---

// Komponen Pricing Card yang menerima prop "color"
function PricingCard({ title, subtitle, icon, benefits, color }) {
    const targetUrl = "https://stage-scm.mallaptiknas.com/login";
    // Kita set variabel CSS '--theme-color' langsung di style wrapper
    return (
        <div className="pricing-card" style={{ '--theme-color': color }}>
            <div className="card-top-line"></div>

            <div className="card-badge-free">FREE 2026</div>

            <div className="card-icon">
                {icon}
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--brand-navy)' }}>{title}</h3>
            <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.875rem' }}>{subtitle}</p>

            <div style={{ marginBottom: '1.5rem' }}>
                <div className="card-price-strike">Rp xxx.xxx</div>
                <div>
                    <span className="card-price-main">GRATIS</span>
                    <span style={{ color: '#64748b' }}>/tahun</span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--brand-red)', fontWeight: '500', marginTop: '0.25rem' }}>Promo Jan - Mar 2026</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <p className="card-benefits-title">Keuntungan:</p>
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="benefit-item">
                        <div className="benefit-check">✔</div>
                        <span>{benefit}</span>
                    </div>
                ))}
            </div>

            <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card-action block text-center text-white no-underline"
            >
                Daftar Sekarang
            </a>
        </div >
    );
}

function DocCard({ title, subtitle, desc }) {
    return (
        <div className="doc-card">
            <div className="doc-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                </svg>
            </div>
            <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--brand-navy)' }}>{title}</h3>
                <p style={{ color: 'var(--brand-blue)', fontWeight: '500', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{subtitle}</p>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{desc}</p>
            </div>
        </div>
    );
}

// --- ICONS ---
const IconCrown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
);
const IconBuilding = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path></svg>
);
const IconUsers = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path></svg>
);