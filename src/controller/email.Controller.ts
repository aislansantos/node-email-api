import { Request, Response } from "express";
import nodemailer from "nodemailer"; // Biblioteca para envio de email


export const ping = (req: Request, res: Response) => {
    res.json({ pong: true })
}

export const contato = async (req: Request, res: Response) => {
    // Passo 1 -> Configurar o transporter -estamos usano o transporter do https://mailtrap.io/
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "bbe2d1c0fe6697",
            pass: "696103d8603d36"
        }
    });

    // Passo 2 -> Configurar a mensagem a ser enviada
    let message = {
        from: "não-responda@gmail.com",
        to: "aislan.santos@gmail.com",
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email,
    };

    // Passo 3 -> Enviar a mensagem
    let info = await transport.sendMail(message);

    console.log("INFO", info);

    res.json({ success: true })

}