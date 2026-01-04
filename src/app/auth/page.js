"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                router.push("/admin/blog");
            } else {
                setError(data.error || "Username atau password salah.");
            }
        } catch (err) {
            setError("Gagal terhubung ke server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page-container">
            {/* CSS LOKAL: Memastikan tampilan tetap benar meskipun Tailwind error */}
            <style jsx>{`
                .auth-page-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
                    z-index: 9999;
                    overflow: hidden;
                    font-family: system-ui, -apple-system, sans-serif;
                }
                
                /* Dekorasi Latar (Orbs) */
                .orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    z-index: 0;
                    opacity: 0.4;
                }
                .orb-1 { width: 400px; height: 400px; background: #00c6ff; top: -100px; left: -100px; }
                .orb-2 { width: 300px; height: 300px; background: #0072ff; bottom: -50px; right: -50px; }

                /* Kartu Glassmorphism */
                .glass-card {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    max-width: 400px; /* Membatasi lebar agar tidak stretch */
                    padding: 40px;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    margin: 20px;
                }

                .icon-wrapper {
                    width: 80px;
                    height: 80px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px auto;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    font-size: 32px;
                    color: white;
                }

                h2 {
                    color: white;
                    text-align: center;
                    margin: 0 0 5px 0;
                    font-size: 24px;
                    font-weight: 700;
                    letter-spacing: 1px;
                }

                .subtitle {
                    color: #94a3b8;
                    text-align: center;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 30px;
                    display: block;
                }

                /* Input Style */
                .input-group {
                    margin-bottom: 20px;
                    position: relative;
                }

                .input-field {
                    width: 100%;
                    padding: 14px 14px 14px 45px; /* Padding kiri untuk icon */
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    color: white;
                    font-size: 14px;
                    outline: none;
                    transition: all 0.3s;
                }

                .input-field:focus {
                    background: rgba(0, 0, 0, 0.4);
                    border-color: #00c6ff;
                    box-shadow: 0 0 0 3px rgba(0, 198, 255, 0.1);
                }

                .input-icon {
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Button Style */
                .login-btn {
                    width: 100%;
                    padding: 14px;
                    background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
                    border: none;
                    border-radius: 12px;
                    color: white;
                    font-weight: 700;
                    font-size: 14px;
                    letter-spacing: 1px;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                    margin-top: 10px;
                }

                .login-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0, 198, 255, 0.3);
                }

                .login-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
                }

                .error-msg {
                    background: rgba(220, 38, 38, 0.2);
                    border: 1px solid rgba(220, 38, 38, 0.3);
                    color: #fecaca;
                    padding: 12px;
                    border-radius: 8px;
                    font-size: 13px;
                    text-align: center;
                    margin-bottom: 20px;
                }

                .footer {
                    text-align: center;
                    margin-top: 25px;
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 11px;
                }
            `}</style>

            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>

            <div className="glass-card">
                <div className="icon-wrapper">
                    <i className="fas fa-user-shield"></i>
                </div>

                <h2>ADMIN LOGIN</h2>
                <span className="subtitle">Aptiknas Security Panel</span>

                {error && <div className="error-msg">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <i className="fas fa-envelope input-icon"></i>
                        <input
                            type="text"
                            name="username"
                            className="input-field"
                            placeholder="Username / ID"
                            value={form.username}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <i className="fas fa-lock input-icon"></i>
                        <input
                            type="password"
                            name="password"
                            className="input-field"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? "MEMPROSES..." : "MASUK SEKARANG"}
                    </button>
                </form>

                <div className="footer">
                    &copy; 2026 Mall Aptiknas. Protected Area.
                </div>
            </div>
        </div>
    );
}