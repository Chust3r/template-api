import express from 'express'

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

export const middleware = (req, res, next) => {
	console.log(['Default middleware'])
	next()
}
