const express = require("express");
const { getUser, updateUser, fetchUser } = require("../controllers/users");
const router = express.Router();
// const auth = require("../middleware/auth");
// const { loginUser, registerUser} = require("../controllers/users");
// const { bookSlot, allSlot, pendingSlot } = require("../controllers/slots");


//Routes for user 
router.get("/getUsers", getUser);
router.get("/fetchUsers", fetchUser);
router.put("/updateUser/:id", updateUser);

// //Routes for slots
// router.post("/bookSlot",auth,bookSlot);
// router.post("/allSlots",auth,allSlot);
// router.post("/pendingSlots",auth,pendingSlot);


module.exports = router;