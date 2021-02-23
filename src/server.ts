import express from 'express';

const app = express();

app.get("/", (request, response) => {
  response.json({message:"Chegou"});
});

app.post("/", (request, response) => {
  return response.json({message: "Dados salvos com sucesso"});
})

app.listen(3333, () => console.log("ta rodando"));