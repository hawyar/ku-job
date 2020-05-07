const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Job = require("../../models/Job");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   POST api/posts
// @desc    Create a job
// @access  Public
router.post(
  "/",
  [auth, [check("company").not().isEmpty(), check("title").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newJob = {
        company: req.body.text,
        title: req.body.title,
      };

      const job = await newJob.save();
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Sevrer error");
    }
  }
);

module.exports = router;
