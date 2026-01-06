// src/app/admin/blog/page.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminBlogPage() {
    // --- STATE LOGIC (DIPERTAHANKAN) ---
    const [activeTab, setActiveTab] = useState("posts");
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [view, setView] = useState("list");
    const [isLoading, setIsLoading] = useState(false);
    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({ title: "", category: "", author: "", content: "", youtubeUrl: "", image: "" });
    const [imageFile, setImageFile] = useState(null);
    const [newCategory, setNewCategory] = useState("");

    // --- FETCH DATA ---
    useEffect(() => {
        fetchPosts();
        fetchCategories();
    }, []);

    const fetchPosts = async () => { try { const res = await fetch('/api/blog'); setPosts(await res.json()); } catch (e) { } };
    const fetchCategories = async () => { try { const res = await fetch('/api/categories'); setCategories(await res.json()); } catch (e) { } };

    // --- HANDLERS (LOGIC DIPERTAHANKAN) ---
    const handleDelete = async (id) => {
        if (confirm("Yakin hapus?")) {
            await fetch(`/api/blog/${id}`, { method: 'DELETE' });
            fetchPosts();
        }
    };

    const handleEdit = (post) => {
        setEditId(post.id);
        setFormData({ ...post, youtubeUrl: post.youtubeUrl || "", image: post.image || "" });
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
        // Append form data logic...
        Object.keys(formData).forEach(key => d.append(key, formData[key]));
        if (imageFile) d.append('imageFile', imageFile);

        try {
            const res = await fetch(editId ? `/api/blog/${editId}` : '/api/blog', {
                method: editId ? 'PUT' : 'POST',
                body: d
            });
            if (res.ok) { resetForm(); fetchPosts(); }
        } catch (err) { alert("Error saving data"); } finally { setIsLoading(false); }
    };

    const handleAddCategory = async (e) => {
        e.preventDefault();
        if (!newCategory) return;
        await fetch('/api/categories', { method: 'POST', body: JSON.stringify({ name: newCategory }) });
        setNewCategory(""); fetchCategories();
    };

    const handleDeleteCategory = async (id) => {
        if (confirm("Hapus kategori?")) {
            await fetch(`/api/categories/${id}`, { method: 'DELETE' });
            fetchCategories();
        }
    };

    // --- RENDER (HANYA KONTEN) ---
    return (
        <div>
            {/* Header Konten Internal + Tab Switcher */}
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                {/* Judul Halaman Internal (Opsional, karena Header Layout sudah ada judul) */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800">
                        {activeTab === 'posts' ? 'Kelola Artikel' : 'Kelola Kategori'}
                    </h3>
                </div>

                {/* Tab Switcher */}
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
            </div>

            {/* KONTEN TAB: KATEGORI */}
            {activeTab === "categories" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card h-fit">
                        <h4 className="font-bold mb-4">Tambah Kategori</h4>
                        <form onSubmit={handleAddCategory}>
                            <input className="input-clean mb-4" value={newCategory} onChange={e => setNewCategory(e.target.value)} placeholder="Nama Kategori" required />
                            <button className="btn btn-primary w-full">Tambah</button>
                        </form>
                    </div>
                    <div className="card md:col-span-2">
                        <div className="table-container">
                            <table className="clean-table">
                                <thead><tr><th>ID</th><th>Nama</th><th className="text-right">Aksi</th></tr></thead>
                                <tbody>
                                    {categories.map(cat => (
                                        <tr key={cat.id}>
                                            <td>#{cat.id}</td>
                                            <td><span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold">{cat.name}</span></td>
                                            <td className="text-right"><button onClick={() => handleDeleteCategory(cat.id)} className="btn-icon btn-delete">🗑️</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* KONTEN TAB: ARTIKEL */}
            {activeTab === "posts" && (
                view === "list" ? (
                    <div className="card">
                        <div className="flex justify-between mb-4">
                            <h4 className="font-bold">Daftar Artikel</h4>
                            <button onClick={() => { resetForm(); setView("form") }} className="btn btn-primary btn-sm">+ Tulis Baru</button>
                        </div>
                        <div className="table-container">
                            <table className="clean-table">
                                <thead><tr><th>Judul</th><th>Kategori</th><th>Tanggal</th><th className="text-right">Aksi</th></tr></thead>
                                <tbody>
                                    {posts.map(p => (
                                        <tr key={p.id}>
                                            <td className="font-medium">{p.title}</td>
                                            <td><span className="px-2 py-1 bg-gray-100 rounded text-xs">{p.category}</span></td>
                                            <td className="text-sm text-gray-500">{new Date(p.created_at).toLocaleDateString()}</td>
                                            <td className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button onClick={() => handleEdit(p)} className="btn-icon btn-edit">✏️</button>
                                                    <button onClick={() => handleDelete(p.id)} className="btn-icon btn-delete">🗑️</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="card">
                        <h4 className="font-bold mb-6">{editId ? 'Edit Artikel' : 'Artikel Baru'}</h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input className="input-clean" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="Judul" required />
                            <div className="grid grid-cols-2 gap-4">
                                <select className="input-clean" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                                    <option value="">Pilih Kategori</option>
                                    {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                                </select>
                                <input className="input-clean" value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} placeholder="Penulis" />
                            </div>
                            <textarea className="input-clean h-32" value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} placeholder="Konten..." required></textarea>
                            <div className="flex justify-end gap-2">
                                <button type="button" onClick={resetForm} className="btn bg-gray-200">Batal</button>
                                <button className="btn btn-primary">{isLoading ? 'Menyimpan...' : 'Simpan'}</button>
                            </div>
                        </form>
                    </div>
                )
            )}
        </div>
    );
}