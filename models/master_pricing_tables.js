module.exports = (sequelize, DataTypes) => {
    const MasterPricingTables = sequelize.define(
        "MasterPricingTables",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            pricing_on: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            created_by: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            updated_by: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            deleted_by: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            deleted_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            tableName: "master_pricing_tables",
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

    MasterPricingTables.associate = (models) => {
        MasterPricingTables.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        MasterPricingTables.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        MasterPricingTables.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
    };

    return MasterPricingTables;
};
