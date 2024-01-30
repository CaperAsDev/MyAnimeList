import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Genre = sequelize.define('genre', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

export default Genre
