module.exports = (sequelize, DataTypes) => {
    const UnitGallery = sequelize.define(
        "UnitGallery",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            unit_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            img_url: {
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
            tableName: "unit_gallery",
            timestamps: true, // Enables createdAt and updatedAt automatically
            paranoid: true, // Enables soft delete with deletedAt
            underscored: true, // Converts camelCase to snake_case column names (e.g., created_at)
        }
    );

    UnitGallery.associate = (models) => {
        UnitGallery.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        UnitGallery.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        UnitGallery.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
        UnitGallery.belongsTo(models.MasterUnitDetails, {
            foreignKey: "unit_id",
        });
    };

    return UnitGallery;
};
