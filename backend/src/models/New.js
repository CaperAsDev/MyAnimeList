import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const New = sequelize.define('new', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateNotice: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW

  }
})

export default New
