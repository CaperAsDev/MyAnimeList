import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Rol = sequelize.define('rol', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default Rol
