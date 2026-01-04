import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { writeFile } from 'fs/promises';
import path from 'path';

// GET: Ambil semua artikel
export async function GET() {
    try {
        const [rows] = await pool.query("SELECT * FROM posts ORDER BY created_at DESC");
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST: Tambah artikel baru + Upload Gambar
export async function POST(request) {
    try {
        const data = await request.formData();
        const file = data.get('imageFile');
        const title = data.get('title');
        const category = data.get('category');
        const author = data.get('author');
        const content = data.get('content');
        const youtubeUrl = data.get('youtubeUrl');

        let imageUrl = '';

        // Logika Simpan File ke folder public/uploads
        if (file) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Buat nama file unik
            const fileName = `${Date.now()}-${file.name.replaceAll(" ", "_")}`;
            const uploadDir = path.join(process.cwd(), 'public/uploads');
            const filePath = path.join(uploadDir, fileName);

            // Simpan file fisik
            await writeFile(filePath, buffer);
            imageUrl = `/uploads/${fileName}`; // Path yang disimpan di DB
        } else {
            imageUrl = 'https://via.placeholder.com/600x400'; // Default jika tidak ada gambar
        }

        // Simpan ke MySQL
        const [result] = await pool.query(
            "INSERT INTO posts (title, category, author, content, image, youtubeUrl) VALUES (?, ?, ?, ?, ?, ?)",
            [title, category, author, content, imageUrl, youtubeUrl]
        );

        return NextResponse.json({ message: "Sukses", id: result.insertId });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Gagal menyimpan data" }, { status: 500 });
    }
}