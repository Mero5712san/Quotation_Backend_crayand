'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('master_customise_options', [
      {
        option: 'Add Pricing Component',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        option: 'Add Amenities',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        option: 'Add Utilities',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        option: 'Add Discount',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        option: 'Remove Component',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_customise_options', null, {});
  },
};
