//third-party imports
const {validationResult} = require('express-validator')

//local imports
const HttpError = require('../models/http-error'); //this is an erorr model that displays the error message and error code
const User = require('../models/user');



// const getUsers = async (req, res, next) => {
//     let users;
//     try{
//         users = await User.find({}, '-password'); //this will return everything except for the password the alternative is to just type email name instead
//     }
//     catch(err){
//         const error = new HttpError('Fetching users failed, please try again later.', 500)
//         return next(error);
//     }
//     res.json({users: users.map(user => user.toObject({ getters: true }))}) //note that find returns an array so we need to add map to users to convert to default object 
// };


//*** SIGNUP ***//
const signup = async (req, res, next) => {
    const errors = validationResult(req); //this is from the places-routes it will return all the errors from the check function that we have listed for the post request
    if (!errors.isEmpty()){
        console.log(errors);
        const error = new HttpError('Invalid inputs passed, please check your data.', 422)
        return next(error);
    }
    const { name, email, password } = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({ email: email })    
    }
    catch(err){
        const error = new HttpError('Failed to find please try again later.', 500);
        return next(error);
    };

    if (existingUser){
        const error = new HttpError('User exists already, please login instead.', 422);
        return next(error);
    }
    
    const createdUser = new User ({
        name,
        email,
        password,
        // books: []
    });

    try {
        await createdUser.save();    
    }
    catch(err) {
        const error = new HttpError (
            'Saviing user failed, please try again',
            500
        );
        return next(error);
    }

    res.status(201).json({user:createdUser.toObject({ getters: true })});
};


// //*** LOGIN ***//
const login = async (req, res, next) => { 
    const { email, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({ email: email })    
    }
    catch(err){
        const error = new HttpError('Loggin in failed please try again later.', 500);
        return next(error);
    };

    if(!existingUser || existingUser.password !== password){
        const error = new HttpError('Invalid credentials, could not log you in', 401);
        return next(error);
    }
    
    // const identifiedUser = DUMMY_USERS.find(u => u.email ===email);
    // if(!identifiedUser || identifiedUser.password !== password) {
    //     throw new HttpError('Could not identify user, credentials seem to be wrong.', 401) //401 is error code for authentication has failed
    // }

    res.json({message: 'Logged In!', user: existingUser.toObject({ getter:true })})
};

// exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;