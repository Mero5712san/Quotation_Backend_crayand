'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('unit_gallery', [
      {
        unit_id: 1, // Replace with actual unit_id
        img_url: 'https://example.com/image1.jpg',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        unit_id: 1, // Replace with actual unit_id
        img_url: 'https://example.com/image2.jpg',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        unit_id: 2, // Replace with actual unit_id
        img_url: 'https://example.com/image3.jpg',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('unit_gallery', null, {});
  },
};
