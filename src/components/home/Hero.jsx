// src/components/home/Hero.jsx
"use client";

import { useState, useEffect } from "react";

// 1. KONFIGURASI SLIDESHOW
const HERO_SLIDES = [
    {
        id: 1,
        image: "hero2.jpg",
        showMainContent: true, // Slide 1: Tampilkan Konten Utama
        customElement: null
    },
    {
        id: 2,
        image: "warehouse-hero.jpg",
        showMainContent: true, // Slide 2: Sembunyikan Konten Utama (akan fade out halus)
        // Optional: Custom element juga akan fade in halus
        customElement: null
    },
    {
        id: 3,
        image: "hero3.jpg",
        showMainContent: false, // Slide 3: Tampilkan Konten Utama Kembali
        customElement: null
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Interval timer dipercepat sedikit agar transisi lebih terasa
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === HERO_SLIDES.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const activeSlide = HERO_SLIDES[currentIndex];

    return (
        <section className="hero-section">

            {/* --- AREA BACKGROUND SLIDESHOW --- */}
            <div className="hero-bg-slideshow">
                {HERO_SLIDES.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-bg-item ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(/hero/${slide.image})` }}
                    />
                ))}
                <div className="hero-overlay"></div>
            </div>

            {/* --- KONTEN UTAMA --- */}
            <div className="container content-container">

                {/* PERBAIKAN TRANSISI:
                   Kita tidak lagi menggunakan conditional rendering (&&).
                   Sebagai gantinya, kita bungkus konten utama dalam wrapper,
                   dan ubah class-nya berdasarkan state (visible/hidden).
                */}
                <div
                    className={`main-content-wrapper ${activeSlide.showMainContent ? 'is-visible' : 'is-hidden'}`}
                >
                    <div className="hero-content">
                        {/* LEFT TEXT AREA */}
                        <div className="hero-left">
                            <h1 className="hero-combo-title">
                                PLATFORM TERINTEGRASI <br />
                                UNTUK DISTRIBUSI <br />
                                <span className="text-red">PRODUK IT</span>
                            </h1>

                            <p className="desc">
                                Menghubungkan Seluruh Rantai Pasok Produk Teknologi, <br />
                                Dari Supplier Hingga Konsumen Akhir.
                            </p>

                            <div className="logo-wrapper">
                                <img src="/img/Logo MA me.png" alt="Mall Aptiknas" className="brand-logo" />
                            </div>
                        </div>
                        <div className="hero-right" />
                    </div>

                    {/* BUTTONS */}
                    <div className="hero-buttons-road">
                        <a className="btn-outline" href="#platform">Pelajari SCM Platform</a>
                        <a className="btn-primary" href="#marketplace">Jelajahi Marketplace</a>
                    </div>
                </div>

                {/* --- CUSTOM ELEMENT AREA (Opsional) --- */}
                {/* Ini juga menggunakan teknik wrapper yang sama agar transisi halus */}
                <div
                    className={`custom-content-wrapper ${activeSlide.customElement ? 'is-visible' : 'is-hidden'}`}
                >
                    {/* Kita perlu memastikan customElement ada sebelum merendernya di dalam wrapper */}
                    {activeSlide.customElement ? activeSlide.customElement : null}
                </div>

            </div>

            <style jsx>{`
                /* --- LAYOUT FIX (Dari langkah sebelumnya) --- */
                .hero-section {
                    width: 100%;
                    min-height: calc(100vh - 80px); /* Tinggi layar dikurangi tinggi navbar */
                    margin-top: 80px; /* Dorong ke bawah navbar */
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-top: 40px; 
                    padding-bottom: 60px;
                }

                /* --- BACKGROUND SLIDESHOW --- */
                .hero-bg-slideshow {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0;
                }
                .hero-bg-item {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    background-position: center top; /* Fokus gambar di tengah atas */
                    background-size: cover; background-repeat: no-repeat;
                    opacity: 0;
                    transition: opacity 1.2s ease-in-out; /* Transisi background */
                    z-index: 1;
                }
                .hero-bg-item.active { opacity: 1; z-index: 2; }
                .hero-overlay {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    background: linear-gradient(to right, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.2) 100%);
                    z-index: 3;
                }

                /* --- CONTAINER --- */
                .content-container {
                    position: relative; z-index: 10; height: 100%;
                    display: flex; flex-direction: column; justify-content: center;
                    min-height: 400px;
                    /* Penting: gunakan position relative agar wrapper di dalamnya bisa absolute jika perlu */
                    position: relative; 
                }

                /* =========================================
                   PERBAIKAN TRANSISI HALUS (CORE FIX)
                   ========================================= */
                
                /* Wrapper untuk Konten Utama & Custom */
                .main-content-wrapper,
                .custom-content-wrapper {
                    /* Set state awal (hidden) */
                    opacity: 0;
                    /* Gunakan transform untuk sedikit efek naik/turun */
                    transform: translateY(30px);
                    /* Matikan interaksi mouse saat hidden agar tombol tidak bisa diklik */
                    pointer-events: none; 
                    /* KUNCI TRANSISI HALUS: */
                    transition: opacity 0.8s ease-in-out, transform 0.8s ease-out;
                    
                    /* Agar kedua wrapper bisa menumpuk di posisi yang sama */
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -30%); /* Posisi hidden agak ke bawah */
                    width: 100%;
                    max-width: 1250px;
                    padding: 0 24px;
                }

                /* State ketika Visible (Aktif) */
                .main-content-wrapper.is-visible,
                .custom-content-wrapper.is-visible {
                    opacity: 1;
                    /* Kembalikan posisi ke tengah vertikal */
                    transform: translate(-50%, -50%);
                    pointer-events: auto; /* Hidupkan kembali interaksi mouse */
                     /* Delay sedikit saat muncul agar background ganti duluan */
                    transition-delay: 0.3s;
                }
                
                /* Custom Content Styling (Contoh) */
                .special-event-box {
                    text-align: center; color: white;
                }
                .special-event-box h2 {
                    font-size: 4rem; font-weight: 900; text-shadow: 0 0 20px rgba(255,0,0,0.5);
                }


                /* --- STYLE KONTEN YANG ADA (Tidak berubah banyak) --- */
                .container { width: 100%; max-width: 1250px; margin: 0 auto; padding: 0 24px; }

                .hero-content {
                    display: grid; grid-template-columns: 1.3fr 0.7fr; align-items: center; margin-bottom: 50px; 
                }
                .hero-combo-title {
                    font-size: clamp(2.2rem, 4vw, 3.8rem); font-weight: 900; line-height: 1.15; color: #ffffff; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 4px 15px rgba(0,0,0,0.5);
                }
                .text-red { color: #ff3b30; }
                .desc {
                    color: #f1f1f1; font-size: 1.15rem; line-height: 1.6; margin-bottom: 35px; max-width: 90%; font-weight: 400; text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }
                .logo-wrapper {
                    display: inline-flex; align-items: center; justify-content: center; padding: 12px 28px; border: 2px solid rgba(255, 255, 255, 0.6); border-radius: 50px; background: rgba(0, 0, 0, 0.2); backdrop-filter: blur(8px); margin-bottom: 20px; cursor: pointer;
                }
                .brand-logo { width: 180px; height: auto; display: block; }

                /* Tombol dipindahkan ke dalam wrapper, posisinya menyesuaikan */
                .hero-buttons-road {
                    display: flex; gap: 20px; margin-left: 20px; /* Geser sedikit agar sejajar teks */
                }
                
                .btn-outline, .btn-primary {
                    padding: 14px 32px; border-radius: 50px; font-weight: 700; text-decoration: none; transition: all 0.3s ease; font-size: 1rem; white-space: nowrap;
                }
                .btn-outline { border: 2px solid rgba(255,255,255,0.9); color: #ffffff; background: rgba(0,0,0,0.3); backdrop-filter: blur(4px); }
                .btn-outline:hover { background: rgba(255,255,255,0.2); border-color: #ffffff; }
                .btn-primary { background: #ffffff; color: #000000; border: 2px solid #ffffff; box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
                .btn-primary:hover { transform: translateY(-4px); box-shadow: 0 15px 35px rgba(0,0,0,0.4); background: #f8f9fa; }

                /* Responsif Mobile */
                @media (max-width: 1024px) {
                    .hero-section { margin-top: 80px; min-height: calc(100vh - 80px); padding-top: 40px; }
                }
                @media (max-width: 900px) {
                    /* Saat mobile, wrapper tidak perlu absolute centering yang rumit */
                    .main-content-wrapper, .custom-content-wrapper {
                        position: relative; top: auto; left: auto; transform: none !important; /* Reset transform */
                        opacity: 1 !important; /* Selalu tampilkan di mobile untuk simplifikasi, atau atur transisi berbeda */
                        /* Jika ingin tetap ada transisi di mobile, perlu penyesuaian height container agar tidak 'lompat' */
                    }
                    /* Logika sederhana untuk mobile: jika hidden, sembunyikan total agar tidak ada ruang kosong */
                    .main-content-wrapper.is-hidden, .custom-content-wrapper.is-hidden {
                        display: none;
                    }

                    .hero-section { justify-content: flex-start; padding-bottom: 60px; }
                    .hero-content { grid-template-columns: 1fr; text-align: center; margin-bottom: 30px; }
                    .hero-buttons-road { flex-direction: column; align-items: center; gap: 15px; margin-top: 40px; width: 100%; margin-left: 0;}
                    .special-event-box h2 { font-size: 2.5rem; }
                }
            `}</style>
        </section>
    );
};

export default Hero;