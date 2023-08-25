const errorHandlerMiddleware = async (err, req, res, next) =>{
   
    if(err.name === 'ValidationError'){
        const validationErrors = Object.values(err.errors); // convert the values of the object in the array
        const errorMessage = validationErrors[0].message;   // then access the first index of array and there you can access the message
        return res.status(500).json({error: errorMessage});
    }
    else{
        const errorMessage = err.message || 'Internal Server Error';
        return res.status(500).json({error : errorMessage});
    }
    }

module.exports = errorHandlerMiddleware;