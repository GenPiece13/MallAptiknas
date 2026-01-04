import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await pool.query("DELETE FROM users WHERE id = ?", [id]);
        return NextResponse.json({ message: "User dihapus permanen" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}