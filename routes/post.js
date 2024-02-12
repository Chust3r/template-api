import { Router } from 'express'
import { posts, postById } from '../controllers/post.js'

export const routerPost = Router()

routerPost.all('/', posts).all('/:postId', postById)
