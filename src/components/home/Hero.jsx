// src/components/home/Hero.jsx
"use client";

const Hero = () => {
    return (
        <section className="hero-section">

            {/* 1. BACKGROUND STATIC & OVERLAY */}
            <div className="hero-bg">
                <div className="hero-overlay"></div>
            </div>

            {/* 2. KONTEN UTAMA (Dengan Transisi Fade In) */}
            <div className="container hero-content-wrapper">
                <div className="hero-content">
                    <h1 className="hero-combo-title">
                        {/* UPDATE: Warna disesuaikan per suku kata sesuai Logo */}
                        <span className="main-title">
                            <span className="text-white">MALL</span>
                            <span className="space"> </span>
                            <span className="text-red">AP</span>
                            <span className="text-blue">TIK</span>
                            <span className="text-green">NAS</span>
                        </span>

                        <br />

                        {/* Tagline tetap menggunakan Gradient & Bold */}
                        <span className="highlight-title">BELANJA PINTAR, BISNIS LANCAR</span>
                    </h1>

                    <p className="desc">
                        Menghubungkan Seluruh Rantai Pasok Produk Teknologi, <br />
                        Dari Supplier Hingga Konsumen Akhir.
                    </p>
                </div>
            </div>

            <style jsx>{`
                /* --- LAYOUT UTAMA --- */
                .hero-section {
                    position: relative;
                    width: 100%;
                    min-height: calc(100vh - 80px);
                    margin-top: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    overflow: hidden;
                    background-color: var(--brand-navy);
                }

                /* --- BACKGROUND --- */
                .hero-bg {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    background-image: url('/hero/hero2.jpg'); 
                    background-size: cover; background-position: center top;
                    z-index: 0;
                }

                .hero-overlay {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    /* Overlay dipergelap agar warna-warni logo "pop-up" */
                    background: radial-gradient(circle at center, rgba(11, 27, 52, 0.7) 0%, rgba(11, 27, 52, 0.95) 100%);
                    z-index: 1;
                }

                /* --- CONTAINER & ANIMASI --- */
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
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1s ease-out forwards;
                    animation-delay: 0.3s; 
                }

                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* --- TYPOGRAPHY --- */
                .hero-combo-title {
                    font-size: clamp(2.5rem, 5vw, 4.5rem);
                    line-height: 1.1;
                    margin-bottom: 24px;
                    letter-spacing: 1px;
                }

                /* Styling untuk Logo Text */
                .main-title {
                    font-weight: 800;
                    /* Menambahkan shadow halus putih di belakang agar warna terbaca jelas di bg gelap */
                    text-shadow: 0 4px 20px rgba(0,0,0,0.5); 
                }

                .space { margin: 0 5px; }
                .text-white { color: var(--white); }
                .text-red   { color: var(--brand-red); }   /* Merah Brand */
                .text-blue  { color: var(--brand-blue); }  /* Biru Brand */
                .text-green { color: var(--brand-green); } /* Hijau Brand */

                /* Tagline: BELANJA PINTAR (Gradient) */
                .highlight-title {
                    font-weight: 800; 
                    font-size: clamp(1.8rem, 4vw, 3.5rem);
                    background: linear-gradient(90deg, var(--brand-blue), var(--brand-green));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    color: transparent;
                    filter: drop-shadow(0 0 20px rgba(0, 174, 239, 0.4));
                    display: inline-block;
                    margin-top: 10px;
                }

                .desc {
                    color: #e2e8f0;
                    font-size: 1.25rem;
                    line-height: 1.6;
                    margin-bottom: 35px;
                    max-width: 700px;
                    font-weight: 400;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.8);
                }

                /* --- MOBILE RESPONSIVE --- */
                @media (max-width: 768px) {
                    .hero-section { min-height: 70vh; margin-top: 80px; }
                    .desc { font-size: 1rem; max-width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default Hero;