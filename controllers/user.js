import { db } from '../lib/db.js'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

export const users = async (req, res) => {
	try {
		if (req.method === 'GET') {
			const users = await db.user.findMany()

			return res.json({
				data: users,
			})
		}

		if (req.method === 'POST') {
			const data = req.body

			const user = await db.user.create({
				data: {
					email: data.email,
					name: data.name,
				},
			})

			return res.json({ data: user })
		}

		return res.status(405).json({ message: 'Method no allowed' })
	} catch (e) {
		console.log(['Internal error'])
	}
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

export const userId = async (req, res) => {
	try {
		console.log(req.method)
		if (req.method === 'GET') {
			const params = req.params

			const users = await db.user.findFirst({
				where: {
					id: Number(params?.userId),
				},
			})

			return res.json({
				data: users,
			})
		}

		return res.status(405).json({ message: 'Method no allowed' })
	} catch (e) {
		console.log(['Internal error'])
	}
}
