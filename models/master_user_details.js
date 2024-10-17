module.exports = (sequelize, DataTypes) => {
    const MasterUserDetails = sequelize.define(
        "MasterUserDetails",
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
            roll: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            mobile: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            qoutation_details: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            profile: {
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
            tableName: "master_user_details",
            timestamps: true, // Enables createdAt and updatedAt automatically
            paranoid: true, // Enables soft delete with deletedAt
            underscored: true, // Converts camelCase to snake_case column names (e.g., created_at)
        }
    );

    return MasterUserDetails;
};
