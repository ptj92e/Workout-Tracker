const api_router = require("express").Router();
const db = require("../models");

api_router.get("/api/workous", (req, res) => {

});

api_router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    db.Workout.create({ exercise: req.body })
    .then(dbWorkout => {
        console.log(dbWorkout);
    });
});

api_router.post("/api/workouts", ({body}, res) => {
    
});

api_router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .sort({date: 1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    });
});

module.exports = api_router;