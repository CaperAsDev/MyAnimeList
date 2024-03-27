import { DataTypes } from 'sequelize'
import sequelize from '../utils/connection.js'

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  biografy: {
    type: DataTypes.STRING,
    allowNull: true // Puedes usar STRING para almacenar la URL de la imagen
  },
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  }
})

User.prototype.toJSON = function () {
  const values = { ...this.get() }
  delete values.password
  return values
}
export default User
