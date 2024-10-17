'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('master_qoutation_details', [
      {
        id: 1,
        lease_start_date: new Date('2022-01-30'),
        lease_end_date: new Date('2023-01-30'),
        rent_start_date: new Date('2023-01-30'),
        grace_period: 90,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 2,
        lease_start_date: new Date('2021-06-15'),
        lease_end_date: new Date('2022-06-15'),
        rent_start_date: new Date('2022-06-15'),
        grace_period: 60,
        is_active: true, // Add this line
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 3,
        lease_start_date: new Date('2022-10-01'),
        lease_end_date: new Date('2023-10-01'),
        rent_start_date: new Date('2023-10-01'),
        grace_period: 45,
        is_active: true, // Add this line
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 4,
        lease_start_date: new Date('2023-03-01'),
        lease_end_date: new Date('2024-03-01'),
        rent_start_date: new Date('2024-03-01'),
        grace_period: 30,
        is_active: true, // Add this line
        created_by: 1,
        created_at: new Date(),
      },
      {
        id: 5,
        lease_start_date: new Date('2022-07-15'),
        lease_end_date: new Date('2023-07-15'),
        rent_start_date: new Date('2023-07-15'),
        grace_period: 75,
        is_active: true, // Add this line
        created_by: 1,
        created_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_qoutation_details', null, {});
  }
};
