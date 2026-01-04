// src/app/blog/[id]/page.js
import pool from '@/lib/db';
import Link from "next/link";
import { notFound } from 'next/navigation';
import "../blog-detail.css"; // Pastikan path css ini benar

// 1. Generate Metadata untuk SEO (Judul di Tab Browser & Google)
export async function generateMetadata({ params }) {
    const { id } = await params;
    const [rows] = await pool.query("SELECT title, content FROM posts WHERE id = ?", [id]);
    const post = rows[0];

    if (!post) return { title: 'Artikel Tidak Ditemukan' };

    return {
        title: `${post.title} - Mall APTIKNAS Blog`,
        description: post.content.substring(0, 160) + '...', // Ambil 160 karakter pertama untuk deskripsi
    };
}

// Helper: Ambil data post
async function getPost(id) {
    const [rows] = await pool.query("SELECT * FROM posts WHERE id = ?", [id]);
    return rows[0];
}

// Helper: Ambil related posts
async function getRelatedPosts(currentId) {
    const [rows] = await pool.query("SELECT id, title, image, created_at FROM posts WHERE id != ? ORDER BY created_at DESC LIMIT 3", [currentId]);
    return rows;
}

// Helper: Youtube ID
function getYoutubeId(url) {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return match ? match[1] : null;
}

// 2. Main Server Component
export default async function BlogDetailPage({ params }) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) return notFound(); // Tampilkan halaman 404 bawaan Next.js

    const relatedPosts = await getRelatedPosts(id);
    const youtubeId = getYoutubeId(post.youtubeUrl);

    // Format tanggal
    const formattedDate = new Date(post.created_at).toLocaleDateString("id-ID", {
        day: "numeric", month: "long", year: "numeric",
    });

    return (
        <section className="page-safe-area">
            <div className="container max-w-6xl">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link href="/">Home</Link><span>/</span>
                    <Link href="/blog">Blog</Link><span>/</span>
                    <span className="active line-clamp-1">{post.title}</span>
                </div>

                {/* Header Artikel */}
                <div className="text-center max-w-4xl mx-auto mb-14">
                    <Link href={`/blog?cat=${post.category}`} className="category-badge hover:bg-blue-100 transition">
                        {post.category || "NEWS"}
                    </Link>
                    <h1 className="article-title">{post.title}</h1>
                    <div className="meta-card">
                        <div className="meta-author">
                            <div className="avatar">{post.author?.charAt(0).toUpperCase() || "A"}</div>
                            <div><small>Penulis</small><strong>{post.author || "Admin"}</strong></div>
                        </div>
                        <div className="divider" />
                        <div><small>Diposting</small><strong>{formattedDate}</strong></div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="hero-image">
                    <img src={post.image || "https://via.placeholder.com/1200x600"} alt={post.title} />
                </div>

                {/* Konten Utama */}
                <div className="grid lg:grid-cols-12 gap-12 mt-16">
                    <article className="lg:col-span-8">
                        <div className="prose-modern">
                            {post.content.split("\n").filter(Boolean).map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        {youtubeId && (
                            <div className="youtube-card anim-scale">
                                <div className="youtube-wrapper">
                                    <iframe src={`https://www.youtube.com/embed/${youtubeId}`} allowFullScreen />
                                </div>
                            </div>
                        )}

                        {/* Share Button (Harus Client Component terpisah jika ingin interaktif, 
                            tapi untuk simpel kita pakai link statis standar) */}
                        <div className="share-section">
                            <h4>Bagikan Artikel</h4>
                            <div className="social-share-container">
                                <a href="#" className="social-btn btn-fb">Facebook</a>
                                <a href="#" className="social-btn btn-tw">Twitter</a>
                                <a href="#" className="social-btn btn-wa">WhatsApp</a>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar Related */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sidebar-card">
                            <h3>Artikel Lainnya</h3>
                            {relatedPosts.map(rp => (
                                <Link href={`/blog/${rp.id}`} key={rp.id} className="related-item group">
                                    <img src={rp.image || "https://via.placeholder.com/150"} className="group-hover:opacity-80 transition" />
                                    <div>
                                        <strong className="group-hover:text-blue-500 transition line-clamp-2">{rp.title}</strong>
                                        <small className="text-gray-400 block mt-1">
                                            {new Date(rp.created_at).toLocaleDateString("id-ID")}
                                        </small>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}