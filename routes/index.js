import { routerPost } from './post.js'
import { routerUser } from './user.js'

export const routes = [
	{
		path: '/posts',
		router: routerPost,
	},
	{
		path: '/users',
		router: routerUser,
	},
]

/**
 *
 * @param {import("express").Express} server
 */

export const loadRoutes = (server) => {
	routes.map((route) => server.use(route.path, route.router))
}
