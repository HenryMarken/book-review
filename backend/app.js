//third party imports
const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); //Object data modeling simplifies schemas and interactions with mongoDB

//good practice to have a line seperating your own imports from the third-party ones
// const placesRoutes = require('./routes/places-routes'); //importing the places-routes.js file through the relative path of file
const userRoutes = require('./routes/users-routes')
const HttpError = require('./models/http-error')
const app = express(); 


//routes middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
    //this is all for fixing the CORS error allowing the different types of headers for our application
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    next();
})

// app.use('/api/places', bookRoutes); //this now only forwards requests to our places routes middleware if the path starts with /api/places

app.use('/api/users', userRoutes);

//error handling middleware
//if you add the error argument so a middleware with four arguments express will treat this as an error handling middleware. 
//In other words this function will execute if any middleware in from of it yields an error
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error
});
app.use((error, req, res, next) => { 
    if(res.headerSent) { //checking if a response has been sent
        return next(error);
    }
    res.status(error.code || 500) //this will throw the error code that is defined in the path and if there is no error code 500 status error code will be thrown
    res.json({message: error.message || 'An unknown error occured'}); //again this will check the response to see if there was a message to be thrown if not it displays a generic message

});

mongoose
    .connect('mongodb+srv://hmarken:Coldwinter11!@cluster0.u8neeoa.mongodb.net/testing?retryWrites=true&w=majority')//change the query testing when this is done.
    .then(() => {
        app.listen(5000); //this is running on localhost:5000 not localhost:3000 
        console.log('Listening on port 5000')
    })
    .catch( err => {
        console.log(err);
    });





