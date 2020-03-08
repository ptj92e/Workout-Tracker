const api_router = require("express").Router();
const db = require("../models");
const mongojs = require("mongojs");

api_router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    });
});

api_router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        mongojs.ObjectId(req.params.id),
        {
            $set: {
                exercises: req.body
            }
        },

        (err, edited) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.send(edited);
            }
        });
});

api_router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create({ exercises: body })
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
});

api_router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .sort({ date: 1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
});

module.exports = api_router;