import express from 'express'
import AutherController from './auth.controller.js'
import VerifyMiddleware from '../../middleware/verify.middleware.js'
import { userValidateMiddleware } from '../../middleware/userValidate.middleware.js'

const AutherRouter = express.Router()

AutherRouter.route("/register")
    .post(
        userValidateMiddleware.register,
        AutherController.register
    )
AutherRouter.route("/login")
    .post(
        userValidateMiddleware.login,
        AutherController.login
    )

AutherRouter.route("/profile")
    .get(
        VerifyMiddleware.checkAuth,
        AutherController.getProfile
    )

AutherRouter.route("/forgot")
    .post(
        userValidateMiddleware.forgot,
        AutherController.forgotPassword
    )

AutherRouter.route("/reset")
    .post(
        userValidateMiddleware.reset,
        AutherController.resetPassword
    )

export default AutherRouter