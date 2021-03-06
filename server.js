const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

app.use(cors());

connectDB();

// middleware // Update ** Body parser not needed anymore
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/jobs", require("./routes/api/jobs"));
