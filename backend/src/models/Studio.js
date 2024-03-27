import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Studio = sequelize.define('studio', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

export default Studio
