'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('master_user_details', [
      {
        name: 'John Doe',
        roll: 'Admin',
        mobile: 1234567890,
        email: 'johndoe@example.com',
        qoutation_details: 1,
        profile: './images/profile_image_url_1',
        is_active: true,
        created_at: new Date(),
        created_by: 1,
      },
      {
        name: 'Jane Smith',
        roll: 'Manager',
        mobile: 9876543210,
        email: 'janesmith@example.com',
        qoutation_details: 2,
        profile: './images/profile_image_url_2',
        is_active: true,
        created_at: new Date(),
        created_by: 1,
      },
      {
        name: 'Alice Brown',
        roll: 'User',
        mobile: 4567891230,
        email: 'alicebrown@example.com',
        qoutation_details: 3,
        profile: './images/profile_image_url_3',
        is_active: true,
        created_at: new Date(),
        created_by: 1,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('master_user_details', null, {});
  }
};
