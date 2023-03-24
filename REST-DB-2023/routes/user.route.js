const router = require('express').Router();
const { getAllUsers, getOneUser, createUser, deleteUser, updateUser } = require('../controllers/user.controller');


// all users route
router.get("/",getAllUsers);

//one user route
router.get("/:id",getOneUser);

//new user creation route
router.post("/",createUser);

//delete user route
router.delete("/:id",deleteUser);

//update user route
router.patch("/:id",updateUser);
module.exports = router;