const apiRecord = ((req, res, next) => {
    // Log the start time and request URL
    const startTime = new Date();
    console.log("Request Start Time:", startTime.toLocaleString('en-US', { timeZone: 'UTC' }));
    console.log("Request URL:", req.originalUrl);

    // Continue with the request processing
    next();

    // Log the end time after processing the request
    const endTime = new Date();
    console.log("Request End Time:", endTime.toLocaleString('en-US', { timeZone: 'UTC' }));
});

module.exports = apiRecord;
