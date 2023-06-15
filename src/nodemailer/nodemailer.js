"use strict";
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

async function main() {
    const secretKey= "5M#ñPqTw$yE!@ñad6"
    const verificationToken = jwt.sign({ userId: user.id }, secretKey);
    const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;


   testAccount = await nodemailer.createTestAccount();

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "labodegadelreo.122@gmail.com",
      pass: "jgfdwgttbsagfqex",
    },
  });

  transporter.verify().then(()=>{
    console.log("Ready fpr send emails")
  })




  let info = await transporter.sendMail({
    from: '"¡Bienvenido a Super Reo Y+!" <labodegadelreo.122@gmail.com>',
    to: user.username,
    subject: "¡Bienvenido a Super Reo Y+!",
    html: `<b>Nos complace recibirte en nuestra página. Esperamos que encuentres todo lo que necesitas y disfrutes de una experiencia excepcional. Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos. ¡Estamos aquí para asistirte!

    Explora nuestro catálogo de productos, descubre las últimas novedades y aprovecha nuestras increíbles ofertas. Queremos asegurarnos de que obtengas todo lo que necesitas para llevar a cabo tus proyectos de manera exitosa.
    
    Gracias por elegir Super Reo y+. ¡Esperamos que tu visita sea satisfactoria y que regreses pronto!<b/>
    `,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);


module.export = {transporter}