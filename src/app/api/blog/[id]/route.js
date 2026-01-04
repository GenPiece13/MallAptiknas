import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';

// 1. GET: Ambil Detail Artikel (Sudah ada, biarkan)
export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const [rows] = await pool.query("SELECT * FROM posts WHERE id = ?", [id]);

        if (rows.length === 0) {
            return NextResponse.json({ error: "Artikel tidak ditemukan" }, { status: 404 });
        }

        return NextResponse.json(rows[0]);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// 2. PUT: Update Artikel (TAMBAHAN BARU)
export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const data = await request.formData();

        // Ambil data text
        const title = data.get('title');
        const category = data.get('category');
        const author = data.get('author');
        const content = data.get('content');
        const youtubeUrl = data.get('youtubeUrl');

        // Ambil file baru (jika ada)
        const file = data.get('imageFile');
        let imageUrl = null;

        // Logika Upload Gambar Baru (Jika user upload gambar pengganti)
        if (file && typeof file !== 'string') {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${file.name.replaceAll(" ", "_")}`;
            const uploadDir = path.join(process.cwd(), 'public/uploads');
            const filePath = path.join(uploadDir, fileName);

            await writeFile(filePath, buffer);
            imageUrl = `/uploads/${fileName}`;
        }

        // Query Database
        if (imageUrl) {
            // Jika ada gambar baru, update gambar juga
            await pool.query(
                "UPDATE posts SET title=?, category=?, author=?, content=?, image=?, youtubeUrl=? WHERE id=?",
                [title, category, author, content, imageUrl, youtubeUrl, id]
            );
        } else {
            // Jika TIDAK ada gambar baru, jangan ubah kolom image
            await pool.query(
                "UPDATE posts SET title=?, category=?, author=?, content=?, youtubeUrl=? WHERE id=?",
                [title, category, author, content, youtubeUrl, id]
            );
        }

        return NextResponse.json({ message: "Update sukses" });

    } catch (error) {
        console.error("Update Error:", error);
        return NextResponse.json({ error: "Gagal update data" }, { status: 500 });
    }
}

// 3. DELETE: Hapus artikel (Sudah ada, biarkan)
export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await pool.query("DELETE FROM posts WHERE id = ?", [id]);
        return NextResponse.json({ message: "Artikel dihapus" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}