"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminBlogPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("posts");

    // Data States
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);

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
        fetchUsers();
        fetchCategories();
    }, []);

    const fetchPosts = async () => { const res = await fetch('/api/blog'); setPosts(await res.json()); };
    const fetchUsers = async () => { const res = await fetch('/api/admin/users'); setUsers(await res.json()); };
    const fetchCategories = async () => { const res = await fetch('/api/categories'); setCategories(await res.json()); };

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/auth");
    };

    // --- LOGIC ARTIKEL ---
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

    // --- LOGIC USER ---
    const handleUserStatus = async (id, status) => {
        await fetch('/api/admin/users', {
            method: 'PUT',
            body: JSON.stringify({ id, is_active: status ? 0 : 1 })
        });
        fetchUsers();
    };

    // --- LOGIC KATEGORI ---
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

    return (
        <div className="admin-layout">
            {/* SIDEBAR */}
            <aside className="admin-sidebar">
                <div className="sidebar-logo">MALL<span className="text-blue-400">APTIKNAS</span></div>
                <nav>
                    <button onClick={() => { setActiveTab("dashboard"); setView("list"); }} className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}>
                        <i className="fas fa-home"></i> Dashboard
                    </button>
                    <button onClick={() => { setActiveTab("posts"); setView("list"); }} className={`nav-item ${activeTab === "posts" ? "active" : ""}`}>
                        <i className="fas fa-newspaper"></i> Artikel Blog
                    </button>
                    <button onClick={() => { setActiveTab("categories"); setView("list"); }} className={`nav-item ${activeTab === "categories" ? "active" : ""}`}>
                        <i className="fas fa-tags"></i> Kategori
                    </button>
                    <button onClick={() => { setActiveTab("users"); setView("list"); }} className={`nav-item ${activeTab === "users" ? "active" : ""}`}>
                        <i className="fas fa-users"></i> Pengguna
                    </button>
                </nav>
                <button onClick={handleLogout} className="nav-item nav-logout">
                    <i className="fas fa-sign-out-alt"></i> Logout
                </button>
            </aside>

            {/* CONTENT */}
            <main className="admin-content">
                <header className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold capitalize text-gray-800">
                            {view === "form" ? (editId ? "Edit Artikel" : "Tulis Artikel Baru") : (activeTab === "categories" ? "Kelola Kategori" : activeTab)}
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">Panel Administrasi Konten</p>
                    </div>
                </header>

                {/* --- TAB DASHBOARD --- */}
                {activeTab === "dashboard" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="card border-l-4 border-blue-500">
                            <h3 className="stat-value text-blue-600">{posts.length}</h3>
                            <p className="text-gray-500 font-medium">Total Artikel</p>
                        </div>
                        <div className="card border-l-4 border-purple-500">
                            <h3 className="stat-value text-purple-600">{categories.length}</h3>
                            <p className="text-gray-500 font-medium">Total Kategori</p>
                        </div>
                        <div className="card border-l-4 border-green-500">
                            <h3 className="stat-value text-green-600">{users.length}</h3>
                            <p className="text-gray-500 font-medium">Pengguna Terdaftar</p>
                        </div>
                    </div>
                )}

                {/* --- TAB KATEGORI (REVISI DESIGN) --- */}
                {activeTab === "categories" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Kolom Kiri: Form Tambah */}
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
                                    <i className="fas fa-plus mr-2"></i> Simpan
                                </button>
                            </form>
                        </div>

                        {/* Kolom Kanan: Tabel List */}
                        <div className="card md:col-span-2">
                            <h3 className="font-bold text-lg mb-4 text-gray-700">Daftar Kategori</h3>
                            <div className="table-container">
                                <table className="clean-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nama Kategori</th>
                                            <th className="text-right">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.length > 0 ? categories.map((cat) => (
                                            <tr key={cat.id}>
                                                <td style={{ width: '50px' }}>#{cat.id}</td>
                                                <td>
                                                    {/* REVISI DI SINI: Gaya 'Pill' yang bersih tanpa border */}
                                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
                                                        {cat.name}
                                                    </span>
                                                </td>
                                                <td className="text-right">
                                                    <button onClick={() => handleDeleteCategory(cat.id)} className="btn-icon btn-delete" title="Hapus">
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

                {/* --- TAB POSTS --- */}
                {activeTab === "posts" && (
                    view === "list" ? (
                        <div className="card">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-gray-700">Daftar Artikel</h3>
                                <button onClick={() => { resetForm(); setView("form"); }} className="btn btn-primary btn-sm">
                                    <i className="fas fa-plus mr-2"></i> Tulis Baru
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
                                                    {/* Update juga di sini agar konsisten */}
                                                    <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                                                        {post.category}
                                                    </span>
                                                </td>
                                                <td className="text-sm">{post.author}</td>
                                                <td className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</td>
                                                <td className="text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <Link href={`/blog/${post.id}`} target="_blank" className="btn-icon btn-view" title="Lihat">
                                                            <i className="fas fa-eye"></i>
                                                        </Link>
                                                        <button onClick={() => handleEdit(post)} className="btn-icon btn-edit" title="Edit">
                                                            <i className="fas fa-pen"></i>
                                                        </button>
                                                        <button onClick={() => handleDelete(post.id)} className="btn-icon btn-delete" title="Hapus">
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
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
                                        <input className="input-clean" value={formData.youtubeUrl} onChange={e => setFormData({ ...formData, youtubeUrl: e.target.value })} />
                                    </div>
                                </div>

                                <div className="upload-area bg-gray-50 border-dashed">
                                    <label className="block text-sm font-bold mb-2 text-gray-700">Gambar Utama</label>
                                    <div className="flex items-center gap-6">
                                        <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex-shrink-0 border border-gray-300 shadow-sm">
                                            {imageFile ? (
                                                <img src={URL.createObjectURL(imageFile)} className="w-full h-full object-cover" />
                                            ) : formData.image ? (
                                                <img src={formData.image} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <input type="file" className="input-clean bg-white" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700">Konten Artikel</label>
                                    <textarea className="input-clean font-serif text-lg leading-relaxed" rows="10" value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} required></textarea>
                                </div>

                                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                                    <button type="button" onClick={resetForm} className="btn text-gray-600 hover:bg-gray-100">Batal</button>
                                    <button type="submit" className="btn btn-primary" disabled={isLoading}>{isLoading ? "Menyimpan..." : "Simpan"}</button>
                                </div>
                            </form>
                        </div>
                    )
                )}

                {/* --- TAB USERS --- */}
                {activeTab === "users" && (
                    <div className="card">
                        <h3 className="font-bold text-lg mb-4 text-gray-700">Manajemen Pengguna</h3>
                        <div className="table-container">
                            <table className="clean-table">
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Status</th>
                                        <th>Bergabung</th>
                                        <th className="text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id}>
                                            <td className="font-bold text-gray-700">{user.username}</td>
                                            <td>
                                                <span className={`badge ${user.is_active ? 'text-green-600 bg-green-100 px-2 py-1 rounded text-xs' : 'text-yellow-600 bg-yellow-100 px-2 py-1 rounded text-xs'}`}>
                                                    {user.is_active ? 'Aktif' : 'Pending'}
                                                </span>
                                            </td>
                                            <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                            <td className="text-right">
                                                <button
                                                    onClick={() => handleUserStatus(user.id, user.is_active)}
                                                    className={`btn btn-sm ${user.is_active ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}
                                                >
                                                    {user.is_active ? 'Nonaktifkan' : 'Setujui Akses'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}