import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET: Ambil semua kategori
export async function GET() {
    try {
        const [rows] = await pool.query("SELECT * FROM categories ORDER BY id ASC");
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST: Tambah kategori baru
export async function POST(request) {
    try {
        const { name, color } = await request.json();

        if (!name) return NextResponse.json({ error: "Nama wajib diisi" }, { status: 400 });

        const [result] = await pool.query(
            "INSERT INTO categories (name, color) VALUES (?, ?)",
            [name, color || 'blue']
        );

        return NextResponse.json({ message: "Sukses", id: result.insertId });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}