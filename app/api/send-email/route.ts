import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL,
        subject: `Nuevo mensaje de ${name}`,
        text: `mail:${email} phone:${phone} message:${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { message: "Email enviado con éxito" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error al enviar el email", error);
        return NextResponse.json(
            { message: "Error al enviar el email" },
            { status: 500 }
        );
    }
}
