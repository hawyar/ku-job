const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  name: String,
  avatar: String,
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  experiencelevel: {
    type: String,
  },
  industry: {
    type: String,
  },
  salary: Number,
  benefits: {
    type: Array,
  },
  saves: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      text: {
        type: String,
        required: true,
      },
      name: String,
      avatar: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Job = mongoose.model("job", JobSchema);
