const express = require("express");
const servidor = express();
const videosRoutes = require("./routes/videosRoutes");

// Middleware para permitir requisições JSON
servidor.use(express.json());

// Usando as rotas de vídeos
servidor.use("/videos", videosRoutes);

servidor.get("/", (req, res) => res.send("Olá mundo!"));

// Inicializando o servidor na porta 3000
servidor.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
