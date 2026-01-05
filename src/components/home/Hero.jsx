// src/components/home/Hero.jsx
"use client"; // Pastikan use client karena kita pakai style jsx

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content reveal is-visible">

                {/* 1. LOGO DITAMBAHKAN DI SINI */}
                <div className="logo-wrapper">
                    <img
                        src="/img/Logo MA me.png"
                        alt="Logo Mall Aptiknas"
                        className="hero-logo"
                    />
                </div>

                {/* 2. TEXT MALLAPTIKNAS DISESUAIKAN WARNANYA */}
                <h1>
                    <span className="brand-text">MallAptiknas</span>: <br />
                    Platform Terintegrasi Untuk Distribusi Produk IT
                </h1>

                <p>Menghubungkan Seluruh Rantai Pasok Produk Teknologi, Dari Supplier Hingga Konsumen Akhir</p>

                <div style={{ marginTop: '30px' }}>
                    <a href="#platform" className="btn btn-outline">Pelajari SCM Platform</a>
                    <a href="#platform" className="btn btn-primary">Jelajahi Marketplace</a>
                </div>
            </div>

            {/* 3. STYLE KHUSUS UNTUK KONTROL UKURAN RESPONSIVE */}
            <style jsx>{`
                /* Wrapper agar logo center */
                .logo-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }

                /* Kontrol Ketat Ukuran Logo */
                .hero-logo {
                    width: 160px; /* Ukuran Desktop */
                    height: auto;
                    object-fit: contain;
                    display: block;
                    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); /* Sedikit bayangan agar pop-up di bg gelap */
                }

                /* Warna Teks Brand (Mengambil dari globals.css --brand-blue) */
                .brand-text {
                    color: var(--brand-blue); 
                    text-shadow: 0 0 20px rgba(0, 174, 239, 0.4); /* Efek glow */
                }

                /* Responsive Mobile */
                @media (max-width: 768px) {
                    .hero-logo {
                        width: 110px; /* Ukuran Mobile lebih kecil */
                        margin-bottom: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;