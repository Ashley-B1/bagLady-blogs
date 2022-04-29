"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: 'astrology',
        },
        {
          name: 'family',
        },
        {
          name: 'mental health',
        },
        {
          name: 'lifestyle',
        },
        {
          name: 'spirituality',
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
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
