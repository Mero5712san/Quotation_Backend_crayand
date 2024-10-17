'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('master_utilities', [
      {
        id: 1,
        name: 'Electricity',
        price: 500,
        valid_from: new Date('2023-01-01'),
        valid_to: new Date('2024-12-31'),
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 2,
        name: 'Water',
        price: 300,
        valid_from: new Date('2023-01-01'),
        valid_to: new Date('2024-12-31'),
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 3,
        name: 'Gas',
        price: 250,
        valid_from: new Date('2023-01-01'),
        valid_to: new Date('2024-12-31'),
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 4,
        name: 'Internet',
        price: 400,
        valid_from: new Date('2023-01-01'),
        valid_to: new Date('2024-12-31'),
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 5,
        name: 'Cable TV',
        price: 350,
        valid_from: new Date('2023-01-01'),
        valid_to: new Date('2024-12-31'),
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_utilities', null, {});
  }
};
