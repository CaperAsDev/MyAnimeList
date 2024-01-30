import sequelize from './utils/connection.js'
import { createApp } from './app.js'
import './models/index.js'

const main = async () => {
  try {
    await sequelize.sync({ alter: true })
    console.log('DB connected')
    createApp()
  } catch (error) {
    console.log(error)
  }
}

main()
