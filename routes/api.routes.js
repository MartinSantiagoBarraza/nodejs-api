const { Router } = require("express");
const { getAccounts } = require("../controllers/api.controllers");
/*const {
  getArticulos,
  postArticulos,
  putArticulo,
  deleteArticulo,
} = require("../controllers/api.controllers.js");
const { checkNombre } = require("../middlewares/middlewares.js");*/
const router = Router();

router.get("/:id", getAccounts);

/*router.get("/", getArticulos);
router.post("/", checkNombre, postArticulos);
router.put("/:id", checkNombre, putArticulo);
router.delete("/:id", deleteArticulo);*/

module.exports = router;
