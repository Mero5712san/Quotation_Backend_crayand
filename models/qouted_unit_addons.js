module.exports = (sequelize, DataTypes) => {
    const QuotedUnitAddons = sequelize.define(
        "QuotedUnitAddons",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            quoted_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            amenities_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            utility_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            discount_type: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            discount: {
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
            tableName: "qouted_unit_addons",
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

    QuotedUnitAddons.associate = (models) => {
        QuotedUnitAddons.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        QuotedUnitAddons.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        QuotedUnitAddons.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
        QuotedUnitAddons.belongsTo(models.MasterQoutationDetails, {
            foreignKey: "quoted_id",
        });
        QuotedUnitAddons.belongsTo(models.MasterAmenitites, {
            foreignKey: "amenities_id",
        });
        QuotedUnitAddons.belongsTo(models.MasterUtilities, {
            foreignKey: "utility_id",
        });
    };

    return QuotedUnitAddons;
};
