const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  experiencelevel: {
    type: String,
  },
  location: {
    type: String,
  },
  jobtype: {
    type: String,
  },
  description: {
    type: String,
  },
  benefits: {
    type: String,
  },

  saves: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      text: {
        type: String,
        require: true,
      },
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
