import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
        const { username, password } = await request.json();

        if (!username || !password) {
            return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
        }

        // 1. Cek apakah username sudah ada
        const [existing] = await pool.query("SELECT id FROM users WHERE username = ?", [username]);
        if (existing.length > 0) {
            return NextResponse.json({ error: "Username sudah digunakan" }, { status: 400 });
        }

        // 2. Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. Simpan ke DB (is_active default 0/false)
        await pool.query(
            "INSERT INTO users (username, password, is_active) VALUES (?, ?, 0)",
            [username, hashedPassword]
        );

        return NextResponse.json({ message: "Registrasi berhasil! Tunggu validasi Admin." });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }
}