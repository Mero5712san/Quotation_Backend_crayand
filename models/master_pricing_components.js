module.exports = (sequelize, DataTypes) => {
    const MasterPricingComponents = sequelize.define(
        "MasterPricingComponents",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            component_name: {
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
                allowNull: true, // Can be null initially
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
            tableName: "master_pricing_components",
            timestamps: true, // Enables createdAt and updatedAt automatically
            paranoid: true, // Enables soft delete with deletedAt
            underscored: true, // Converts camelCase to snake_case column names (e.g., created_at)
        }
    );

    MasterPricingComponents.associate = (models) => {
        MasterPricingComponents.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        MasterPricingComponents.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        MasterPricingComponents.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
    };

    return MasterPricingComponents;
};
