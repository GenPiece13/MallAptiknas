// src/components/layout/Footer.jsx
"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    // Jangan tampilkan footer di halaman admin atau auth
    if (pathname.startsWith("/admin") || pathname.startsWith("/auth")) return null;

    return (
        <footer id="footer-main">
            <div className="container">
                <div className="footer-grid">

                    {/* KOLOM 1: Tentang Mallaptiknas */}
                    <div className="footer-col">
                        <h4>Tentang Mallaptiknas</h4>
                        <ul>
                            <li>
                                <a href="https://mallaptiknas.com/login" target="_blank" rel="noreferrer">
                                    MallAptiknas
                                </a>
                            </li>
                            <li>
                                <a href="https://stage-scm.mallaptiknas.com/login" target="_blank" rel="noreferrer">
                                    scm.MallAptiknas
                                </a>
                            </li>
                            <li>
                                <a href="/SyaratKebijakan">Syarat & Ketentuan</a>
                            </li>
                        </ul>
                    </div>

                    {/* KOLOM 2: Layanan Pelanggan */}
                    <div className="footer-col">
                        <h4>Layanan Pelanggan</h4>
                        <ul>
                            <li><a href="/bantuan">Pusat Bantuan</a></li>
                            <li><a href="#">Pengembalian Produk</a></li>
                            <li><a href="#">Hubungi Kami</a></li>
                        </ul>
                    </div>

                    {/* KOLOM 3: Ikuti Kami */}
                    <div className="footer-col">
                        <h4>Ikuti Kami</h4>
                        <ul className="social-links-list">
                            <li>
                                <a href="https://www.instagram.com/mallaptiknas?igsh=MTB5N213MzJ3YWtqMw==" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="YouTube">
                                    <i className="fab fa-youtube"></i> YouTube
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="copyright">
                &copy; {new Date().getFullYear()}, Mall Aptiknas.
            </div>

            <style jsx>{`
                footer {
                    background-color: var(--dark-bg); /* Background footer terang */
                    padding: 40px 0 20px;
                    border-top: 1px solid var(--brand-grey);
                    font-size: 0.95rem;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 30px;
                    margin-bottom: 40px;
                }

                .footer-col h4 {
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: var(--light-grey);
                }

                .footer-col ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-col ul li {
                    margin-bottom: 12px;
                }

                .footer-col ul li a {
                    text-decoration: none;
                    color: #6c757d;
                    transition: color 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                }

                .footer-col ul li a:hover {
                    color: var(--brand-blue, #00AEEF); /* Menggunakan brand color jika ada */
                }

                /* Ikon Social Media */
                .social-links-list i {
                    width: 24px; 
                    margin-right: 8px;
                    text-align: center;
                }

                /* Copyright Section */
                .copyright {
                    text-align: center;
                    padding-top: 20px;
                    border-top: 1px solid var(--brand-grey);
                    color: var(--brand-grey);
                    font-size: 0.85rem;
                }

                /* Desktop View: Bagi menjadi 3 kolom */
                @media (min-width: 768px) {
                    .footer-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;