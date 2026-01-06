// src/app/admin/blog/page.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
// Router tidak lagi dibutuhkan untuk logout di sini karena sudah di layout
// import { useRouter } from "next/navigation"; 

export default function AdminBlogPage() {
    // const router = useRouter(); // Dipindah ke layout

    // Default tab ke "posts" karena ini halaman Blog
    const [activeTab, setActiveTab] = useState("posts");

    // Data States
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]); // Tetap disimpan jika dibutuhkan logic masa depan

    const [view, setView] = useState("list");
    const [isLoading, setIsLoading] = useState(false);

    // Form State (Artikel)
    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        author: "",
        content: "",
        youtubeUrl: "",
        image: ""
    });
    const [imageFile, setImageFile] = useState(null);

    // Form State (Kategori Baru)
    const [newCategory, setNewCategory] = useState("");

    useEffect(() => {
        fetchPosts();
        fetchCategories();
        // fetchUsers(); // Uncomment jika ingin fetch users
    }, []);

    const fetchPosts = async () => {
        try { const res = await fetch('/api/blog'); setPosts(await res.json()); } catch (e) { }
    };
    const fetchCategories = async () => {
        try { const res = await fetch('/api/categories'); setCategories(await res.json()); } catch (e) { }
    };
    const fetchUsers = async () => {
        try { const res = await fetch('/api/admin/users'); setUsers(await res.json()); } catch (e) { }
    };

    // --- LOGIC ARTIKEL (Tidak Berubah) ---
    const handleDelete = async (id) => {
        if (confirm("Yakin ingin menghapus artikel ini?")) {
            await fetch(`/api/blog/${id}`, { method: 'DELETE' });
            fetchPosts();
        }
    };

    const handleEdit = (post) => {
        setEditId(post.id);
        setFormData({
            title: post.title,
            category: post.category,
            author: post.author,
            content: post.content,
            youtubeUrl: post.youtubeUrl || "",
            image: post.image || ""
        });
        setImageFile(null);
        setView("form");
        setActiveTab("posts");
    };

    const resetForm = () => {
        setView("list");
        setEditId(null);
        setFormData({ title: "", category: categories[0]?.name || "Umum", author: "", content: "", youtubeUrl: "", image: "" });
        setImageFile(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const d = new FormData();
        d.append('title', formData.title);
        d.append('category', formData.category);
        d.append('author', formData.author);
        d.append('content', formData.content);
        d.append('youtubeUrl', formData.youtubeUrl);
        if (imageFile) d.append('imageFile', imageFile);

        try {
            const res = await fetch(editId ? `/api/blog/${editId}` : '/api/blog', {
                method: editId ? 'PUT' : 'POST',
                body: d
            });

            if (res.ok) {
                resetForm();
                fetchPosts();
            } else {
                alert("Gagal menyimpan data");
            }
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan server");
        } finally {
            setIsLoading(false);
        }
    };

    // --- LOGIC KATEGORI (Tidak Berubah) ---
    const handleAddCategory = async (e) => {
        e.preventDefault();
        if (!newCategory) return;

        try {
            const res = await fetch('/api/categories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newCategory })
            });
            if (res.ok) {
                setNewCategory("");
                fetchCategories();
            }
        } catch (err) {
            alert("Gagal menambah kategori");
        }
    };

    const handleDeleteCategory = async (id) => {
        if (confirm("Hapus kategori ini?")) {
            await fetch(`/api/categories/${id}`, { method: 'DELETE' });
            fetchCategories();
        }
    };

    // --- RENDER HALAMAN ---
    // Update: Menggunakan class .tab-btn dan .tab-group dari CSS Admin
    return (
        <div>
            {/* Header Konten Internal */}
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800" style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                        {activeTab === 'posts' ? (view === 'form' ? (editId ? 'Edit Artikel' : 'Artikel Baru') : 'Manajemen Blog') : 'Manajemen Kategori'}
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Kelola konten website Anda di sini.</p>
                </div>

                {/* --- UPDATE: TAB SWITCHER MENGGUNAKAN CSS CLASS BARU --- */}
                <div className="tab-group">
                    <button
                        onClick={() => { setActiveTab("posts"); setView("list"); }}
                        className={`tab-btn ${activeTab === 'posts' ? 'active' : ''}`}
                    >
                        Artikel
                    </button>
                    <button
                        onClick={() => setActiveTab("categories")}
                        className={`tab-btn ${activeTab === 'categories' ? 'active' : ''}`}
                    >
                        Kategori
                    </button>
                </div>
                {/* ------------------------------------------------------- */}
            </div>

            {/* --- KONTEN TAB: KATEGORI --- */}
            {activeTab === "categories" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Form Tambah */}
                    <div className="card h-fit">
                        <h3 className="font-bold text-lg mb-4 text-gray-700">Tambah Kategori</h3>
                        <form onSubmit={handleAddCategory}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2 text-gray-700">Nama Kategori</label>
                                <input
                                    className="input-clean"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    placeholder="Contoh: Tips Bisnis"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-full">
                                Tambah
                            </button>
                        </form>
                    </div>

                    {/* Tabel List */}
                    <div className="card md:col-span-2">
                        <h3 className="font-bold text-lg mb-4 text-gray-700">Daftar Kategori</h3>
                        <div className="table-container">
                            <table className="clean-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nama</th>
                                        <th className="text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.length > 0 ? categories.map((cat) => (
                                        <tr key={cat.id}>
                                            <td>#{cat.id}</td>
                                            <td>
                                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
                                                    {cat.name}
                                                </span>
                                            </td>
                                            <td className="text-right">
                                                <button onClick={() => handleDeleteCategory(cat.id)} className="btn-icon btn-delete">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="3" className="text-center py-4 text-gray-400">Belum ada kategori.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* --- KONTEN TAB: POSTS --- */}
            {activeTab === "posts" && (
                view === "list" ? (
                    <div className="card">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-700">Daftar Artikel</h3>
                            <button onClick={() => { resetForm(); setView("form"); }} className="btn btn-primary btn-sm">
                                + Tulis Baru
                            </button>
                        </div>
                        <div className="table-container">
                            <table className="clean-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: '40%' }}>Judul</th>
                                        <th>Kategori</th>
                                        <th>Penulis</th>
                                        <th>Tanggal</th>
                                        <th className="text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map(post => (
                                        <tr key={post.id}>
                                            <td className="font-bold text-gray-700">
                                                <div className="line-clamp-1">{post.title}</div>
                                            </td>
                                            <td>
                                                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                                                    {post.category}
                                                </span>
                                            </td>
                                            <td className="text-sm">{post.author}</td>
                                            <td className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</td>
                                            <td className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Link href={`/blog/${post.id}`} target="_blank" className="btn-icon btn-view">
                                                        <i className="fas fa-eye"></i>
                                                    </Link>
                                                    <button onClick={() => handleEdit(post)} className="btn-icon btn-edit">
                                                        <i className="fas fa-pen"></i>
                                                    </button>
                                                    <button onClick={() => handleDelete(post.id)} className="btn-icon btn-delete">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {posts.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="text-center py-8 text-gray-400">Belum ada artikel.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    /* --- FORM ARTIKEL --- */
                    <div className="card max-w-4xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold mb-2 text-gray-700">Judul Artikel</label>
                                    <input className="input-clean" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700">Kategori</label>
                                    <select
                                        className="input-clean"
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option value="">Pilih Kategori...</option>
                                        {categories.map(c => (
                                            <option key={c.id} value={c.name}>{c.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700">Penulis</label>
                                    <input className="input-clean" value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700">YouTube URL</label>
                                    <input className="input-clean" value={formData.youtubeUrl} onChange={e => setFormData({ ...formData, youtubeUrl: e.target.value })} placeholder="Opsional" />
                                </div>
                            </div>

                            <div className="upload-area bg-gray-50 border-dashed border-2 border-gray-200 rounded-lg p-4">
                                <label className="block text-sm font-bold mb-2 text-gray-700">Gambar Utama</label>
                                <div className="flex items-center gap-6">
                                    <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex-shrink-0 border border-gray-300 shadow-sm">
                                        {imageFile ? (
                                            <img src={URL.createObjectURL(imageFile)} className="w-full h-full object-cover" alt="Preview" />
                                        ) : formData.image ? (
                                            <img src={formData.image} className="w-full h-full object-cover" alt="Current" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <input type="file" className="input-clean bg-white" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
                                        <p className="text-xs text-gray-500 mt-1">Format: JPG, PNG. Maks 2MB.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Konten Artikel</label>
                                <textarea
                                    className="input-clean font-serif text-lg leading-relaxed h-64"
                                    value={formData.content}
                                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                                    required
                                    placeholder="Tulis konten artikel di sini..."
                                ></textarea>
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                                <button type="button" onClick={resetForm} className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">Batal</button>
                                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                    {isLoading ? "Menyimpan..." : "Simpan Artikel"}
                                </button>
                            </div>
                        </form>
                    </div>
                )
            )}
        </div>
    );
}