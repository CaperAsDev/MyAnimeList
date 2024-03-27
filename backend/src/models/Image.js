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
  },
  entityType: {
    type: DataTypes.ENUM('user', 'anime'),
    allowNull: false
  },
  entityId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  category: {
    type: DataTypes.ENUM('poster', 'banner', 'profile')
  }
})

export default Image
