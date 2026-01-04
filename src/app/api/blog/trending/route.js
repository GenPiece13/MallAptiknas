import { NextResponse } from 'next/server';
import pool from '@/lib/db'; // Pastikan path import ini sesuai konfigurasi db.js Anda

export async function GET() {
    try {
        // 1. Coba ambil 3 artikel dari 7 hari terakhir (Minggu Ini)
        let query = `
            SELECT id, title, category 
            FROM posts 
            WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
            ORDER BY created_at DESC 
            LIMIT 3
        `;

        let [rows] = await pool.query(query);

        // 2. FALLBACK: Jika hasil kosong (tidak ada post minggu ini), 
        // ambil 3 post terbaru secara umum agar sidebar tidak kosong.
        if (rows.length === 0) {
            const fallbackQuery = `SELECT id, title, category FROM posts ORDER BY created_at DESC LIMIT 3`;
            [rows] = await pool.query(fallbackQuery);
        }

        return NextResponse.json(rows);
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}