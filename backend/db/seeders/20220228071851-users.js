"use strict";
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: 'baglady',
          hashedPassword: 'simplepassword1.',
          email: 'skye@baglady.io',
          profilePic: 'https://media.istockphoto.com/vectors/hand-drawn-vector-abstract-flat-graphic-illustration-with-ethnic-vector-id1326085212?k=20&m=1326085212&s=612x612&w=0&h=sKT5jxTA9IouHDmvS_REAtOqodqmaAf5F6Jh5KiVFIM='
        },
        {
          username: 'baduist97',
          hashedPassword: bcrypt.hashSync('password1'),
          email: 'ebadu@gmail.com',
          profilePic: 'https://images.fanart.tv/fanart/erykah-badu-4f53eebd9117f.jpg'
        },
        {
          username: 'skyenolimit',
          hashedPassword: bcrypt.hashSync('simple3'),
          email: 'skyehigh@skyenet.org',
          profilePic: 'https://64.media.tumblr.com/48926b3c6905459a42673e9c7456a512/12cc990143679760-18/s540x810/2cfeec9a028c3bf595e4beb69ed86511817bfb75.png'
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  },
};
