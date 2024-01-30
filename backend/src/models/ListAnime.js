import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const ListAnime = sequelize.define('listanime', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default ListAnime
