import { Router } from 'express'
import { users, userId } from '../controllers/user.js'

export const routerUser = Router()

routerUser.all('/', users).all('/:userId', userId)
