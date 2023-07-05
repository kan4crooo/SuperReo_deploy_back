const send= require("../controllers/pagoNotifi")
const { Router }= require("express");

const pagosRoutes= Router()

const { CLIENT_ID, APP_SECRET } = process.env;
const baseURL = {
  sandbox: "https://api-m.sandbox.paypal.com",
  production: "https://api-m.paypal.com"
};

// create a new order
pagosRoutes.post("/api/orders", async (req, res) => {
  const order = await createOrder();
  try {
      res.json(order);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// capture payment & store order information or fullfill order
pagosRoutes.post("/api/orders/:orderID/capture", async (req, res) => {
  const { orderID } = req.params;
  try {
      const captureData = await capturePayment(orderID);
      res.json(captureData);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


pagosRoutes.post("/mailer", async (req, res)=>{
  try {
    const { fromMail, toMail, name}= req.body;
    res.send(await send(fromMail, toMail, name))
    console.log("correo enviado")
  } catch (error) {
    res.send({error: "Pago no autorizado"})
  }
})

  module.exports= pagosRoutes