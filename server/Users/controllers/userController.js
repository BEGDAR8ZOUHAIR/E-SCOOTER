const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../../Auth/models/authModel');
// const Scouter = require('../../Admin/models/adminModel');
const Scouter = require('../../scooter/Model/ScouterModel');



// @desc    Get all Scouter
// @route   GET /api/scouter
// @access  public
const getScouter = asyncHandler(async (req, res) => {
    const scouter = await Scouter.find({})
    res.json(scouter)
})

module.exports = {
    getScouter
}


