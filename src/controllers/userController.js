const User = require('../models/user');

function saveUserToMongoDB(userInfo) {

  const newUser = new User({
    name: userInfo.name,
    email: userInfo.email,

  });

  newUser.save()
    .then(() => {
      console.log('Usuario guardado en MongoDB');
    })
    .catch((error) => {
      console.error('Error al guardar el usuario en MongoDB:', error);
    });
}

module.exports= saveUserToMongoDB
