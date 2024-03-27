import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Anime = sequelize.define('anime', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  synopsis: {
    type: DataTypes.TEXT
  },
  trailer: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING
  },
  episodes: {
    type: DataTypes.INTEGER
  },
  airedfrom: {
    type: DataTypes.DATE
  },
  airedto: {
    type: DataTypes.DATE
  },
  type: {
    type: DataTypes.ENUM('anime'),
    allowNull: false
  },
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  season: {
    type: DataTypes.ENUM('winter', 'summer', 'spring', 'autumn')
  }
})

export default Anime
