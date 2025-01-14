const axios = require("axios");
const User= require("../../models/user");
const {getUser}=require("./getUser.js")


const deleteUser = async (id) =>{
        const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isActive = false
        return await userxd.save().catch(e => console.log(e))
}

const activateUser = async(id)=>{
    const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isActive = true
        return await userxd.save().catch(e => console.log(e))
}

const updateUser = async(id, data) => {
    try {
        const user = await User.findOne({ _id: id });
        if(!user) throw 'No se ha encontrado un componente con ese ID';
        if(data.name) user.name = data.name;
        if(data.surname) user.surname = data.surname;
        if(data.isActive) user.isActive = data.isActive;
        if(data.email) user.email = data.email;
        if(data.orders) user.orders = [...user.orders,data.orders];
        user.updated_at = Date.now()
        await user.save()

    } catch (error) {
        throw new Error("Hubo un problema al actualizar usuario")
    }
  
}

const giveAdmin = async(id) =>{
    const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isAdmin = true
        return await userxd.save().catch(e => console.log(e))
}

const removeAdmin = async(id) =>{
    const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isAdmin = false
        return await userxd.save().catch(e => console.log(e))
}

const addOrder = async(id, order) =>{
    const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.orders.push(order)
        return await userxd.save().catch(e => console.log(e))
}


module.exports= {deleteUser, activateUser, updateUser, giveAdmin, removeAdmin, addOrder}