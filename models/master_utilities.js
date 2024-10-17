module.exports = (sequelize, DataTypes) => {
    const MasterUtilities = sequelize.define('MasterUtilities', {
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
    }, {
      tableName: 'master_utilities',
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  
    MasterUtilities.associate = (models) => {
      MasterUtilities.belongsTo(models.MasterUserDetails, { foreignKey: 'created_by' });
      MasterUtilities.belongsTo(models.MasterUserDetails, { foreignKey: 'updated_by' });
      MasterUtilities.belongsTo(models.MasterUserDetails, { foreignKey: 'deleted_by' });
    };
  
    return MasterUtilities;
  };
  