import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Like = sequelize.define('like', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

export default Like
