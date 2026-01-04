"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    if (pathname.startsWith("/admin") || pathname.startsWith("/auth")) return null;

    return (
        <footer id="tokopedia-care">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="footer-logo">MallAptiknas</div>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Tentang Kami</h4>
                        <ul>
                            <li><a href="#sejarah">Kisah Kami</a></li>
                            <li><a href="#">Karir (Nakama)</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Perusahaan</h4>
                        <ul>
                            <li><a href="#platform">Bisnis Kami</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Bergabung dengan Kami</h4>
                        <ul>
                            <li><a href="#">Mulai Berjualan</a></li>
                            <li><a href="#">Mitra Kurir</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()}, PT Inti Nusa Nexus.
            </div>
        </footer>
    );
};
export default Footer;