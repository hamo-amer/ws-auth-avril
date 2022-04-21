const express = require("express");
const app = express();
const connectDB = require("./config/connection");
const authRouter = require("./routes/auth");

// connection with database
connectDB();
// middlewares
app.use(express.json());

app.use("/api/auth", authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
