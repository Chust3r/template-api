import { db } from '../lib/db.js'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

export const posts = async (req, res) => {
	try {
		if (req.method !== 'GET') {
			return res.status(405).json({ message: 'Method no allowed' })
		}

		const posts = await db.post.findMany()

		return res.json({
			data: posts,
		})
	} catch (e) {
		console.log(['Internal error'])
	}
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

export const postById = async (req, res) => {
	try {
		const params = req.params

		const posts = await db.post.findFirst({
			where: {
				id: Number(params?.postId),
			},
		})

		return res.json({
			data: posts,
		})
	} catch (e) {
		console.log(['POST_ID Internal error'])
		res.status(500).json({ message: 'Internal error' })
	}
}
