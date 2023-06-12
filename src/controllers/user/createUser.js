const User = require('../../models/user');
const { getUser } = require('../../controllers/user/getUser.js');

const createUser = async (email) => {
  const data = await getUser(email);

  const userData = {
    name: data[0].given_name + ' ' + data[0].family_name,
    nickname: data[0].nickname,
    email: data[0].email,
    userid: data[0].identities.user_id,
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
