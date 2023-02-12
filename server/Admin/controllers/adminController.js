const express = require('express');
const User = require('../../Auth/models/authModel');
const asyncHandler = require('express-async-handler');
// const Scouter = require('../../scooter/models/ScouterModel');



// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})


// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        await user.remove()
        res.json({ message: 'User removed' })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})


// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')
    if (user) {
        res.json(user)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    add scouter
// @route   POST /api/scouter
// @access  Private/Admin

// const addScouter = asyncHandler(async (req, res) => {
//     const { nom, latitude , longitude, description,status  } = req.body
//     const scouter = await Scouter.create({
//         nom,
//         latitude,
//         longitude,
//         description,
//         status
       
//     })
//     if (scouter) {
//         res.status(201).json({
//             _id: scouter._id,
//             nom: scouter.nom,
//             latitude: scouter.latitude,
//             longitude: scouter.longitude,
//             description: scouter.description,
//             status: scouter.status
//         })
//     } else {
//         res.status(400)
//         throw new Error('Invalid Scouter data')
//     }
// })

//  // @desc    activate scouter
// // @route   GET /api/scouter/:id
// // @access  Private/Admin


//  const activateScouter = asyncHandler(async (req, res) => {
//     const scouter = await Scouter.findById(req.params.id)
//     if (scouter) {
//         scouter.status = "activer"
//         const updatedScouter = await scouter.save()
//         res.json({updatedScouter})
//     } else {
//         res.status(404)
//         throw new Error('Scouter not found')
//     }
// })

// // @desc    desactivate scouter
// // @route   GET /api/scouter/:id
// // @access  Private/Admin


// const desactivateScouter = asyncHandler(async (req, res) => {
//     const scouter = await Scouter.findById(req.params.id)
//     if (scouter) {
//         scouter.status = "desactiver"
//         const updatedScouter = await scouter.save()
//         res.json({updatedScouter})
//     } else {
//         res.status(404)
//         throw new Error('Scouter not found')
//     }
// })


// @desc    Get all scouter
// @route   GET /api/scouter
// @access  Private/Admin


// const getScouter = asyncHandler(async (req, res) => {
//     const scouter = await Scouter.find({})
//     res.json(scouter)
// })







module.exports = {
    getUsers,
    deleteUser,
    getUserById, 
    // addScouter, 
    // getScouter, 
    // activateScouter,
    // desactivateScouter,

}

