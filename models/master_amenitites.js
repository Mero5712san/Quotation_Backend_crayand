module.exports = (sequelize, DataTypes) => {
    const MasterAmenitites = sequelize.define(
        "MasterAmenitites",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            valid_from: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            valid_to: {
                type: DataTypes.DATE,
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
            tableName: "master_amenitites",
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

    MasterAmenitites.associate = (models) => {
        MasterAmenitites.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        MasterAmenitites.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        MasterAmenitites.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
    };

    return MasterAmenitites;
};
