import express from 'express'
import { middleware } from './default.js'

const middlewares = [{ path: '*', middlewares: [middleware] }]

/**
 *
 * @param {express.Express} server
 */

export const loadMiddlewares = (server) => {
	middlewares.map(({ middlewares, path }) =>
		middlewares.map((el) => server.use(path, el))
	)
}
