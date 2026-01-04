import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { v2 as cloudinary } from 'cloudinary';

// Konfigurasi Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET: Ambil semua artikel
export async function GET() {
    try {
        const [rows] = await pool.query("SELECT * FROM posts ORDER BY created_at DESC");
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST: Tambah artikel baru + Upload ke Cloudinary
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

        if (file && file.size > 0) {
            // 1. Ubah file menjadi format Buffer
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            // 2. Ubah Buffer menjadi Base64 agar bisa diupload langsung
            const fileBase64 = buffer.toString('base64');
            const fileUri = `data:${file.type};base64,${fileBase64}`;

            // 3. Upload ke Cloudinary
            const cloudResult = await cloudinary.uploader.upload(fileUri, {
                folder: 'aptiknas_uploads', // Nama folder di Cloudinary
                resource_type: 'auto',
            });

            // 4. Ambil URL aman (HTTPS) dari hasil upload
            imageUrl = cloudResult.secure_url;
        } else {
            // Gambar default jika user tidak upload
            imageUrl = 'https://via.placeholder.com/600x400';
        }

        // Simpan data ke MySQL (URL gambar mengarah ke Cloudinary)
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