class ExpressError extends Error{
    constructor(statusCode, massage){
        super();
        this.status = statusCode;
        this.massage = massage;
    }
}

module.exports = ExpressError;