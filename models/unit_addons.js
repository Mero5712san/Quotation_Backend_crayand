module.exports = (sequelize, DataTypes) => {
    const UnitAddons = sequelize.define(
        "UnitAddons",
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
            amenities_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            utilities_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
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
            tableName: "unit_addons",
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

    UnitAddons.associate = (models) => {
        UnitAddons.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        UnitAddons.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        UnitAddons.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
        UnitAddons.belongsTo(models.MasterUnitDetails, {
            foreignKey: "unit_id",
        });
        UnitAddons.belongsTo(models.MasterAmenitites, {
            foreignKey: "amenities_id",
        });
        UnitAddons.belongsTo(models.MasterUtilities, {
            foreignKey: "utilities_id",
        });
    };

    return UnitAddons;
};
