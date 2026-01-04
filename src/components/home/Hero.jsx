const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content reveal is-visible"> {/* is-visible default agar muncul */}
                <h1>MallAptiknas: <br /> Platform Terintegrasi Untuk Distribusi Produk IT</h1>
                <p>Menghubungkan Seluruh Rantai Pasok Produk Teknologi, Dari Supplier Hingga Konsumen Akhir</p>
                <div style={{ marginTop: '30px' }}>
                    <a href="#platform" className="btn btn-outline">Pelajari SCM Platform</a>
                    <a href="#platform" className="btn btn-primary">Jelajahi Marketplace</a>
                </div>
            </div>
        </section>
    );
};
export default Hero;