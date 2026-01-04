import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    try {
        // Query: Ambil semua kolom, urutkan dari yang terbaru, batasi cuma 3 baris
        const query = "SELECT * FROM posts ORDER BY created_at DESC LIMIT 3";

        const [rows] = await pool.query(query);

        return NextResponse.json(rows);
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}