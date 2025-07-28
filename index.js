const express = require("express");
const app = express();
const PORT = 3000;

const studentRoutes = require("./src/routes/studentRoutes");

app.use(express.json());
app.use("/", studentRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
})