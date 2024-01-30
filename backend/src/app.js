import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './routes/index.js'
import errorHandler from './utils/errorHandler.js'
import { fileURLToPath } from 'url'
import { dirname, join } from 'node:path'

import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Esta es nuestra aplicación

export const createApp = () => {
  const app = express()
  const port = process.env.PORT ?? 1234

  // Middlewares
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(
    helmet({
      crossOriginResourcePolicy: false
    })
  )
  app.use(cors())

  app.use(express.static(join(__dirname, 'public')))

  app.use('/api/v1', router)

  app.get('/', (req, res) => {
    return res.send('Welcome to express!')
  })

  app.use(errorHandler)
  app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
  })
}
