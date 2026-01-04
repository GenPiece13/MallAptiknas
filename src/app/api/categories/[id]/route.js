import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// DELETE: Hapus Kategori
export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await pool.query("DELETE FROM categories WHERE id = ?", [id]);
        return NextResponse.json({ message: "Kategori dihapus" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}