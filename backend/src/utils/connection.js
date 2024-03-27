import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://postgres:root@127.0.0.1:5432/animedb', { host: 'localhost', dialect: 'postgres', logging: false })

export default sequelize
