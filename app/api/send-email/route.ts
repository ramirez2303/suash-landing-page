import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { message: "Todos los campos son obligatorios" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.GMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: `Nuevo mensaje de ${name}`,
            text: `
                Nombre: ${name}
                Correo: ${email}
                Teléfono: ${phone}
                Mensaje: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email enviado con éxito" },
            { status: 200 }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: "Error al enviar email", error: error.message },
                { status: 500 }
            );
        } else {
            return NextResponse.json(
                { message: "Error desconocido al enviar email" },
                { status: 500 }
            );
        }
    }
}
