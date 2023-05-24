class HttpError extends Error { //the extends keyword creates a child class HttpError from the parent class Error
    constructor (message, errorCode) {
        super(message); // add a "message" property //super acts as a reference variable to the parent class
        this.code = errorCode; //adds a "code" property //this keyword refers to an object that is executing the current piece of code
    }
}

module.exports = HttpError