const express = require("express");
const port = 300
const app = express();

/* MiddleWare */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", require("./routes/api/users"));

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));