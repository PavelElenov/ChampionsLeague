const Team = require('../models/Team')
const fs = require('fs');

function storeAllTeams() {
    fs.readFile("teams.json", async function (err, data) {
        const teams = JSON.parse(data);

        for (let team of teams) {
            await Team.create({
                'name': team.name,
                'group': team.group,
                'matches': team.matches,
                'wons': team.wons,
                'losts': team.losts,
                'draws': team.draws,
                'points': team.points,
                'rank': team.rank,
                'goalDifference': team.goalDifference,
                'goalScored': team.goalScored,
                'goalConceded': team.goalConceded,
                'imgUrl': team.imgUrl,
                "players": team.players,
            })
        }
        console.log('Teams are created!!!');
    })
};

async function getAllTeams() {
    return await Team.find().lean();
}

async function removeAllTeams() {
    const teams = await Team.find();

    for (let team of teams) {
        await Team.findByIdAndRemove(team._id);
    }
};

async function getTeamsWithSameGroup(group) {
    let teams = await Team.find({ group: group }).lean();
    teams = teams.sort((team1, team2) => team1.rank - team2.rank);

    return teams;
}

async function getTeamById(id) {
    return await Team.findById(id).lean();
}

module.exports = {
    storeAllTeams,
    getAllTeams,
    getTeamsWithSameGroup,
    removeAllTeams,
    getTeamById,
}