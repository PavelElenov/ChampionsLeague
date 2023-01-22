// Building server.Require = import 
const app = require('express')();
const mongoose = require("mongoose");
const { storeAllPlayers, removeAllPlayers } = require('./services/playerService');
const { storeAllTeams } = require('./services/teamService');

start();

// This function will connect database and start server
async function start(){
    mongoose.set('strictQuery', false)

    await mongoose.connect('mongodb://127.0.0.1:27017/ChampionsLeagueDB', {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('Database connected!');
        }
    });

    // await storeAllTeams();
    // await storeAllPlayers();


    // Start server on port 3000.Url = http://localhost:3000 - tova go pishesh v google i shte ti otvori servera
    app.listen(3000, console.log('Server listerning on port 3000'));
}


