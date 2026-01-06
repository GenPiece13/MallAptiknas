// src/components/home/Hero.jsx
"use client";
import React from "react";

const Hero = () => {
    return (
        <section className="hero-section">

            {/* 1. BACKGROUND STATIC & OVERLAY */}
            <div className="hero-bg">
                {/* Overlay putih tipis agar teks gelap terbaca, atau gelap jika background terang. 
                    Sesuai gambar referensi yang agak "foggy/white", kita pakai overlay putih transparan. */}
                <div className="hero-overlay"></div>
            </div>

            {/* 2. KONTEN UTAMA */}
            <div className="hero-content-wrapper">
                <div className="hero-content">

                    {/* BAGIAN ATAS: LOGO & JUDUL BRAND */}
                    <div className="brand-header">
                        {/* Logo Image */}
                        <div className="logo-wrapper">
                            {/* GANTI '/img/hero-logo.png' dengan nama file logo asli Anda di folder public/img */}
                            <img
                                src="/img/logo mallaptiknas.png"
                                alt="Logo Mall Aptiknas"
                                className="hero-logo-img"
                            />
                        </div>
                    </div>

                    {/* BAGIAN BAWAH: TAGLINE */}
                    <h1 className="hero-tagline animate-up">
                        <span className="word-dark">BELANJA</span>
                        <span className="word-red"> PINTAR</span>, <br className="mobile-break" />
                        <span className="word-blue"> BISNIS</span>
                        <span className="word-green"> LANCAR</span>
                    </h1>

                </div>
            </div>

            <style jsx>{`
                /* --- LAYOUT UTAMA --- */
                .hero-section {
                    position: relative;
                    width: 100%;
                    min-height: calc(100vh - 80px); /* Full height minus navbar */
                    margin-top: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    overflow: hidden;
                    background-color: #f0f3f7; /* Fallback color */
                }

                /* --- BACKGROUND --- */
                .hero-bg {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    /* Ganti URL ini dengan gambar gudang/rak sesuai desain */
                    background-image: url('/hero/plain.jpg'); 
                    background-size: cover; 
                    background-position: center center;
                    z-index: 0;
                }

                .hero-overlay {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    /* Overlay Putih Transparan agar teks abu-abu/warna terbaca jelas (efek foggy) */
                    background: rgba(255, 255, 255, 0.35);
                    backdrop-filter: blur(2px);
                    z-index: 1;
                }

                /* --- CONTENT WRAPPER --- */
                .hero-content-wrapper {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    padding: 0 24px;
                    display: flex;
                    justify-content: center;
                }

                .hero-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 10px; /* Jarak antara grup logo dan tagline bawah */
                }

                /* --- HEADER: LOGO + TEKS "Mall APTIKNAS" --- */
                .brand-header {
                    display: flex;
                    align-items: center; /* Sejajar vertikal tengah */
                    justify-content: center;
                    gap: 20px; /* Jarak antara Icon Logo dan Teks */
                    margin-bottom: 10px;
                    flex-wrap: wrap;
                }

                /* Logo Image Style */
                .logo-wrapper {
                    display: flex;
                    align-items: center;
                }
                
                .hero-logo-img {
                    height: 120px; /* Sesuaikan besar logo */
                    width: auto;
                    object-fit: contain;
                    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2)); /* Shadow pada logo PNG */
                }

                /* Typography Brand */
                .brand-text {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start; /* Rata kiri agar "Mall" pas di atas "APTIKNAS" */
                    line-height: 1;
                }

                .text-mall {
                    font-family: "Times New Roman", Times, serif; /* Font Serif sesuai gambar */
                    font-size: 4rem;
                    color: #58595B; /* Abu-abu gelap */
                    font-weight: bold;
                    letter-spacing: 2px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3); /* Shadow teks */
                    margin-bottom: -10px; /* Agar rapat dengan teks bawah */
                    margin-left: 5px;
                }

                .text-aptiknas {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 5.5rem; /* Lebih besar dari Mall */
                    font-weight: 800;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    text-shadow: 3px 3px 6px rgba(0,0,0,0.25); /* Shadow agar pop-up */
                    display: flex;
                    gap: 2px;
                }

                /* --- TAGLINE BAWAH --- */
                .hero-tagline {
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 800;
                    font-size: clamp(1.8rem, 4vw, 3.2rem); /* Responsive font size */
                    margin-top: 10px;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
                    line-height: 1.2;
                }

                /* Warna-warna Text Tagline */
                .word-dark  { color: #404040; } /* Abu gelap */
                .word-red   { color: var(--brand-red); }
                .word-blue  { color: var(--brand-blue); }
                .word-green { color: var(--brand-green); }

                .mobile-break { display: none; } /* Default tidak break */

                /* --- ANIMASI --- */
                .animate-up {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1s ease-out forwards;
                    animation-delay: 0.3s;
                }
                @keyframes fadeInUp {
                    to { opacity: 1; transform: translateY(0); }
                }

                /* --- RESPONSIVE MOBILE --- */
                @media (max-width: 768px) {
                    .hero-section {
                        min-height: 80vh; 
                    }
                    
                    .brand-header {
                        flex-direction: column; /* Logo di atas, Teks di bawah */
                        gap: 10px;
                    }

                    .hero-logo-img {
                        height: 80px; /* Logo lebih kecil di HP */
                    }

                    .brand-text {
                        align-items: center; /* Rata tengah di HP */
                    }

                    .text-mall {
                        font-size: 2.5rem;
                        margin-bottom: -5px;
                        margin-left: 0;
                    }

                    .text-aptiknas {
                        font-size: 3.5rem;
                    }

                    .hero-tagline {
                        margin-top: 20px;
                        font-size: 1.8rem;
                    }
                    
                    /* Agar "BISNIS LANCAR" turun ke baris baru di HP supaya rapi */
                    .mobile-break { display: block; } 
                }
            `}</style>
        </section>
    );
};

export default Hero;