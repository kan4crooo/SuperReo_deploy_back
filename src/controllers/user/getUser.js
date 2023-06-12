const {ManagementClient} = require ('auth0')
const User = require('../../models/user.js')


const auth00 = new ManagementClient({
    domain: 'dev-xqbvwea07u6wndzy.us.auth0.com',
    clientId: 'hJfe8uyZbh8ItdhXmuqgWPIYi4wkUBJW',
    clientSecret: 'iiCxVF0vx5c1Wf7-0vkkHEqrkZQmqTCrzNy2K5n6GgLEoJpFoQfKsAbQfnHrj5kg',
    scope: 'read:users'
  });
  
  // Get all users
 const getAllUsers = async ()=>{
    try {
      return await auth00.users.getAll();
    } catch (error) {
      throw new Error(error.message)
    }
    
 }

 const getUser = async (useremail) => {
  try {
    return await auth00.users.getByEmail(useremail);
  } catch (error) {
    throw new Error(error.message)
  }
  
 }

 const getDB = async () => {
  try {
    return await User.find()
  } catch (error) {
    throw new Error(error)
  }
 }

 const getUserDb = async (email) => {
  try {
    return await User.findOne({email: email})
  } catch (error) {
    throw new Error(error)
  }
 }



module.exports= {getAllUsers, getUser, getDB, getUserDb}