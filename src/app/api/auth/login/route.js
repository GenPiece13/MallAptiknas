import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

export async function POST(request) {
    try {
        const { username, password } = await request.json();

        // 1. Cek User di DB
        const [rows] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);

        if (rows.length === 0) {
            return NextResponse.json({ error: "Username tidak ditemukan" }, { status: 401 });
        }

        const user = rows[0];

        if (user.is_active === 0) {
            return NextResponse.json({
                error: "Akun Anda belum diaktifkan oleh Admin."
            }, { status: 403 });
        }

        // 2. Cek Password (Hash vs Plain)
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json({ error: "Password salah!" }, { status: 401 });
        }

        // 3. Buat Token JWT (Tiket Masuk)
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "rahasia_default");
        const token = await new SignJWT({ id: user.id, username: user.username })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("24h") // Tiket berlaku 24 jam
            .sign(secret);

        // 4. Set Cookie
        const response = NextResponse.json({ message: "Login Berhasil" });

        response.cookies.set("admin_token", token, {
            httpOnly: true, // Tidak bisa diakses JS (Anti XSS)
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24, // 1 Hari
        });

        return response;

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
    }
}