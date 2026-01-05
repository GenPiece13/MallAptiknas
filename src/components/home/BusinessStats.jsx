// src/components/home/BusinessStats.jsx
"use client";
import { useState } from 'react';

const BusinessStats = () => {
    // --- STATE MANAGEMENT ---
    const [activeTabB2B, setActiveTabB2B] = useState('principal');
    const [activeTabMarket, setActiveTabMarket] = useState('corporate');

    // --- DATA CONTENT B2B (SCM) ---
    const b2bData = {
        principal: [
            { title: "Visibilitas", desc: "Rantai pasok lengkap dari hulu ke hilir." },
            { title: "Kontrol Ketat", desc: "Harga dan distribusi terjaga sesuai aturan." },
            { title: "Otomatisasi", desc: "Proses pesanan & pembayaran serba digital." },
            { title: "Analisis Data", desc: "Data penjualan & perilaku konsumen real-time." },
            { title: "Promosi", desc: "Manajemen promosi yang terstruktur." }
        ],
        distributor: [
            { title: "Akses Luas", desc: "Lebih banyak principal dan toko dalam satu platform." },
            { title: "Manajemen Stok", desc: "Inventori otomatis dan real-time." },
            { title: "Integrasi Keuangan", desc: "Sistem pembayaran & kredit terpadu." },
            { title: "Logistik Efisien", desc: "Pengiriman lebih terorganisir." },
            { title: "Dashboard", desc: "Pantau performa bisnis dalam satu layar." }
        ],
        mitra: [
            { title: "Katalog Lengkap", desc: "Akses produk dari banyak principal/distributor." },
            { title: "Harga Transparan", desc: "Promo real-time & harga bersaing." },
            { title: "Pemesanan Cepat", desc: "Proses order mudah & ringkas." },
            { title: "Stok Lean", desc: "Tidak perlu menumpuk stok berlebih." },
            { title: "Pembiayaan", desc: "Dukungan akses modal usaha." }
        ]
    };

    // --- DATA CONTENT MARKETPLACE ---
    const marketData = {
        corporate: [
            {
                title: "Pengadaan Efisien",
                items: ["Fitur Lelang/E-Tendering Lokal", "Proses Digital End-to-End", "Database Pemasok Tervalidasi"]
            },
            {
                title: "Jaminan 100% Original",
                items: ["SCM Traceability (Terlacak)", "Dokumen Keaslian Digital"]
            },
            {
                title: "Strategic Sourcing",
                items: ["Kompetisi Harga Sehat", "Purchasing Intelligence"]
            },
            {
                title: "Operasional Mudah",
                items: ["Streamline Approval Workflow", "Katalog Terkelola"]
            }
        ],
        personal: [
            {
                title: "Belanja Aman",
                items: ["Trust Factor Terjamin", "Tracking Produk SCM"]
            },
            {
                title: "Harga Kompetitif",
                items: ["Marketplace yang Dikurasi", "Promo & Diskon Resmi"]
            },
            {
                title: "Transaksi Mudah",
                items: ["Beragam Metode Pembayaran", "Klaim Garansi Lebih Mudah"]
            }
        ]
    };

    return (
        <section id="platform" className="cp-section cp-section--alt">
            <div className="container">
                <div className="cp-head">
                    <span className="cp-kicker">PLATFORM KAMI</span>
                    <h2 className="cp-title">Solusi Digital <span>Terintegrasi</span></h2>
                    <p className="cp-sub">Ekosistem teknologi yang menghubungkan kebutuhan bisnis (B2B) hingga konsumen akhir (B2C).</p>
                </div>

                <div className="cp-platform-grid">

                    {/* =========================================================
                        KARTU 1: SCM PLATFORM B2B
                       ========================================================= */}
                    <div className="cp-platform-card reveal card-b2b">
                        {/* DEKORASI AKSEN */}
                        <div className="card-accent-line"></div>
                        <div className="card-pattern"></div>
                        <div className="card-watermark"><i className="fa-solid fa-network-wired"></i></div>

                        <div className="cp-card-inner">
                            <div className="cp-platform-top">
                                <div className="cp-platform-ic">
                                    <i className="fa-solid fa-network-wired"></i>
                                </div>
                                <div>
                                    <h3>SCM Platform B2B</h3>
                                    <p>Solusi rantai pasok cerdas untuk bisnis.</p>
                                </div>
                            </div>

                            {/* NAVIGASI TAB B2B */}
                            <div className="tab-container">
                                {['principal', 'distributor', 'mitra'].map((role) => (
                                    <button
                                        key={role}
                                        className={`tab-btn ${activeTabB2B === role ? 'active' : ''}`}
                                        onClick={() => setActiveTabB2B(role)}
                                    >
                                        {role.charAt(0).toUpperCase() + role.slice(1)}
                                    </button>
                                ))}
                            </div>

                            {/* KONTEN B2B */}
                            <div className="tab-content-area custom-scroll">
                                <ul className="info-list fade-in" key={activeTabB2B}>
                                    {b2bData[activeTabB2B].map((item, index) => (
                                        <li key={index}>
                                            <div className="info-icon"><i className="fa-solid fa-check"></i></div>
                                            <div className="info-text">
                                                <strong>{item.title}</strong>
                                                <span>{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA BUTTON B2B */}
                            <div className="card-footer">
                                <a
                                    className="cp-link"
                                    href="https://stage-scm.mallaptiknas.com/login"
                                    target="_blank"
                                >
                                    Gabung SCM Sekarang <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================
                        KARTU 2: MARKETPLACE
                       ========================================================= */}
                    <div className="cp-platform-card reveal card-market">
                        {/* DEKORASI AKSEN */}
                        <div className="card-accent-line market-line"></div>
                        <div className="card-pattern"></div>
                        <div className="card-watermark"><i className="fa-solid fa-bag-shopping"></i></div>

                        <div className="cp-card-inner">
                            <div className="cp-platform-top">
                                <div className="cp-platform-ic market-ic">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </div>
                                <div>
                                    <h3>Marketplace</h3>
                                    <p>Belanja produk IT resmi & terpercaya.</p>
                                </div>
                            </div>

                            {/* NAVIGASI TAB MARKETPLACE */}
                            <div className="tab-container">
                                <button
                                    className={`tab-btn ${activeTabMarket === 'corporate' ? 'active' : ''}`}
                                    onClick={() => setActiveTabMarket('corporate')}
                                >
                                    Korporat
                                </button>
                                <button
                                    className={`tab-btn ${activeTabMarket === 'personal' ? 'active' : ''}`}
                                    onClick={() => setActiveTabMarket('personal')}
                                >
                                    Personal
                                </button>
                            </div>

                            {/* KONTEN MARKETPLACE */}
                            <div className="tab-content-area custom-scroll">
                                <div className="fade-in" key={activeTabMarket}>
                                    {marketData[activeTabMarket].map((group, idx) => (
                                        <div key={idx} className="market-group">
                                            <h4>{group.title}</h4>
                                            <ul>
                                                {group.items.map((subItem, subIdx) => (
                                                    <li key={subIdx}>
                                                        <i className="fa-solid fa-caret-right"></i> {subItem}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA BUTTON MARKETPLACE */}
                            <div className="card-footer">
                                <a
                                    className="cp-link"
                                    href="https://mallaptiknas.com/login"
                                    target="_blank"
                                >
                                    Mulai Belanja <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* STYLE CSS LOKAL */}
            <style jsx>{`
                #platform {
                    background:
                    radial-gradient(
                    circle at 50% 20%,
                    #eaf4ff 0%,
                    #cfe8ff 35%,
                    rgba(207, 232, 255, 0.6) 55%,
                    rgba(207, 232, 255, 0) 70%
                    ),
                linear-gradient(180deg, #cfe8ff 0%, #7fbfff 45%, #1e88e5 100%);}

                /* --- CARD STYLING UTAMA --- */
                .cp-platform-card {
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.04);
                    position: relative; /* Penting untuk dekorasi absolut */
                    overflow: hidden;   /* Agar dekorasi tidak keluar */
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid rgba(0,0,0,0.03);
                }

                .cp-platform-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 50px rgba(0, 174, 239, 0.1);
                }

                /* Wrapper konten agar selalu di atas dekorasi */
                .cp-card-inner {
                    position: relative;
                    z-index: 2;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                /* --- DEKORASI VISUAL (ACCENTS) --- */
                
                /* 1. Garis Atas Gradasi */
                .card-accent-line {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 6px;
                    background: linear-gradient(90deg, var(--brand-blue), #2563EB);
                    z-index: 3;
                }
                .market-line {
                    background: linear-gradient(90deg, var(--brand-green), #059669);
                }

                /* 2. Pattern Titik-Titik (Dot Matrix) */
                .card-pattern {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
                    background-size: 20px 20px;
                    opacity: 0.3;
                    z-index: 0;
                    pointer-events: none;
                }

                /* 3. Watermark Icon Besar */
                .card-watermark {
                    position: absolute;
                    bottom: -30px;
                    right: -30px;
                    font-size: 10rem;
                    color: rgba(0,0,0,0.02);
                    transform: rotate(-15deg);
                    z-index: 1;
                    transition: all 0.5s ease;
                }
                .cp-platform-card:hover .card-watermark {
                    transform: rotate(0deg) scale(1.1);
                    color: rgba(0, 174, 239, 0.04);
                    right: -10px;
                }


                /* --- CONTAINER TAB YANG LEBIH MODERN --- */
                .tab-container {
                    display: flex;
                    background: #F8FAFC;
                    border: 1px solid #E2E8F0;
                    border-radius: 12px;
                    padding: 6px;
                    margin-bottom: 24px;
                    gap: 6px;
                }

                .tab-btn {
                    flex: 1;
                    padding: 10px 4px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    border: none;
                    background: transparent;
                    color: #64748B;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                /* Active State Tab: Efek Putih + Shadow Halus */
                .tab-btn.active {
                    background: #fff;
                    color: var(--brand-blue);
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                    border: 1px solid rgba(0,0,0,0.02);
                }
                .card-market .tab-btn.active {
                    color: var(--brand-green); /* Hijau untuk Market */
                }


                /* --- AREA KONTEN --- */
                .tab-content-area {
                    height: 340px; 
                    overflow-y: auto;
                    padding-right: 8px; 
                }
                /* Custom Scrollbar Cantik */
                .custom-scroll::-webkit-scrollbar { width: 5px; }
                .custom-scroll::-webkit-scrollbar-track { background: transparent; }
                .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
                .custom-scroll::-webkit-scrollbar-thumb:hover { background: #94a3b8; }


                /* --- LIST STYLING (B2B) --- */
                .info-list li {
                    display: flex;
                    gap: 14px;
                    margin-bottom: 18px;
                    align-items: flex-start;
                    background: rgba(255,255,255,0.6); /* Sedikit background di item */
                    border-radius: 8px;
                    padding: 8px;
                    transition: background 0.2s;
                }
                .info-list li:hover {
                    background: #F8FAFC;
                }

                .info-icon {
                    min-width: 28px;
                    height: 28px;
                    background: rgba(0, 174, 239, 0.1);
                    color: var(--brand-blue);
                    border-radius: 8px; /* Rounded box, bukan circle */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.85rem;
                    margin-top: 2px;
                }

                .info-text strong {
                    display: block;
                    color: var(--brand-navy);
                    font-size: 0.95rem;
                    margin-bottom: 2px;
                }
                .info-text span {
                    font-size: 0.85rem;
                    color: #64748B;
                    line-height: 1.4;
                }


                /* --- LIST STYLING (MARKETPLACE) --- */
                .market-group {
                    margin-bottom: 22px;
                    background: #F8FAFC;
                    padding: 15px;
                    border-radius: 12px;
                    border: 1px solid #F1F5F9;
                }

                .market-group h4 {
                    font-size: 0.9rem;
                    font-weight: 800;
                    color: var(--brand-navy);
                    margin: 0 0 10px 0;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .market-group li {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    font-size: 0.85rem;
                    color: #475569;
                    margin-bottom: 8px;
                }
                .market-group li:last-child { margin-bottom: 0; }

                .market-group li i {
                    color: var(--brand-green); /* Hijau */
                    font-size: 0.8rem;
                }


                /* --- FOOTER CARD --- */
                .card-footer {
                    margin-top: auto; /* Push ke bawah */
                    padding-top: 20px;
                    border-top: 1px solid #F1F5F9;
                    z-index: 2;
                }
                
                /* Ikon Header Custom Color */
                .market-ic i { color: var(--brand-green); }
                .market-ic { background: rgba(16, 185, 129, 0.1); }


                /* Animasi Fade */
                .fade-in { animation: fadeIn 0.4s ease-in-out; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Mobile Tweaks */
                @media (max-width: 768px) {
                    .cp-platform-grid { grid-template-columns: 1fr; }
                    .tab-content-area { max-height: 400px; height: auto; }
                    .cp-card-inner { padding: 20px; }
                    .card-watermark { display: none; /* Hilangkan di mobile agar bersih */ }
                }
            `}</style>
        </section>
    );
};
export default BusinessStats;