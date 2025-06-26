import AuthService from "./auth.service.js"
import ErrorProvider from "../../providers/error.provider.js";

const AutherController = {
    // Function to handle user registration
    async register(req, res, next){
        try {
            const data = req.body;
            const result = await AuthService.register(data)
            return res.status(200).json({
                success : true,
                message : result
            })
        }
        catch(error){
            next(ErrorProvider.formatError(error))
        }
    },

    // Function to handle user login
    async login(req, res, next){
        try {
            const { email, password } = req.body
            const {token, user} = await AuthService.login(email, password)
            return res.status(200).json({
                succes : true,
                token : token,
                user : user
            })
        }
        catch(error){
            next(ErrorProvider.formatError(error))
        }
    },

    // Function to handle get user profile
    async getProfile(req, res, next){
        try {
            const id = req.user.id;
            console.log(req);
            const user = await AuthService.getProfile(id)
            return res.status(200).json({
                status : "success",
                data : { ...user }
            })
        }
        catch(error){
            next(ErrorProvider.formatError(error))
        }
    },

    async forgotPassword(req, res, next){
        try {
            const { email } = req.body

            const token = await AuthService.forgotPassword(email)
            return res.status(200).json({
                status: "success",
                message: "Password reset token has been sent to your email."
            })
        }

        catch(error){
            next(ErrorProvider.formatError(error))
        }
    },

    async resetPassword(req, res, next){
        try {
            const {resetOTP, resetEmail, resetNewPassword} = req.body
            await AuthService.resetPassword(resetOTP, resetEmail, resetNewPassword)
            return res.status(200).json({
                status: "success",
                message: "Password reset successfully"
            })
        }
        catch(err){
            err.statusCode = err.statusCode || 500
            err.message = err.message || "Internal server error"
            next(err)
        }
    },

    
}

export default AutherController;