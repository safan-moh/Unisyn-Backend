const evaluationMiddleware = (req, res, next) => {
    res.customData = {
        message: 'This data was added by the middleware',
        timestamp: new Date().toISOString(),
    }
    console.log("Evaluation");
    next();
}

module.exports = evaluationMiddleware;