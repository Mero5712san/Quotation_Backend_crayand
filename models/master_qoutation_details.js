module.exports = (sequelize, DataTypes) => {
    const MasterQoutationDetails = sequelize.define(
        "MasterQoutationDetails",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            lease_start_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            lease_end_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            rent_start_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            grace_period: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
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
            tableName: "master_qoutation_details",
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

    MasterQoutationDetails.associate = (models) => {
        MasterQoutationDetails.belongsTo(models.MasterUserDetails, {
            foreignKey: "created_by",
        });
        MasterQoutationDetails.belongsTo(models.MasterUserDetails, {
            foreignKey: "updated_by",
        });
        MasterQoutationDetails.belongsTo(models.MasterUserDetails, {
            foreignKey: "deleted_by",
        });
    };

    return MasterQoutationDetails;
};
