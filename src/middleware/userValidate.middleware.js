import z from 'zod';

const registerSchema = z.object({
    name: z.string().min(1, 'Username không được để trống'),
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    confirmPassword: z.string().min(1, 'Xác nhận mật khẩu không được để trống'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu không khớp',
})

const loginSchema = z.object({
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

const forgotSchema = z.object({
    email: z.string().email('Email không hợp lệ')
})

const resetSchema = z.object({
    resetOTP: z.string().min(1, 'Token không được để trống'),
    resetEmail: z.string().email('Email không hợp lệ'),
    resetNewPassword: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
})

export const userValidateMiddleware = {
    // Function to handle validation response
    // This function will be used to format the response for validation errors
    response: (result) => {
        if (!result.success) {
            return {
                status: 'error',
                message: 'Dữ liệu không hợp lệ',
                errors: result.error.errors.map(err => ({
                    field: err.path[0],
                    message: err.message,
                })),
            };
        }
        return null;
    },
    // Middleware for registration validation
    register: (req, res, next) => {
        const result = registerSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json(userValidateMiddleware.response(result));
        }
        next();
    },

    // Middleware for login validation
    login: (req, res, next) => {
        const result = loginSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json(userValidateMiddleware.response(result));
        }
        next();
    },

    // Middleware for password reset validation
    forgot: (req, res, next) => {
        const result = forgotSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json(userValidateMiddleware.response(result));
        }
        next();
    },

    // Middleware for reset password validation
    reset: (req, res, next) => {
        const result = resetSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json(userValidateMiddleware.response(result));
        }
        next();
    },
}