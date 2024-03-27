import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const UserAnime = sequelize.define('userAnime', {
  animeId: {
    type: DataTypes.UUID,
    primaryKey: true,
    references: {
      model: 'Animes',
      key: 'id'
    }
  },
  userId: {
    type: DataTypes.UUID,
    primaryKey: true,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  score: {
    type: DataTypes.DECIMAL(2, 1)
  },
  favorite: {
    type: DataTypes.BOOLEAN
  },
  status: {
    type: DataTypes.ENUM('viendo', 'visto', 'por ver')
  }
})

export default UserAnime
