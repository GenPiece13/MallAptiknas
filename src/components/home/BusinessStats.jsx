// src/components/home/BusinessStats.jsx
"use client";
import Link from 'next/link';

const BusinessStats = () => {
    return (
        <section id="platform" className="platform-section">
            <div className="container">
                {/* HEADLINE SECTION */}
                <div className="section-head">
                    <h2 className="section-title">Platform Terintegrasi Kami</h2>
                    <p className="section-desc">
                        MallAptiknas menyediakan dua platform terintegrasi untuk memenuhi kebutuhan konsumen dan pelaku bisnis.
                    </p>
                </div>

                {/* GRID DUA KARTU */}
                <div className="platform-grid">

                    {/* KARTU 1: SCM PLATFORM B2B */}
                    <div className="platform-card card-b2b">
                        <div className="card-header">
                            <i className="fa-solid fa-network-wired card-icon"></i>
                            <h3>SCM Platform B2B</h3>
                        </div>
                        <p className="card-desc">
                            Sistem manajemen rantai pasok terintegrasi untuk pelaku bisnis IT.
                        </p>
                        <ul className="card-list">
                            <li>Integrasi real-time stok & harga</li>
                            <li>Otomasi proses PO hingga faktur</li>
                            <li>Manajemen gudang & logistik</li>
                            <li>Analitik bisnis canggih</li>
                        </ul>
                        <div className="card-footer">
                            <a
                                href="/platform"
                                className="card-link"
                            >
                                Pelajari SCM Platform <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    {/* KARTU 2: MARKETPLACE B2C */}
                    <div className="platform-card card-b2c">
                        <div className="card-header">
                            <i className="fa-solid fa-cart-shopping card-icon"></i>
                            <h3>Marketplace B2C</h3>
                        </div>
                        <p className="card-desc">
                            Platform e-commerce untuk konsumen individu mencari produk IT terbaik.
                        </p>
                        <ul className="card-list">
                            <li>Ribuan produk dari official store</li>
                            <li>Harga kompetitif & promo menarik</li>
                            <li>Sistem pembayaran aman</li>
                            <li>Lacak pengiriman real-time</li>
                        </ul>
                        <div className="card-footer">
                            <a
                                href="https://mallaptiknas.com/login"
                                className="card-link"
                            >
                                Jelajahi Marketplace <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .platform-section {
                    padding: 80px 0;
                    background-color: #ffffff;
                }

                /* HEADLINE */
                .section-head {
                    text-align: center;
                    margin-bottom: 50px;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .section-title {
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: var(--brand-navy);
                    margin-bottom: 16px;
                }
                .section-desc {
                    color: #64748B; /* Slate-500 */
                    font-size: 1.05rem;
                    line-height: 1.6;
                }

                /* GRID LAYOUT */
                .platform-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 30px;
                }
                @media (min-width: 768px) {
                    .platform-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                /* CARD STYLE (Base) */
                .platform-card {
                    background-color: #F0F9FF; /* Light Cyan background (mirip gambar) */
                    border: 1px solid #BAE6FD; /* Light Blue Border */
                    border-radius: 12px;
                    padding: 40px;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .platform-card:hover {
                    box-shadow: 0 10px 30px rgba(14, 165, 233, 0.15);
                    transform: translateY(-5px);
                    border-color: #0EA5E9; /* Sky-500 */
                }

                /* HEADER (Icon + Title) */
                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 20px;
                }
                .card-icon {
                    font-size: 1.8rem;
                }
                .platform-card h3 {
                    font-size: 1.4rem;
                    font-weight: 800;
                    margin: 0;
                }

                /* VARIASI WARNA (B2B vs B2C) */
                /* B2B: Biru Khas (Sky/Cyan) */
                .card-b2b .card-icon, 
                .card-b2b h3 {
                    color: #0284C7; /* Sky-600 */
                }
                
                /* B2C: Hijau Tosca (Teal) - Agar sedikit beda tapi tetap senada */
                .card-b2c {
                    background-color: #F0FDFA; /* Mint/Teal sangat muda */
                    border-color: #99F6E4; /* Teal muda */
                }
                .card-b2c .card-icon,
                .card-b2c h3 {
                    color: #0D9488; /* Teal-600 */
                }
                .card-b2c:hover {
                    border-color: #0D9488;
                }

                /* DESCRIPTION */
                .card-desc {
                    color: #475569; /* Slate-600 */
                    font-size: 1rem;
                    line-height: 1.6;
                    margin-bottom: 24px;
                }

                /* LIST BULLETS */
                .card-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 32px 0;
                    flex-grow: 1; /* Dorong footer ke bawah */
                }
                .card-list li {
                    position: relative;
                    padding-left: 20px;
                    margin-bottom: 12px;
                    color: #334155;
                    font-size: 0.95rem;
                    font-weight: 500;
                }
                /* Bullet point dot custom */
                .card-list li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    top: 0px;
                    font-size: 1.2rem;
                    line-height: 1.2;
                    font-weight: bold;
                    color: inherit; /* Ikuti warna teks atau bisa di-set spesifik */
                }

                /* FOOTER & LINK */
                .card-footer {
                    margin-top: auto;
                    width: 100%;
                }
                .card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 700;
                    font-size: 1.05rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                }
                
                /* Warna Link B2B */
                .card-b2b .card-link { 
                    color: #ffffff;
                    background-color: #0284C7;
                }
                .card-b2b .card-link:hover { 
                    gap: 12px;
                    background-color: #0369A1;
                    box-shadow: 0 6px 20px rgba(2, 132, 199, 0.3);
                    transform: translateY(-2px);
                }

                /* Warna Link B2C */
                .card-b2c .card-link { 
                    color: #ffffff;
                    background-color: #0D9488;
                }
                .card-b2c .card-link:hover { 
                    gap: 12px;
                    background-color: #0F766E;
                    box-shadow: 0 6px 20px rgba(13, 148, 136, 0.3);
                    transform: translateY(-2px);
                }

                /* RESPONSIVE */
                @media (max-width: 768px) {
                    .section-title { font-size: 1.8rem; }
                    .platform-card { padding: 30px; }
                }
            `}</style>
        </section>
    );
};
export default BusinessStats;