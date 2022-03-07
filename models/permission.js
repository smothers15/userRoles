'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.belongsToMany(models.Permission, {
        though: models.RolePermission,
        as: 'permissions',
        foreignKey: 'role_id',
        otherKey: 'permission_id'
      })
    }
  };
  Permission.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permission',
    tableName: 'roles_permissions',
    timestamps: false
  });
  return Permission;
};