import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET: Ambil semua user (kecuali diri sendiri/admin utama jika perlu)
export async function GET() {
    try {
        // Ambil id, username, is_active, created_at (jangan password)
        const [rows] = await pool.query("SELECT id, username, is_active, created_at FROM users ORDER BY created_at DESC");
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// PUT: Update Status (Approve/Reject)
export async function PUT(request) {
    try {
        const { id, is_active } = await request.json();
        await pool.query("UPDATE users SET is_active = ? WHERE id = ?", [is_active, id]);
        return NextResponse.json({ message: "Status user diperbarui" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}