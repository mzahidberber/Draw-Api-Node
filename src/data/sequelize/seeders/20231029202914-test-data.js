'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    

    await queryInterface.bulkInsert('Draws', [
      {
        id:'abc12345-e937-495e-9053-4d5929566b25',
        Name:"test",
        NumberOfLayerElements:0,
        UserId:"fdb11409-e937-495e-9053-4d5929566b25",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{returning:true})


    await queryInterface.bulkInsert('PenStyles', [
      {
        id:'solid',
        Name:"solid",
        createdAt: new Date(),
        updatedAt: new Date()
        
      }
    ],{returning:true})

    await queryInterface.bulkInsert('Pens', [
      {
        id:'abc12345-e937-495e-9053-4d5929566b25',
        Name:"p1",
        UserId:"fdb11409-e937-495e-9053-4d5929566b25",
        Red:150,
        Blue:150,
        Green:150,
        PenStyleId:'abc12345-e937-495e-9053-4d5929566b25',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{returning:true})

    await queryInterface.bulkInsert('Layers', [
      {
        id:'abc12345-e937-495e-9053-4d5929566b25',
        Name:"l1",
        Lock:true,
        Visibility:true,
        Thickness:1,
        DrawId:'abc12345-e937-495e-9053-4d5929566b25',
        PenId:'abc12345-e937-495e-9053-4d5929566b25',
        NumberOfElements:0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{returning:true})

    await queryInterface.bulkInsert('ElementTypes', [
      {
        id:'line',
        Name:"line",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{returning:true})

    await queryInterface.bulkInsert('Elements', [
      {
        id:'abc12345-e937-495e-9053-4d5929566b25',
        LayerId:'abc12345-e937-495e-9053-4d5929566b25',
        PenId:'abc12345-e937-495e-9053-4d5929566b25',
        ElementTypeId:'abc12345-e937-495e-9053-4d5929566b25',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{returning:true})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
    await queryInterface.bulkDelete('Draws', null, {})
    await queryInterface.bulkDelete('PenStyles', null, {})
    await queryInterface.bulkDelete('Pens', null, {})
    await queryInterface.bulkDelete('Layers', null, {})
    await queryInterface.bulkDelete('ElementTypes', null, {})
    await queryInterface.bulkDelete('Elements', null, {})
  }
};

