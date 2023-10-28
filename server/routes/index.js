const express = require("express");
const { getUser, updateUser, fetchUser, exportCSV } = require("../controllers/users");
const router = express.Router();


//Routes for user 
router.get("/getUsers", getUser);
router.get("/fetchUsers", fetchUser);
router.put("/updateUser/:id", updateUser);
router.post("/export", exportCSV);


module.exports = router;