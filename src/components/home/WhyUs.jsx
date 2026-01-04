const WhyUs = () => {
    return (
        <>
            <section id="keuntungan" className="cp-section">
                <div className="container">
                    <div className="cp-head">
                        <span className="cp-kicker">KEUNTUNGAN KAMI</span>
                        <h2 className="cp-title">Keuntungan Bergabung di <span>MallAptiknas</span></h2>
                    </div>

                    <div className="cp-benefits-grid">
                        <div className="cp-benefit reveal">
                            <div className="cp-benefit-ic"><i className="fa-solid fa-layer-group"></i></div>
                            <h3>Ekosistem Terintegrasi</h3>
                            <p>SCM dan marketplace dalam satu platform.</p>
                        </div>
                        <div className="cp-benefit reveal">
                            <div className="cp-benefit-ic"><i className="fa-solid fa-bolt"></i></div>
                            <h3>Proses Lebih Cepat</h3>
                            <p>Otomasi PO, faktur, stok, dan tracking.</p>
                        </div>
                        <div className="cp-benefit reveal">
                            <div className="cp-benefit-ic"><i className="fa-solid fa-check"></i></div>
                            <h3>Keaslian & Keamanan</h3>
                            <p>Standarisasi verifikasi produk original.</p>
                        </div>
                        <div className="cp-benefit reveal">
                            <div className="cp-benefit-ic"><i className="fa-solid fa-people-group"></i></div>
                            <h3>Dukungan Komunitas</h3>
                            <p>Didukung komunitas industri TIK yang aktif.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pembeda" className="cp-section cp-section--alt">
                <div className="container">
                    <div className="cp-head">
                        <span className="cp-kicker">WHY US</span>
                        <h2 className="cp-title">Apa yang Membuat Kami <span>Berbeda</span>?</h2>
                    </div>
                    <div className="cp-diff-grid">
                        <div className="cp-diff-card reveal">
                            <i className="fa-solid fa-laptop-code"></i>
                            <h3>Spesialis Produk IT</h3>
                            <p>Fokus mendalam pada industri teknologi.</p>
                        </div>
                        <div className="cp-diff-card reveal">
                            <i className="fa-solid fa-microchip"></i>
                            <h3>Teknologi Terdepan</h3>
                            <p>Dibangun dengan stack teknologi terkini.</p>
                        </div>
                        <div className="cp-diff-card reveal">
                            <i className="fa-solid fa-headset"></i>
                            <h3>Support Ahli</h3>
                            <p>Dukungan langsung dari pakar industri.</p>
                        </div>
                        <div className="cp-diff-card reveal">
                            <i className="fa-solid fa-diagram-project"></i>
                            <h3>End-to-End</h3>
                            <p>Solusi hulu ke hilir.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default WhyUs;