import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const Permiso = sequelize.define('permiso', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default Permiso
