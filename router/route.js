const {Router} = require("express") 
const router = Router()
const {todo} = require("../controllers/todo")

router.post("/money", todo)
module.exports = router
