import AuthProvider from "../providers/auth.provider.js"

const VerifyMiddleware = {
    // Middleware to check if user is authenticated
    async checkAuth(req, res, next){
        try {
            const header = req.headers.authorization;
            if (!header){
                throw new Error('Not login')
            }
            const token = header.split(' ')[1];

            req.user = await AuthProvider.decodeToken(token);
            console.log("User verified:", req.user);
            next()
        }
        catch(err){
            err.statusCode = 401
            err.message = "Unauthorized or token expired"
            throw err
        }
    }
}

export default VerifyMiddleware