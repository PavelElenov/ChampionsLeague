const Team = require('../models/Team')

async function storeAllTeams(){
    const groups = ['A', "B", 'C', 'D', 'E', 'F', 'G', 'H'];

    for(let group of groups){
        const res = await fetch(`https://livescore-api.com/api-client/leagues/table.json?key=VOx8xirURF2cb8fP&secret=6ByUAiEXUVcOHWACK7LhqcchSet4nJTu&competition_id=244&group=${group}`);
        const data = await res.json();

        for(let team of data.data.table){
            Team.create({
                name: team.name,
                group: team.group_name,
                matches: team.matches,
                wons: team.won,
                losts: team.lost,
                draws: team.drawn,
                points: team.points,
                rank: team.rank,
                goalDifference: team.goal_diff,
                goalScored: team.goals_scored,
                goalConceded:team.goals_conceded,
            })
        }
    }
    console.log('All Teams created!!!');
}

async function getAllTeams(){
    return await Team.find();
}

async function getTeamsWithSameGroup(group){
    let teams = await Team.find({group:group});
    teams = teams.sort((team1, team2) => team1.rank - team2.rank);

    return teams;
}

module.exports = {
    storeAllTeams,
    getAllTeams,
    getTeamsWithSameGroup,
}