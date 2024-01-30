import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Review = sequelize.define('review', {
  rating: {
    type: DataTypes.INTEGER, // Puedes usar un rango específico, como 1-5 estrellas
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

export default Review
