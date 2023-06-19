const User = require('../../models/user');
const { getUser } = require('../../controllers/user/getUser.js');

const createUser = async (user) => {
  // const data = await getUser(user);

  const userData = {
    picture: user.picture,
    name: user.given_name,
    surname: user.family_name,
    email: user.email,
    // userid: user.identities.user_id,
    verified: user.email_verified
  };
  try {
    const user = await User.findOneAndUpdate(
      { email: userData.email },
      userData,
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
    throw new Error('Error al crear el usuario');
  }
};

module.exports = createUser;
