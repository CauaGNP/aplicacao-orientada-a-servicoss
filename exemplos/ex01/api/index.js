import "dotenv/config"
import express from "express";
import cors from "cors";
import basicMidleware from "./midlewares/basicMidleWare";

const app = express();
const port = 3000

app.use(cors());
app.use(basicMidleware);

app.listen(port,() => console.log("Server is running!!"));

app.get("/", (req, res) => { res.send("Bem-vindo ao Express de CauãGNP")});

app.get("/random", (req,res)=>{
    const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);

    res.send({
        number: randomNumber
    })
})

app.get("/inspiration", (req,res) => {
    const randomNumber = Math.floor(Math.random() * 14);

    const quotesInspirations = [
    "Não limite os seus desafios. Desafie os seus limites.",
    "Uma meta é um sonho com um prazo.",
    "Sorte é o que acontece quando a preparação encontra a oportunidade.",
    "Não espere por oportunidades, crie-as.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho.",
    "Quando tiver finalizado uma meta, não olhe para ela como a linha de chegada; olhe como o ponto de partida para sua próxima conquista.",
    "Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.",
    "Não importa o quão devagar você vá, desde que você não pare.",
    "A persistência é o caminho do êxito.",
    "A verdadeira motivação vem de dentro de você.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "A única coisa impossível é aquilo que você não tenta.",
    "A chave para a realização é focar naquilo que você pode controlar.",
    "Os sonhos não funcionam a menos que você trabalhe para realizá-los."
    ];

    res.send({
        quote: quotesInspirations[randomNumber],
    })
});

