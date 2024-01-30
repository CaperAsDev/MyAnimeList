import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Comment = sequelize.define('comment', {
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateComment: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW

  }
})

export default Comment
