import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.js';

const user = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
  timestamps: false 
});


export default user;