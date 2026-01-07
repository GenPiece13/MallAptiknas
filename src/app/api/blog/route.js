import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { writeFile } from 'fs/promises';
import path from 'path';
import fs from 'fs';

// GET: Ambil semua artikel
export async function GET() {
    try {
        const [rows] = await pool.query("SELECT * FROM posts ORDER BY created_at DESC");
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST: Tambah artikel baru + Upload ke Local Server
export async function POST(request) {
    try {
        const data = await request.formData();
        const file = data.get('imageFile');
        const title = data.get('title');
        const category = data.get('category');
        const author = data.get('author');
        const content = data.get('content');
        const youtubeUrl = data.get('youtubeUrl'); // Helper youtube ada di utils/mediaHelpers.js

        let imageUrl = '';

        if (file && file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());

            // Simpan di folder public/uploads agar bisa diakses browser
            const uploadDir = path.join(process.cwd(), 'public/uploads');

            // Buat folder jika belum ada
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            // Nama file unik: timestamp-namafile
            // Replace spasi dengan dash untuk keamanan URL
            const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
            const filePath = path.join(uploadDir, filename);

            // Tulis file ke disk server
            await writeFile(filePath, buffer);

            // URL yang disimpan di database (relative path)
            imageUrl = `/uploads/${filename}`;
        } else {
            imageUrl = 'https://via.placeholder.com/600x400';
        }

        const [result] = await pool.query(
            "INSERT INTO posts (title, category, author, content, image, youtubeUrl) VALUES (?, ?, ?, ?, ?, ?)",
            [title, category, author, content, imageUrl, youtubeUrl]
        );

        return NextResponse.json({ message: "Sukses", id: result.insertId });

    } catch (error) {
        console.error("Upload Error:", error);
        return NextResponse.json({ error: "Gagal menyimpan data: " + error.message }, { status: 500 });
    }
}