import { config } from 'dotenv'
import express from 'express'
import { loadMiddlewares } from '../middlewares/index.js'
import { loadRoutes } from '../routes/index.js'
import cors from 'cors'
import morgan from 'morgan'

config()

export class Server {
	app = express()
	port = 5000

	constructor() {
		this.middlewares()
		this.routes()
	}

	middlewares() {
		this.app.use([express.json(), cors(), morgan('dev')])
		loadMiddlewares(this.app)
	}

	routes() {
		loadRoutes(this.app)
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server run in http://localhost:${this.port}`)
		})
	}
}
