'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('master_amenitites', [
      {
        id: 1,
        name: 'Swimming Pool',
        price: 1000,
        valid_from: new Date('2023-01-01'),
        valid_to: new Date('2024-12-31'),
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 2,
        name: 'Gym',
        price: 750,
        valid_from: new Date('2023-01-01'),
        valid_to: new Date('2024-12-31'),
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 3,
        name: 'Parking',
        price: 500,
        valid_from: new Date('2023-01-01'),
        valid_to: new Date('2024-12-31'),
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 4,
        name: '24/7 Security',
        price: 1200,
        valid_from: new Date('2023-01-01'),
        valid_to: new Date('2024-12-31'),
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 5,
        name: 'Playground',
        price: 600,
        valid_from: new Date('2023-01-01'),
        valid_to: new Date('2024-12-31'),
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_amenitites', null, {});
  }
};
