'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  };
  Stock.init({
    name: {
      type: DataTypes.STRING,
      allowNul: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNul: false
    },
  },{
    sequelize,
    tableName: 'stock',
    modelName: 'Stock',
  });
  return Stock;
};