const User = require("../models/User");
const bcypt = require("bcrypt");

async function login(email, password){
    const user = await User.findOne({email:email});

    if(user){
        if(await bcypt.compare(password, user.password)){
            return user;
        }else{
            throw Error("Incorrect username or password");
        }
    }else{
        throw Error("Incorrect username or password");
    }
}

async function register(username, email, password, repPass){
    if(password == repPass){
        let user = await User.findOne({email:email})
        if(user){
            throw Error("Already have user with this email");
        }

        const hashedPassword = await bcypt.hash(password, 9);

        return await User.create({
            username,
            email,
            password: hashedPassword,
        });
    }else{
        throw Error("Passwords don't match");
    } 
}

module.exports = {
    login,
    register,
}