'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        Id:"a",
        FirstName:"zahid",
        LastName:"berber",
        Email:"mzahidberber@gmail.com",
        EmailConfirmed:true,
        PasswordHash:"asd",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{returning:true})

    await queryInterface.bulkInsert('Draws', [
      {
        Id:1,
        Name:"test",
        NumberOfLayerElements:0,
        UserId:"a",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{returning:true})


    await queryInterface.bulkInsert('PenStyles', [
      {
        Id:1,
        Name:"solid",
        createdAt: new Date(),
        updatedAt: new Date()
        
      }
    ],{returning:true})

    await queryInterface.bulkInsert('Pens', [
      {
        Id:1,
        Name:"p1",
        Red:150,
        Blue:150,
        Green:150,
        PenStyleId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{returning:true})

    await queryInterface.bulkInsert('Layers', [
      {
        Id:1,
        Name:"l1",
        Lock:true,
        Visibility:true,
        Thickness:1,
        DrawId:1,
        PenId:1,
        NumberOfElements:0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{returning:true})

    await queryInterface.bulkInsert('ElementTypes', [
      {
        Id:1,
        Name:"line",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{returning:true})

    await queryInterface.bulkInsert('Elements', [
      {
        Id:1,
        LayerId:1,
        PenId:1,
        ElementTypeId:1,
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

