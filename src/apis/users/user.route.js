
import UserController from './user.controller.js'
import express from 'express'

const userRoute = express.Router()

userRoute.route('/')
    .get(UserController.getAllUsers)
    .post(UserController.postUser)

userRoute.route('/:id')
    .get(UserController.getUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser)
export default userRoute