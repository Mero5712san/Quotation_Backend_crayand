'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quoted_unit_addons', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quoted_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_qoutation_details',
          key: 'id'
        },
      },
      amenities_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_amenitites',
          key: 'id'
        },
      },
      utility_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_utilities',
          key: 'id'
        },
      },
      discount_type: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_user_details',
          key: 'id'
        },
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'master_user_details',
          key: 'id'
        },
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'master_user_details',
          key: 'id'
        },
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('quoted_unit_addons');
  }
};
