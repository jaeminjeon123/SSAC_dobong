const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// GET /
router.get("/", controller.main);

// GET /players
router.get("/players", controller.getAllPlayer);

router.get('/players/:playerId', controller.getPlayer);

// POST /players
router.post("/players", controller.createPlayer);


// PATCH /players/:playerId/team
router.patch("/players/:playerId/team",controller.patchPlayer);

// DELETE /players/:playerId
router.delete("/players/:playerId",controller.deletePlayer);
router.get("/teams",controller.getTeams);
router.get("/teams/:teamId",controller.getTeams);
router.get("/teams/:teamId/players",controller.getTeamPlayers);
module.exports = router;




