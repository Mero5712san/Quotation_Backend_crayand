module.exports = (sequelize, DataTypes) => {
    const MasterUnitDetails = sequelize.define(
        "MasterUnitDetails",
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
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            price: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            area: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            bed_rooms: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            baths: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            bhk_count: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            image_url: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            address: {
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
            tableName: "master_unit_details",
            timestamps: true, // Enables createdAt and updatedAt automatically
            paranoid: true, // Enables soft delete with deletedAt
            underscored: true, // Converts camelCase to snake_case column names (e.g., created_at)
        }
    );

    MasterUnitDetails.associate = (models) => {
        MasterUnitDetails.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        MasterUnitDetails.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        MasterUnitDetails.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
        MasterUnitDetails.hasMany(models.UnitGallery, {
            foreignKey: "unit_id",
        });
    };

    return MasterUnitDetails;
};
