const { Router } = require('express');
const {getAllUsers, getUser, getDB, getUserDb} = require("../controllers/user/getUser.js")
const createUser = require("../controllers/user/createUser")
const {deleteUser, activateUser, updateUser, giveAdmin, removeAdmin, addOrder} = require('../controllers/user/updateUser.js');
const Users = require( "../models/user.js")

const userRoutes = Router();

userRoutes.get("/", async (req, res) =>{
    const {email}= req.query;
    try {
       if(email){
          return res.status(201).send(await getUser(email))
        }
        return res.status(201).send(await getAllUsers())
    } catch (error) {
        res.status(404).send(error.message)
    }
})

 userRoutes.get("/db", async(req, res)=>{
    try {
       
            return res.status(201).send(await getDB());
        
     } catch (error) {
         res.status(404).send(error.message)
     }
 });

 userRoutes.get("/db/:email", async(req, res)=>{
    const {email}= req.params
    try {
        return res.status(200).send(await getUserDb(email))
    } catch (error) {
        res.status(404).send({error})
    }
})

userRoutes.get("/email/:email", async(req, res)=>{
     const {email}= req.params
     try {
         return res.status(200).send(await getUser(email))
     } catch (error) {
         res.status(404).send(error.message)
     }
 })

 userRoutes.post('/createuser', async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        throw new Error('El campo "email" es requerido.');
      }
  
      const user = await createUser(email);
      res.status(201).send(user);
    } catch (error) {
      console.log(error.message);
      res.status(400).send(error.message);
    }
  });
 userRoutes.put("/:id", async(req, res)=>{
     const {id}= req.params
     try{
         return res.status(200).send(await deleteUser(id))
     } catch (error){
         res.status(400).send(error)
     }
 })

 userRoutes.put("/activate/:id", async(req, res)=>{
     const {id}= req.params
     try{
         return res.status(200).send(await activateUser(id))
     } catch (error){
         res.status(400).send(error)
     }
 })

 userRoutes.put("/update/:id", async(req, res)=>{
     try {
         const {id} = req.params;
         const data = req.body;;
         await updateUser(id, data)
         res.status(200).send("Actualización exitosa")
     } catch (error) {
         res.status(404).send({error})
     }
 })

 userRoutes.put("/giveAdmin/:id", async(req, res)=>{
    const {id}= req.params
    try{
        return res.status(200).send(await giveAdmin(id))
    } catch (error) {
        res.status(400).send(error)
    }
 })

 userRoutes.put("/removeAdmin/:id", async(req, res)=>{
    const {id}= req.params
    try{
        return res.status(200).send(await removeAdmin(id))
    } catch (error) {
        res.status(400).send(error)
    }
 })

 userRoutes.put("/orders/:id", async(req, res)=>{
    const {id}= req.params
    const order= req.body
    try {
        return  res.status(200).send(await addOrder(id, order))
    } catch (error) {
        
    }
 })



module.exports= userRoutes;