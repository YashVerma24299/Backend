class MyError extends Error {
    constructor(status, message){
        super();
        this.status = status; // code number
        this.message = message;  
    }
}
module.exports =MyError;