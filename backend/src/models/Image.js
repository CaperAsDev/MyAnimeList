import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Image = sequelize.define('image', {
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false
  }
  // animeId
})

export default Image
