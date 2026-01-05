// src/components/home/About.jsx
const About = () => {
    return (
        <>
            {/* --- SEJARAH & ROADMAP --- */}
            <section id="sejarah" className="cp-section cp-section--alt">
                <div className="container">
                    <div className="cp-head">
                        <span className="cp-kicker">SEJARAH KAMI</span>
                        <h2 className="cp-title">Perjalanan Membangun <span>Ekosistem Teknologi</span> Indonesia</h2>
                        <p className="cp-sub">Dari akar komunitas industri TIK hingga hadirnya MallAptiknas sebagai platform terintegrasi.</p>
                    </div>

                    {/* GRID ATAS: SEJARAH (Kiri) vs SOLUSI (Kanan) */}
                    <div className="cp-history-grid" style={{ alignItems: 'stretch' }}>

                        {/* LEFT COLUMN: History, Legal, People */}
                        <div className="cp-stack">
                            {/* CARD 1: WARISAN */}
                            <div className="cp-panel reveal">
                                <div className="cp-panel-top">
                                    <div className="cp-icon-badge">
                                        <i className="fa-solid fa-landmark"></i>
                                    </div>
                                    <div>
                                        <h3 className="cp-panel-title">Warisan 35 Tahun APTIKNAS</h3>
                                        <div className="cp-badge">1991 – Sekarang</div>
                                    </div>
                                </div>
                                <p className="cp-text">
                                    APTIKNAS (Asosiasi Pengusaha Teknologi Informasi & Komunikasi Nasional)
                                    berkembang dari perjalanan panjang industri TIK Indonesia.
                                    Pengalaman komunitas inilah yang menjadi fondasi lahirnya ekosistem MallAptiknas.
                                </p>
                                <div className="cp-metric">
                                    <div className="cp-metric-num">35 Tahun</div>
                                    <div className="cp-metric-label">Asosiasi TIK tertua</div>
                                </div>
                            </div>

                            {/* CARD 2: LEGALITAS */}
                            <div className="cp-panel reveal">
                                <div className="cp-panel-top">
                                    <div className="cp-icon-badge">
                                        <i className="fa-solid fa-scale-balanced"></i>
                                    </div>
                                    <div>
                                        <h3 className="cp-panel-title">Pendirian & Legalitas</h3>
                                        <p className="cp-mini">Landasan organisasi untuk membangun ekosistem yang kredibel.</p>
                                    </div>
                                </div>
                                <div className="cp-check-list">
                                    <div className="cp-check-item">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>Dideklarasikan: <strong>24 Februari 2017</strong></span>
                                    </div>
                                    <div className="cp-check-item">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>SK Kemenkumham: <strong>26 April 2017</strong></span>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 3: KEPENGURUSAN */}
                            <div className="cp-panel reveal">
                                <div className="cp-panel-top">
                                    <div className="cp-icon-badge"><i className="fa-solid fa-users-gear"></i></div>
                                    <div>
                                        <h3 className="cp-panel-title">Kepengurusan 2022–2027</h3>
                                        <p className="cp-mini">Kepemimpinan yang mendorong transformasi ekosistem.</p>
                                    </div>
                                </div>
                                <ul className="cp-people">
                                    <li><span>Ketum APTIKNAS</span><strong>Soeghiarto Santoso / HOKY</strong></li>
                                    <li><span>Sekretaris Jenderal</span><strong>Fanky Christian</strong></li>
                                    <li><span>Bendahara</span><strong>Andri Sugondo</strong></li>
                                </ul>
                                <div className="cp-note">SK KUMHAM RI: AHU-000091.AH.01.08.TAHUN 2023</div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: SOLUSI (Full Height) */}
                        <div className="cp-stack" style={{ height: '100%' }}>
                            <div className="cp-panel cp-panel--soft reveal" style={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div className="cp-panel-top">
                                    <div className="cp-icon-badge cp-icon-badge--soft">
                                        <i className="fa-solid fa-code-branch"></i>
                                    </div>
                                    <div>
                                        <h3 className="cp-panel-title">Solusi untuk Anggota APTIKNAS</h3>
                                        <p className="cp-mini">Mengatasi tantangan distribusi produk IT lewat ekosistem yang terintegrasi.</p>
                                    </div>
                                </div>

                                {/* Grid Masalah (Flex Grow agar mengisi ruang kosong) */}
                                <div className="cp-problem-grid" style={{ flexGrow: 1 }}>
                                    <div className="cp-mini-card">
                                        <i className="fa-solid fa-link-slash"></i>
                                        <h4>Fragmentasi Distribusi</h4>
                                        <p>Rantai pasok terpisah-pisah dan tidak terintegrasi.</p>
                                    </div>
                                    <div className="cp-mini-card">
                                        <i className="fa-solid fa-lock"></i>
                                        <h4>Akses Terbatas</h4>
                                        <p>UMKM sulit akses ke produk IT dengan harga kompetitif.</p>
                                    </div>
                                    <div className="cp-mini-card">
                                        <i className="fa-solid fa-arrows-rotate"></i>
                                        <h4>Inefisiensi Operasional</h4>
                                        <p>Inventory manual dan tidak terpusat.</p>
                                    </div>
                                    <div className="cp-mini-card">
                                        <i className="fa-solid fa-shield-halved"></i>
                                        <h4>Keaslian Produk</h4>
                                        <p>Verifikasi produk original & garansi belum standar.</p>
                                    </div>
                                </div>

                                {/* Kotak Bawah: Lahirnya MallAptiknas (Margin Top Auto agar selalu di bawah) */}
                                <div className="cp-solution-box" style={{ marginTop: 'auto' }}>
                                    <div className="cp-solution-bar"></div>
                                    <div className="cp-solution-content">
                                        <h4>Lahirnya MallAptiknas</h4>
                                        <p>
                                            Dengan kompleksitas distribusi produk IT, dibentuk platform digital nasional bernama <strong>MallAptiknas</strong> untuk menyatukan seluruh rantai pasok dalam satu ekosistem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION BARU: ROADMAP PENGEMBANGAN (Style Timeline Horizontal) */}
                    <div style={{ marginTop: '60px' }}>
                        <div className="cp-head">
                            <h3 className="cp-title" style={{ fontSize: '1.8rem' }}>Roadmap <span>Pengembangan</span></h3>
                            <p className="cp-sub">Langkah bertahap menuju peluncuran nasional.</p>
                        </div>

                        {/* Menggunakan Class cp-timeline dari globals.css agar style sama persis */}
                        <div className="cp-timeline reveal" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            {/* Garis Penghubung */}
                            <div className="cp-timeline-line" style={{ left: '16%', right: '16%' }}></div>

                            {/* ITEM 2024 */}
                            <div className="cp-timeline-item">
                                <div className="cp-timeline-dot">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <div className="cp-timeline-year">2024</div>
                                <div className="cp-timeline-title">Development Aplikasi Dimulai</div>
                                <div className="cp-timeline-desc">Fondasi platform & arsitektur dibangun.</div>
                            </div>

                            {/* ITEM 2025 */}
                            <div className="cp-timeline-item">
                                <div className="cp-timeline-dot">
                                    <i className="fa-solid fa-flask"></i>
                                </div>
                                <div className="cp-timeline-year">2025</div>
                                <div className="cp-timeline-title">Testing & Onboarding Mitra</div>
                                <div className="cp-timeline-desc">Integrasi supplier, distributor, reseller.</div>
                            </div>

                            {/* ITEM 2026 */}
                            <div className="cp-timeline-item">
                                <div className="cp-timeline-dot">
                                    <i className="fa-solid fa-rocket"></i>
                                </div>
                                <div className="cp-timeline-year">2026</div>
                                <div className="cp-timeline-title">Launching Nasional</div>
                                <div className="cp-timeline-desc">Ekspansi layanan dan skala operasional.</div>
                            </div>
                        </div>

                        {/* Tombol CTA di bawah Roadmap */}
                        <div style={{ marginTop: '40px', textAlign: 'center' }}>
                            <a href="#" className="cp-btn-full" style={{ maxWidth: '400px', margin: '0 auto' }}>
                                Bergabung dalam Perjalanan Ini <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- MISI KAMI --- */}
            <section id="misi" className="cp-section">
                <div className="container">
                    {/* Header Center */}
                    <div className="cp-head">
                        <span className="cp-kicker">TENTANG KAMI</span>
                        <h2 className="cp-title">Misi <span>Kami</span></h2>
                        <p className="cp-sub">Komitmen MallAptiknas membangun ekosistem teknologi yang lebih efisien, inklusif, dan tepercaya.</p>
                    </div>

                    <div className="cp-mission-grid">
                        {/* KOLOM KIRI: Narasi & Value Pills */}
                        <div className="cp-mission-left reveal">
                            <h3>Mendobrak Tembok Jarak & Waktu</h3>

                            <p>
                                Kami memastikan siapa saja, di mana saja, bisa mendapatkan akses yang
                                sama terhadap produk IT dan kesempatan ekonomi.
                            </p>
                            <p>
                                Kami terus berinovasi untuk membantu distributor, reseller, dan UMKM
                                naik kelas—dengan proses yang lebih cepat, transparan, dan terukur.
                            </p>

                            {/* Pills Group dengan Variasi Warna */}
                            <div className="cp-pill-group">
                                {/* Biru: Fokus Konsumen */}
                                <div className="cp-pill blue">
                                    <i className="fa-solid fa-circle-check"></i> Fokus pada Konsumen
                                </div>
                                {/* Hijau: Pola Pikir Bertumbuh */}
                                <div className="cp-pill green">
                                    <i className="fa-solid fa-chart-line"></i> Pola Pikir Bertumbuh
                                </div>
                                {/* Hijau: Buat Menjadi Nyata */}
                                <div className="cp-pill green">
                                    <i className="fa-solid fa-bolt"></i> Buat Menjadi Nyata
                                </div>
                            </div>
                        </div>

                        {/* KOLOM KANAN: Kartu 'Yang Kami Percayai' */}
                        <div className="cp-mission-right reveal">
                            <h4>Yang Kami Percayai</h4>
                            <div className="cp-beliefs">
                                <div className="cp-belief">
                                    <div className="cp-belief-ic"><i className="fa-solid fa-globe"></i></div>
                                    <div>
                                        <div className="cp-belief-title">Platform Terintegrasi</div>
                                        <div className="cp-belief-desc">Ekosistem digital yang menghubungkan rantai pasok produk IT dari supplier hingga konsumen.</div>
                                    </div>
                                </div>
                                <div className="cp-belief">
                                    <div className="cp-belief-ic"><i className="fa-solid fa-hand-holding-hand"></i></div>
                                    <div>
                                        <div className="cp-belief-title">Pemberdayaan Pelaku Usaha</div>
                                        <div className="cp-belief-desc">Mendukung distributor, reseller, dan UMKM dengan alat & akses untuk berkembang di industri teknologi.</div>
                                    </div>
                                </div>
                                <div className="cp-belief">
                                    <div className="cp-belief-ic"><i className="fa-solid fa-arrows-rotate"></i></div>
                                    <div>
                                        <div className="cp-belief-title">Transformasi Digital</div>
                                        <div className="cp-belief-desc">Mendorong adopsi teknologi untuk efisiensi, transparansi, dan standardisasi proses.</div>
                                    </div>
                                </div>
                                <div className="cp-belief">
                                    <div className="cp-belief-ic"><i className="fa-solid fa-shield-halved"></i></div>
                                    <div>
                                        <div className="cp-belief-title">Komunitas Terpercaya</div>
                                        <div className="cp-belief-desc">Jaminan keaslian produk, dukungan teknis, dan komunitas yang terus berkembang.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default About;