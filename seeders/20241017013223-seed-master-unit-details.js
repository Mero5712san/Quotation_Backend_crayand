'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('master_unit_details', [
      {
        unit_id: 1234,
        name: 'Jumeirah Estate',
        location: 'Rubix Apartment, K Tower, Floor 1',
        price: 1500000,
        area: 2000,
        bed_rooms: 2,
        baths: 2,
        bhk_count: 2,
        image_url: './images/image1.jpg',
        address: 'Jumeirah, Dubai',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        unit_id: 1235,
        name: 'Palm Heights',
        location: 'Ocean Tower, Floor 2',
        price: 1800000,
        area: 2500,
        bed_rooms: 3,
        baths: 3,
        bhk_count: 3,
        image_url: './images/image2.jpg',
        address: 'Palm Jumeirah, Dubai',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        unit_id: 1236,
        name: 'Skyline Villas',
        location: 'Cloud Nine Tower, Floor 5',
        price: 2000000,
        area: 3000,
        bed_rooms: 4,
        baths: 3,
        bhk_count: 4,
        image_url: './images/image3.jpg',
        address: 'Dubai Marina, Dubai',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        unit_id: 1237,
        name: 'Burj Heights',
        location: 'Burj Khalifa Tower, Floor 50',
        price: 3500000,
        area: 5000,
        bed_rooms: 5,
        baths: 5,
        bhk_count: 5,
        image_url: './images/image4.jpg',
        address: 'Downtown Dubai',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        unit_id: 1238,
        name: 'Desert Villas',
        location: 'Arabian Ranches, Floor 2',
        price: 1200000,
        area: 1800,
        bed_rooms: 3,
        baths: 2,
        bhk_count: 3,
        image_url: './images/image5.jpg',
        address: 'Arabian Ranches, Dubai',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_unit_details', null, {});
  }
};
