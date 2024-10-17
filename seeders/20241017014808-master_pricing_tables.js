'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('master_pricing_tables', [
      {
        pricing_on: 'Primary',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_on: 'Secondary',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_on: 'One Time Charges',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_on: 'Refundables',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_on: 'Inventory Item',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_on: 'Parking Slot',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_pricing_tables', null, {});
  },
};
