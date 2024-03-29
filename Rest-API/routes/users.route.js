const {getAllUser, createUser, updateUser, deleteUser} = require("../controllers/users.controller");

const router = require("express").Router();
//const router = express.Router();

router.get("/",getAllUser);
router.post("/",createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports = router;