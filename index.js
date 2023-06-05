import express from "express";
import { crearPost, deletePost, getPosts, likePost } from "./db/index.js";
import { handleErrors } from "./db/errors.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/posts", async(req, res) => {
    try {
        const posts = await getPosts()
        res.json(posts)
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message})
    }
})

app.post("/posts", async(req, res) => { 
    const {titulo, imgSrc, descripcion} = req.body;

    try {
        const funcCrear = await crearPost({titulo, imgSrc, descripcion})
        res.json(funcCrear)
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message})
    }
    
})

app.delete("/posts/:id", async(req, res) => {
    const {id} = req.params;
    try {
        const funcDelete = await deletePost({id})
        res.json(funcDelete)
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message})
    }
})

app.put("/posts/like/:id", async(req, res) => {
    const {id} = req.params;
    try {
        const funcPut = await likePost({id})
        res.json(funcPut)
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message})

    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor listo en http://localhost:" + PORT);
})