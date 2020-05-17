const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Job = require("../../models/Job");

const User = require("../../models/User");

// @route   POST api/jobs
// @desc    Create a job
// @access  Public
router.post("/", [auth, [check("title").not().isEmpty()]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select("-password");

    const newJob = new Job({
      title: req.body.title,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    });

    const job = await newJob.save();
    res.json(job);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Sevrer error");
  }
});

// @route   GET api/jobs
// @desc    Get all posts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 });
    res.json(jobs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/jobs/:id
// @desc    Get post by id
// @access  Private
router.get("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/jobs/:id
// @desc    Delete a post
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }

    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await job.remove();

    res.json({ msg: "Job removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route    PUT api/posts/togglelike/:id
// @desc     toggle a like on the post
// @access   Private
router.put("/save/:id", auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    const isSavedByUser =
      job.saves.filter(({ user }) => user.toString() === req.user.id).length >
      0;

    // remove or add like
    job.saves = isSavedByUser
      ? job.saves.filter(({ user }) => user.toString() !== req.user.id)
      : [...job.saves, { user: req.user.id }];

    await job.save();

    return res.json(job.saves);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/job
// @desc    Comment on a job
// @access  Private
router.post(
  "/comment/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //get user : except password
      const user = await User.findById(req.user.id).select("-password");
      const job = await Job.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      job.comments.unshift(newComment);

      await job.save();
      res.json(job);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Sevrer error");
    }
  }
);

// @route   Delete api/jobs/comment/:id/:comment_id
// @desc    Delete a comment
// @access  Private

router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    // Pull out comment
    const comment = job.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    job.comments = job.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );

    await job.save();

    return res.json(job.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});
module.exports = router;
