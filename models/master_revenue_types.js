module.exports = (sequelize, DataTypes) => {
    const MasterRevenueTypes = sequelize.define('MasterRevenueTypes', {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      revenue_type: {
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
    }, {
      tableName: 'master_revenue_types',
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  
    MasterRevenueTypes.associate = (models) => {
      MasterRevenueTypes.belongsTo(models.MasterUserDetails, { foreignKey: 'created_by' });
      MasterRevenueTypes.belongsTo(models.MasterUserDetails, { foreignKey: 'updated_by' });
      MasterRevenueTypes.belongsTo(models.MasterUserDetails, { foreignKey: 'deleted_by' });
    };
  
    return MasterRevenueTypes;
  };
  