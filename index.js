// Building server. require = import 
const express = require('express');
const mongoose = require("mongoose");
const hbr = require('express-handlebars');
const homeController = require('./controllers/homeController');
const groupsController = require('./controllers/groupsController');
const { storeAllPlayers, removeAllPlayers } = require('./services/playerService');
const { storeAllTeams, removeAllTeams } = require('./services/teamService');


//extname, kazva che handlebars files shte imat razshirenie hbs
const handlebars = hbr.create({
    extname: ".hbs",
})

//Create app
const app = express();

//Tova sa nastroiki na handlebars
app.engine('.hbs', handlebars.engine);
app.set("view engine", '.hbs');

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

    // await removeAllTeams();
    // await removeAllPlayers();
    // await storeAllTeams();
    // await storeAllPlayers();
    
    app.use(express.urlencoded({extended:true}));

    app.use('/static', express.static('static'));
    app.use(homeController);
    app.use("/groups", groupsController);


    // Start server on port 3000.Url = http://localhost:3000 - tova go pishesh v google i shte ti otvori servera
    app.listen(3000, console.log('Server listening on port 3000'));
}


