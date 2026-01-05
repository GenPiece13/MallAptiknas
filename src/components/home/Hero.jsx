// src/components/home/Hero.jsx
"use client";

import { useState, useEffect } from "react";

// 1. DAFTAR GAMBAR SLIDESHOW
// Pastikan file-file ini ada di folder /public/hero/
const HERO_IMAGES = [
    "warehouse-hero.jpg",
    "hero3.jpg",
    "hero2.jpg",
];

const Hero = () => {
    // 2. STATE UNTUK MELACAK GAMBAR AKTIF
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // 3. INTERVAL UNTUK MENGGANTI GAMBAR OTOMATIS
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                // Jika sudah di gambar terakhir, kembali ke 0, jika belum lanjut ke next
                prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Ganti slide setiap 5000ms (5 detik)

        // Bersihkan interval saat komponen di-unmount agar tidak memory leak
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">

            {/* --- AREA BACKGROUND SLIDESHOW BARU --- */}
            <div className="hero-bg-slideshow">
                {HERO_IMAGES.map((img, index) => (
                    <div
                        key={img}
                        className={`hero-bg-item ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(/hero/${img})` }}
                    />
                ))}
                {/* Lapisan Overlay Gelap Tetap di Atas Gambar */}
                <div className="hero-overlay"></div>
            </div>

            {/* --- KONTEN UTAMA (Harus di dalam container relative agar di atas BG) --- */}
            <div className="container content-container">
                <div className="hero-content">

                    {/* LEFT TEXT AREA */}
                    <div className="hero-left reveal">

                        {/* TIPOGRAFI UTAMA */}
                        <h1 className="hero-combo-title">
                            PLATFORM TERINTEGRASI <br />
                            UNTUK DISTRIBUSI <br />
                            <span className="text-red">PRODUK IT</span>
                        </h1>

                        <p className="desc">
                            Menghubungkan Seluruh Rantai Pasok Produk Teknologi, <br />
                            Dari Supplier Hingga Konsumen Akhir.
                        </p>

                        {/* LOGO SEBAGAI BUTTON */}
                        <div className="logo-wrapper">
                            <img src="/img/Logo MA me.png" alt="Mall Aptiknas" className="brand-logo" />
                        </div>
                    </div>

                    {/* RIGHT AREA */}
                    <div className="hero-right" />
                </div>

                {/* --- BUTTONS DI ATAS JALAN --- */}
                <div className="hero-buttons-road reveal">
                    <a className="btn-outline" href="#platform">Pelajari SCM Platform</a>
                    <a className="btn-primary" href="#marketplace">Jelajahi Marketplace</a>
                </div>
            </div>

            <style jsx>{`
                .hero-section {
                    width: 100%;
                    min-height: 100vh;
                    /* Background image dihapus dari sini, diganti struktur baru */
                    position: relative;
                    overflow: hidden; /* Penting agar BG tidak bocor */
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-top: 140px; 
                    padding-bottom: 80px;
                }

                /* --- STYLE UNTUK SLIDESHOW BACKGROUND --- */
                .hero-bg-slideshow {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0; /* Paling belakang */
                }

                .hero-bg-item {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-position: center bottom; /* Fokus ke jalan di bawah */
                    background-size: cover;
                    background-repeat: no-repeat;
                    opacity: 0; /* Default tidak terlihat */
                    transition: opacity 1.5s ease-in-out; /* Efek crossfade halus */
                    z-index: 1;
                }

                .hero-bg-item.active {
                    opacity: 1; /* Hanya gambar aktif yang terlihat */
                    z-index: 2;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    /* Gradient gelap dipisah ke sini agar konsisten */
                    background: linear-gradient(to right, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.2) 100%);
                    z-index: 3; /* Di atas gambar slideshow */
                }

                /* Container Konten agar di atas background */
                .content-container {
                    position: relative;
                    z-index: 10;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }


                /* --- STYLE KONTEN LAINNYA (TIDAK BERUBAH) --- */
                .container {
                    width: 100%;
                    max-width: 1250px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .hero-content {
                    display: grid;
                    grid-template-columns: 1.3fr 0.7fr;
                    align-items: center;
                    margin-bottom: 60px; 
                }

                .hero-combo-title {
                    font-size: clamp(2.2rem, 4vw, 3.8rem); 
                    font-weight: 900;
                    line-height: 1.15;
                    color: #ffffff;
                    margin-bottom: 24px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    text-shadow: 0 4px 15px rgba(0,0,0,0.5);
                }

                .text-red { color: #ff3b30; }

                .desc {
                    color: #f1f1f1;
                    font-size: 1.15rem;
                    line-height: 1.6;
                    margin-bottom: 35px;
                    max-width: 90%;
                    font-weight: 400;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }

                .logo-wrapper {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 28px;
                    border: 2px solid rgba(255, 255, 255, 0.6);
                    border-radius: 50px;
                    background: rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(8px);
                    margin-bottom: 20px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .logo-wrapper:hover {
                    border-color: #ffffff;
                    background: rgba(255, 255, 255, 0.15);
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }

                .brand-logo {
                    width: 180px;
                    height: auto;
                    display: block;
                }

                .hero-buttons-road {
                    position: absolute;
                    bottom: 12%; 
                    left: 65%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 20px;
                    z-index: 20; /* Z-index ditingkatkan agar di atas overlay */
                }

                .btn-outline,
                .btn-primary {
                    padding: 14px 32px;
                    border-radius: 50px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-size: 1rem;
                    white-space: nowrap;
                }

                .btn-outline {
                    border: 2px solid rgba(255,255,255,0.9);
                    color: #ffffff;
                    background: rgba(0,0,0,0.3);
                    backdrop-filter: blur(4px);
                }

                .btn-outline:hover {
                    background: rgba(255,255,255,0.2);
                    border-color: #ffffff;
                }

                .btn-primary {
                    background: #ffffff;
                    color: #000000;
                    border: 2px solid #ffffff;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                }

                .btn-primary:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.4);
                    background: #f8f9fa;
                }

                @media (max-width: 1024px) {
                    .hero-section { padding-top: 120px; }
                    .hero-buttons-road { left: 50%; width: 100%; justify-content: center; }
                }

                @media (max-width: 900px) {
                    .hero-section {
                        padding-top: 110px;
                        justify-content: flex-start;
                        min-height: auto;
                        padding-bottom: 60px;
                    }
                    .hero-bg-item { background-position: center; }
                    .hero-content { grid-template-columns: 1fr; text-align: center; margin-bottom: 30px; }
                    .hero-combo-title { font-size: 2.4rem; line-height: 1.2; }
                    .desc { margin: 0 auto 30px; }
                    .logo-wrapper { display: inline-flex; margin-bottom: 0; }
                    .hero-buttons-road {
                        position: relative; bottom: auto; left: auto; transform: none;
                        flex-direction: column; align-items: center; gap: 15px; margin-top: 40px; width: 100%;
                    }
                    .btn-outline, .btn-primary { width: 100%; max-width: 320px; text-align: center; }
                }
            `}</style>
        </section>
    );
};

export default Hero;