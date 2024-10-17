module.exports = (sequelize, DataTypes) => {
    const UnitsQuotations = sequelize.define(
        "UnitsQuotations",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            quotation_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            unit_id: {
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
            tableName: "units_quotations",
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

    UnitsQuotations.associate = (models) => {
        UnitsQuotations.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        UnitsQuotations.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        UnitsQuotations.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
        UnitsQuotations.belongsTo(models.MasterUnitDetails, {
            foreignKey: "unit_id",
        });
        UnitsQuotations.belongsTo(models.Quotations, {
            foreignKey: "quotation_id",
        });
    };

    return UnitsQuotations;
};
