const { getAllPlayers, getPlayerByName } = require("../services/playerService");
const { getAllTeams, getTeamsWithSameGroup, getTeamById } = require("../services/teamService");

const router = require("express").Router();

router.get("/", async (req, res) => {
    const teams = await getAllTeams();
    const players = await getAllPlayers();
    let groups = {};

    for(let i = 65; i <= 72; i++){
        const group = String.fromCharCode(i);

        const teamsWithSameGroup = await getTeamsWithSameGroup(group);
        groups[group] = teamsWithSameGroup;
    }
    
    res.render("groups", {
        title: "Groups Page",
        groups,     
    })
});

router.get('/squad/:id', async (req, res) => {
    const team = await getTeamById(req.params.id);
    let players = [];
    
    for(let playerName of team.players){
        const player = await getPlayerByName(playerName);
        players.push(player)
    }

    res.render("squad", {
        title: "Squad Page",
        players,
        team,
    })
})

module.exports = router;