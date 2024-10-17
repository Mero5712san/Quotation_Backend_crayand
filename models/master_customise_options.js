module.exports = (sequelize, DataTypes) => {
    const MasterCustomiseOptions = sequelize.define(
        "MasterCustomiseOptions",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            option: {
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
            tableName: "master_customise_options",
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

    MasterCustomiseOptions.associate = (models) => {
        MasterCustomiseOptions.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        MasterCustomiseOptions.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        MasterCustomiseOptions.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
    };

    return MasterCustomiseOptions;
};
