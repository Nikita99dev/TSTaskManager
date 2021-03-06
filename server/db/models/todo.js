'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  todo.init({
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};
