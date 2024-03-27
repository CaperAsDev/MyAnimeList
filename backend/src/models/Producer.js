import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Producer = sequelize.define('producer', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

export default Producer
