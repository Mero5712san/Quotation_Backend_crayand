'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('master_revenue_types', [
      {
        id: 1,
        revenue_type: 'Sales',
        is_active:true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 2,
        revenue_type: 'Manage',
        is_active:true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 3,
        revenue_type: 'Stay',
        is_active:true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 4,
        revenue_type: 'Lease',
        is_active:true,
        created_by: 1,
        created_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_revenue_types', null, {});
  }
};
