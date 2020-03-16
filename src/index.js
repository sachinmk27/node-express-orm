const express = require("express");
const morgan = require("morgan");

const { sequelize } = require("./config/db");
const { projectRouter, itemRouter } = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

// sequelize.sync({ force: true });
sequelize.sync();

app.use(express.json());
app.use(morgan("combined"));

app.use("/projects", projectRouter);
app.use("/items", itemRouter);

app.listen(port);
