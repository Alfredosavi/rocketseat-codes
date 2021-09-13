const express = require("express");
const Pool = require("pg").Pool;
const server = express();
require("dotenv/config");

// configurar o servidor para apresentar arquivos como JS, CSS
server.use(express.static("public"));

// Habilitar Body do formulario
server.use(express.urlencoded({ extended: true }));

const db = new Pool({
  user: "postgres",
  password: "postgres",
  host: "db",
  port: "5432",
  database: "maratonadev",
});

const nunjucks = require("nunjucks");
nunjucks.configure("./", {
  express: server,
  noCache: true,
});

server.get("/a", (req, res) => {
  return res.send("Hello World");
});

server.get("/", (req, res) => {
  db.query("SELECT * FROM donors", (err, result) => {
    if (err) return res.send(err);

    const donors = result.rows;
    return res.render("index.html", { donors });
  });
});

server.post("/", (req, res) => {
  const { name, email, blood } = req.body;

  if (name == "" || email == "" || blood == "") {
    return res.send("Todos os campos são obrigatórios");
  }

  const query = `
    INSERT INTO donors ("name", "email", "blood")
    VALUES ($1, $2, $3)`;

  db.query(query, [name, email, blood], (err) => {
    if (err) return res.send(err);

    return res.redirect("/");
  });
});

server.listen(3000, () => {
  console.log("Server is running");
});
