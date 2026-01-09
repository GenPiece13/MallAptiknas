// src/components/home/WhyUs.jsx
"use client";

const WhyUs = () => {
    return (
        <>
            {/* --- BAGIAN 1: KEUNTUNGAN (Tetap Putih) --- */}
            <section id="keuntungan" className="cp-section">
                <div className="container">
                    <div className="cp-head">
                        <span className="cp-kicker">KEUNTUNGAN KAMI</span>
                        <h2 className="cp-title">Keuntungan Bergabung di <span>MallAptiknas</span></h2>
                    </div>

                    <div className="cp-benefits-grid">
                        {/* Card 1: Blue */}
                        <div className="cp-benefit reveal card-blue">
                            <div className="accent-bar"></div>
                            <div className="cp-bg-icon"><i className="fa-solid fa-layer-group"></i></div>
                            <div className="cp-benefit-ic"><i className="fa-solid fa-layer-group"></i></div>
                            <h3>Ekosistem Terintegrasi</h3>
                            <p>SCM dan marketplace dalam satu platform yang saling terhubung.</p>
                        </div>
                        {/* Card 2: Red */}
                        <div className="cp-benefit reveal card-red">
                            <div className="accent-bar"></div>
                            <div className="cp-bg-icon"><i className="fa-solid fa-bolt"></i></div>
                            <div className="cp-benefit-ic"><i className="fa-solid fa-bolt"></i></div>
                            <h3>Proses Lebih Cepat</h3>
                            <p>Otomasi PO, faktur, stok, dan tracking pengiriman secara real-time.</p>
                        </div>
                        {/* Card 3: Green */}
                        <div className="cp-benefit reveal card-green">
                            <div className="accent-bar"></div>
                            <div className="cp-bg-icon"><i className="fa-solid fa-check-double"></i></div>
                            <div className="cp-benefit-ic"><i className="fa-solid fa-shield-check"></i></div>
                            <h3>Keaslian & Keamanan</h3>
                            <p>Standarisasi verifikasi produk original dan klaim garansi resmi.</p>
                        </div>
                        {/* Card 4: Navy */}
                        <div className="cp-benefit reveal card-navy">
                            <div className="accent-bar"></div>
                            <div className="cp-bg-icon"><i className="fa-solid fa-users"></i></div>
                            <div className="cp-benefit-ic"><i className="fa-solid fa-people-group"></i></div>
                            <h3>Dukungan Komunitas</h3>
                            <p>Didukung penuh oleh jaringan anggota industri TIK seluruh Indonesia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- BAGIAN 2: PEMBEDA (WHY US) - BACKGROUND GAMBAR --- */}
            {/* Hapus class 'cp-section--alt' agar tidak bentrok warna background */}
            <section id="pembeda" className="cp-section">
                <div className="container">
                    <div className="cp-head">
                        <span className="cp-kicker text-glow">WHY US</span>
                        {/* Judul diubah warnanya via CSS di bawah */}
                        <h2 className="cp-title text-white">Apa yang Membuat Kami <span>Berbeda</span>?</h2>
                    </div>

                    <div className="cp-diff-grid">

                        {/* ITEM 01 */}
                        <div className="diff-card reveal" style={{ '--accent': 'var(--brand-blue)' }}>
                            <div className="diff-blob"></div>
                            <div className="diff-num">01</div>
                            <div className="diff-icon-box">
                                <i className="fa-solid fa-laptop-code"></i>
                            </div>
                            <div className="diff-content">
                                <h3>Spesialis Produk IT</h3>
                                <p>Kami bukan marketplace umum. Fokus mendalam kami pada spesifikasi teknis dan kebutuhan industri teknologi.</p>
                            </div>
                        </div>

                        {/* ITEM 02 */}
                        <div className="diff-card reveal" style={{ '--accent': '#F59E0B' }}>
                            <div className="diff-blob"></div>
                            <div className="diff-num">02</div>
                            <div className="diff-icon-box">
                                <i className="fa-solid fa-microchip"></i>
                            </div>
                            <div className="diff-content">
                                <h3>Teknologi Terdepan</h3>
                                <p>Dibangun dengan stack teknologi terkini (React/Next.js) yang menjamin kecepatan dan skalabilitas.</p>
                            </div>
                        </div>

                        {/* ITEM 03 */}
                        <div className="diff-card reveal" style={{ '--accent': 'var(--brand-green)' }}>
                            <div className="diff-blob"></div>
                            <div className="diff-num">03</div>
                            <div className="diff-icon-box">
                                <i className="fa-solid fa-headset"></i>
                            </div>
                            <div className="diff-content">
                                <h3>Support Ahli</h3>
                                <p>Dukungan teknis langsung dari pakar industri, bukan sekadar customer service standar.</p>
                            </div>
                        </div>

                        {/* ITEM 04 */}
                        <div className="diff-card reveal" style={{ '--accent': 'var(--brand-red)' }}>
                            <div className="diff-blob"></div>
                            <div className="diff-num">04</div>
                            <div className="diff-icon-box">
                                <i className="fa-solid fa-diagram-project"></i>
                            </div>
                            <div className="diff-content">
                                <h3>End-to-End</h3>
                                <p>Solusi lengkap dari hulu (Principal/Distributor) hingga hilir (Retail/Konsumen) dalam satu atap.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- STYLE JSX --- */}
            <style jsx>{`
                /* ========================
                   STYLE BACKGROUND WHY US (BARU)
                   ======================== */
                #pembeda {
                    /* Menggunakan gambar uploaded sebagai background */
                    background-image: url('/img/why_us.png');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    position: relative;
                }

                /* Penyesuaian Warna Teks agar kontras dengan Background Gelap */
                #pembeda .cp-title {
                    color: #ffffff; /* Judul Putih */
                    text-shadow: 0 2px 10px rgba(0,0,0,0.5); /* Shadow agar lebih terbaca */
                }
                
                #pembeda .cp-kicker {
                    color: #60A5FA; /* Biru muda terang (Blue-400) */
                    text-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
                }

                /* ========================
                   STYLE BAGIAN KEUNTUNGAN 
                   ======================== */
                .cp-benefit {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    z-index: 1;
                    border-top: none;
                    background: #fff;
                }
                .cp-benefit:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                }
                .accent-bar {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 4px;
                    background: #ccc;
                }
                .card-blue .accent-bar { background: var(--brand-blue); }
                .card-blue .cp-benefit-ic { color: var(--brand-blue); }
                
                .card-red .accent-bar { background: var(--brand-red); }
                .card-red .cp-benefit-ic { color: var(--brand-red); }

                .card-green .accent-bar { background: var(--brand-green); }
                .card-green .cp-benefit-ic { color: var(--brand-green); }

                .card-navy .accent-bar { background: var(--brand-navy); }
                .card-navy .cp-benefit-ic { color: var(--brand-navy); }

                .cp-bg-icon {
                    position: absolute; bottom: -20px; right: -20px;
                    font-size: 8rem; color: #000; opacity: 0.03;
                    transform: rotate(-15deg); transition: all 0.4s ease;
                    z-index: -1; pointer-events: none;
                }
                .cp-benefit:hover .cp-bg-icon {
                    opacity: 0.08; transform: rotate(0deg) scale(1.1); right: -10px;
                }

                /* ========================
                   STYLE BAGIAN PEMBEDA (CARDS)
                   ======================== */
                .diff-card {
                    background: #fff; /* Kartu tetap putih agar kontras dengan bg gelap */
                    border-radius: 20px;
                    padding: 30px 24px;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.1); /* Border lebih halus */
                    box-shadow: 0 4px 20px rgba(0,0,0,0.2); /* Shadow sedikit lebih gelap */
                    transition: all 0.4s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    z-index: 1;
                }

                .diff-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                    border-color: var(--accent);
                }

                .diff-blob {
                    position: absolute;
                    top: -40px; right: -40px;
                    width: 120px; height: 120px;
                    background: var(--accent);
                    border-radius: 50%;
                    filter: blur(50px);
                    opacity: 0.15;
                    transition: 0.5s ease;
                    z-index: -1;
                }
                .diff-card:hover .diff-blob {
                    opacity: 0.3; transform: scale(1.2);
                }

                .diff-num {
                    position: absolute;
                    top: 10px; right: 20px;
                    font-size: 4rem;
                    font-weight: 900;
                    color: var(--brand-navy);
                    opacity: 0.05;
                    line-height: 1;
                    z-index: -1;
                    font-family: sans-serif;
                }

                .diff-icon-box {
                    width: 56px; height: 56px;
                    border-radius: 14px;
                    background: #f8fafc;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 1.5rem;
                    color: var(--brand-navy);
                    transition: 0.3s;
                    border: 1px solid #e2e8f0;
                }
                .diff-card:hover .diff-icon-box {
                    background: var(--accent);
                    color: #fff;
                    border-color: var(--accent);
                }

                .diff-content h3 {
                    font-size: 1.15rem;
                    font-weight: 800;
                    margin-bottom: 10px;
                    color: var(--brand-navy);
                }
                .diff-content p {
                    font-size: 0.9rem;
                    color: #64748b;
                    line-height: 1.6;
                    margin: 0;
                }
            `}</style>
        </>
    );
};
export default WhyUs;