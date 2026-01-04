// src/components/home/BusinessStats.jsx
const BusinessStats = () => {
    return (
        <section id="platform" className="cp-section cp-section--alt">
            <div className="container">
                <div className="cp-head">
                    <span className="cp-kicker">PLATFORM KAMI</span>
                    <h2 className="cp-title">Solusi Digital <span>Terintegrasi</span></h2>
                    <p className="cp-sub">Dua layanan inti yang saling terhubung untuk memenuhi kebutuhan bisnis hulu hingga hilir.</p>
                </div>

                <div className="cp-platform-grid">

                    {/* --- KARTU 1: SCM B2B --- */}
                    <div className="cp-platform-card reveal">
                        <div className="cp-platform-top">
                            <div className="cp-platform-ic">
                                <i className="fa-solid fa-network-wired"></i>
                            </div>
                            <div>
                                <h3>SCM Platform B2B</h3>
                                <p>Manajemen rantai pasok cerdas untuk prinsipal & distributor.</p>
                            </div>
                        </div>

                        <ul className="cp-bullets">
                            <li><i className="fa-solid fa-circle-check"></i> Integrasi Stok Real-time</li>
                            <li><i className="fa-solid fa-circle-check"></i> Otomasi PO & Faktur Digital</li>
                            <li><i className="fa-solid fa-circle-check"></i> Manajemen Gudang & Logistik</li>
                            <li><i className="fa-solid fa-circle-check"></i> Analitik Performa Bisnis</li>
                        </ul>

                        <a className="cp-link" href="#">
                            Pelajari Selengkapnya <i className="fa-solid fa-arrow-right"></i>
                        </a>

                        {/* Visual Mockup B2B (CSS Art) */}
                        <div className="cp-visual-mockup mockup-b2b">
                            <div className="mockup-lines"></div>
                        </div>
                    </div>

                    {/* --- KARTU 2: MARKETPLACE B2C --- */}
                    <div className="cp-platform-card reveal">
                        <div className="cp-platform-top">
                            <div className="cp-platform-ic">
                                <i className="fa-solid fa-bag-shopping"></i>
                            </div>
                            <div>
                                <h3>Marketplace B2C</h3>
                                <p>Platform belanja produk IT resmi dan terpercaya untuk publik.</p>
                            </div>
                        </div>

                        <ul className="cp-bullets">
                            <li><i className="fa-solid fa-circle-check"></i> 100% Produk Original</li>
                            <li><i className="fa-solid fa-circle-check"></i> Toko Resmi Anggota APTIKNAS</li>
                            <li><i className="fa-solid fa-circle-check"></i> Klaim Garansi Mudah</li>
                            <li><i className="fa-solid fa-circle-check"></i> Promo Eksklusif Member</li>
                        </ul>

                        <a className="cp-link" href="#">
                            Mulai Belanja <i className="fa-solid fa-arrow-right"></i>
                        </a>

                        {/* Visual Mockup B2C (CSS Art) */}
                        <div className="cp-visual-mockup mockup-b2c">
                            <div className="mockup-item"></div>
                            <div className="mockup-item"></div>
                            <div className="mockup-item"></div>
                            <div className="mockup-item"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default BusinessStats;