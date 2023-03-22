const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get Goals" });
})

const setGoal = asyncHandler(async (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length != 0) {
        return res.status(200).json({ message: 'Set Goals' });
    }

    res.status(400)
    throw new Error('Add parameters to request')
})

const putGoal = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: `Update Goal ${req.params.id}` });
})

const deleteGoal = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: `Delete Goal ${req.params.id}` });
})

module.exports = {
    getGoals, setGoal, putGoal, deleteGoal
}