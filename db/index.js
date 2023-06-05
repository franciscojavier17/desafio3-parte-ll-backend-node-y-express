import pkg from "pg";
const {Pool} = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'likeme',
    password: 'udech',
    port: 5432,
    allowExitOnIdle: true,
});

export const getPosts = async() => {
    const {rows} = await pool.query("SELECT * FROM posts")
    return rows
}

export const crearPost = async({titulo, imgSrc, descripcion}) => {
    if (!titulo || !imgSrc || descripcion) {
        throw { code: "400" }
    }

    const comando = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *"
    const {rows} = await pool.query(comando,[titulo, imgSrc, descripcion])
    return rows
}

export const deletePost = async({id}) => {
    if (!id) {
        throw { code: "400" }
    }

    const comando = "DELETE FROM posts WHERE id = $1 RETURNING *"
    const {rows} = await pool.query(comando, [id])
    return rows
}

export const likePost = async({id}) => {

    const comando = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *"
    const {rows} = await pool.query(comando, [id])
    return rows
}