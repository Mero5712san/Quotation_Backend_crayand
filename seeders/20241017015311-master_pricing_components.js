'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('master_pricing_components', [
      {
        component_name: 'Manage',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'Stay',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'Lease',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'Sales',
        is_active: true,
        created_by: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_pricing_components', null, {});
  },
};
