import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { v2 as cloudinary } from 'cloudinary';

// 1. Konfigurasi Cloudinary (WAJIB ADA DI SINI JUGA)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 2. GET: Ambil Detail Artikel (Tidak Berubah)
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

// 3. PUT: Update Artikel (DIPERBAIKI: Pakai Cloudinary)
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

        // Logika Upload Gambar Baru ke Cloudinary
        if (file && typeof file !== 'string' && file.size > 0) {
            // Ubah file ke Base64
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const fileBase64 = buffer.toString('base64');
            const fileUri = `data:${file.type};base64,${fileBase64}`;

            // Upload ke Cloudinary
            const cloudResult = await cloudinary.uploader.upload(fileUri, {
                folder: 'aptiknas_uploads',
                resource_type: 'auto',
            });

            imageUrl = cloudResult.secure_url;
        }

        // Query Database
        if (imageUrl) {
            // Jika ada gambar baru, update kolom image
            await pool.query(
                "UPDATE posts SET title=?, category=?, author=?, content=?, image=?, youtubeUrl=? WHERE id=?",
                [title, category, author, content, imageUrl, youtubeUrl, id]
            );
        } else {
            // Jika TIDAK ada gambar baru, biarkan gambar lama
            await pool.query(
                "UPDATE posts SET title=?, category=?, author=?, content=?, youtubeUrl=? WHERE id=?",
                [title, category, author, content, youtubeUrl, id]
            );
        }

        return NextResponse.json({ message: "Update sukses" });

    } catch (error) {
        console.error("Update Error:", error);
        return NextResponse.json({ error: "Gagal update data: " + error.message }, { status: 500 });
    }
}

// 4. DELETE: Hapus artikel (Tidak Berubah)
export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await pool.query("DELETE FROM posts WHERE id = ?", [id]);
        return NextResponse.json({ message: "Artikel dihapus" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}