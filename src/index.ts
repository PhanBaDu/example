import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { APP_ORIGIN, NODE_ENV, PORT } from './constants/env'

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: [APP_ORIGIN],
    credentials: true
  })
)
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('dev'))
app.use(cookieParser())

// Routes

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${NODE_ENV} environment`)
})
