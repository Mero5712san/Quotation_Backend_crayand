module.exports = (sequelize, DataTypes) => {
    const Quotations = sequelize.define(
        "Quotations",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
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
            tableName: "qoutations",
            timestamps: true, // Enables createdAt and updatedAt automatically
            paranoid: true, // Enables soft delete with deletedAt
            underscored: true, // Converts camelCase to snake_case column names (e.g., created_at)
        }
    );

    Quotations.associate = (models) => {
        Quotations.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        Quotations.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        Quotations.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
    };

    return Quotations;
};
