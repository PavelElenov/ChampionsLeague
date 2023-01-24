const { getAllTeams, getTeamsWithSameGroup } = require("../services/teamService");

const router = require("express").Router();

router.get("/", async (req, res) => {
    const teams = await getAllTeams();
    let groups = {};

    for(let i = 65; i <= 72; i++){
        const group = String.fromCharCode(i);

        const teamsWithSameGroup = await getTeamsWithSameGroup(group);
        groups[`${group}`] = teamsWithSameGroup;
    }

    res.render("groups", {
        title: "Groups Page",
        groups,
    })
});

module.exports = router;