"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("master_qoutation_details", {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            lease_start_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            lease_end_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            rent_start_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            grace_period: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            is_active: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn("NOW"),
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
                    model: "master_user_details",
                    key: "id",
                },
            },
            updated_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: "master_user_details",
                    key: "id",
                },
            },
            deleted_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: "master_user_details",
                    key: "id",
                },
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("master_qoutation_details");
    },
};
