import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("users sub route");
});
router.post("/login", (req, res) => {
  res.send("user sub is logged in");
});
router.post("/register", (req, res) => {
  res.send("user sub is registered in");
});
export default router;
