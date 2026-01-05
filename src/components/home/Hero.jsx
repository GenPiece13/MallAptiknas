// src/components/home/Hero.jsx
"use client";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content reveal is-visible">

                {/* 1. LOGO (Dipertahankan sesuai request) */}
                <div className="logo-wrapper">
                    <img
                        src="/img/Logo MA me.png"
                        alt="Logo Mall Aptiknas"
                        className="hero-logo"
                    />
                </div>

                {/* 2. TEKS DENGAN WARNA SESUAI LOGO */}
                <h1>
                    <span className="text-mall">Mall</span>
                    <span className="text-ap">AP</span>
                    <span className="text-tik">TIK</span>
                    <span className="text-nas">NAS</span>
                    : <br />
                    Platform Terintegrasi Untuk Distribusi Produk IT
                </h1>

                <p>Menghubungkan Seluruh Rantai Pasok Produk Teknologi, Dari Supplier Hingga Konsumen Akhir</p>

                <div style={{ marginTop: '30px' }}>
                    <a href="#platform" className="btn btn-outline">Pelajari SCM Platform</a>
                    <a href="#platform" className="btn btn-primary">Jelajahi Marketplace</a>
                </div>
            </div>

            {/* 3. STYLE KHUSUS */}
            <style jsx>{`
                /* Layout Logo */
                .logo-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }

                /* Kontrol Ukuran Logo Responsif */
                .hero-logo {
                    width: 250px; /* Desktop */
                    height: auto;
                    object-fit: contain;
                    display: block;
                    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
                }

                /* Pewarnaan Teks Sesuai Identitas Brand */
                /* Menggunakan variabel dari globals.css */
                
                .text-mall { 
                    color: var(--brand-black); /* Menggunakan Putih agar terbaca jelas di background gelap */
                }
                
                .text-ap { 
                    color: var(--brand-red); /* Merah */
                }
                
                .text-tik { 
                    color: var(--brand-blue); /* Biru/Cyan */
                }
                
                .text-nas { 
                    color: var(--brand-green); /* Hijau */
                }

                /* Mobile Adjustment */
                @media (max-width: 768px) {
                    .hero-logo {
                        width: 110px; /* Ukuran Mobile */
                        margin-bottom: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;