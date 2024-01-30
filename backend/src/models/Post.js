import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Post = sequelize.define('post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default Post
