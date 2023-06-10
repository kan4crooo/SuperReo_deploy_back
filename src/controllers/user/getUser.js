const {ManagementClient} = require ('auth0')
const User = require('../../models/user')


const auth00 = new ManagementClient({
    domain: 'dev-xqbvwea07u6wndzy.us.auth0.com',
    clientId: 'Q21TBvyiWPpDMe9QtFP0Q3DKamwC1WLw',
    clientSecret: 'W1RwyqqWiimLTp94mKCPFn02RJfmcYk_YH1Si5hyfTwU3A0NX6Eg4J3CTkdGHEjd',
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