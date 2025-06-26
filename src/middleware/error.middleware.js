export  const errorHandler = (err, req, res, next) => {


    return res.status(err.statusCode || 500).json({
        status : "error",
        error : err.message,
        stack : err.stack
    });
}
