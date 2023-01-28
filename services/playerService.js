const fs = require('fs');
const Player = require('../models/Player');
const Team = require('../models/Team');

function storeAllPlayers(){
    fs.readFile("players.json", async function(err, data){
        const players = JSON.parse(data);

        for(let player of players){
            await Player.create({
                'name': player.name,
                'position':player.position,
                'imgUrl':player.imgUrl,
                'team': player.team,
            })

            const team = await Team.findOne({name:player.team});
            team.players.push(player.name); 
            team.save();
        }
        console.log("Players are created!")
    });
};

async function removeAllPlayers(){
    const players = await Player.find();

    for(let player of players){
        await Player.findByIdAndDelete(player._id);
        
    }
    console.log('All players are deleted!');
}

async function getAllPlayers(){
    return await Player.find().lean();
}

async function getPlayerByName(name){
    return await Player.findOne({name:name}).lean();
}

module.exports = {
    storeAllPlayers,
    removeAllPlayers,
    getAllPlayers,
    getPlayerByName,
}

