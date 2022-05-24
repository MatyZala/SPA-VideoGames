/* const axios = require('axios');
const { Router } = require('express');
const rutaVideogames = Router();
const { Videogame, Genre } = require('../db');



const getGameApi = async () => {
    const gamesApi = [];
    try {
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`) 
        const res2 = await axios.get(res.data.next)
        const res3 = await axios.get(res2.data.next)
        const res4 = await axios.get(res3.data.next)
        const res5 = await axios.get(res4.data.next)          

        const info = res.data.results.concat(res2.data.results,
                                              res3.data.results,
                                              res4.data.results,
                                              res5.data.results)

        resultadoApi.forEach(resultado => {
            juegosApi.push(
                {
                    id: resultado.id,
                    name: resultado.name,
                    released: resultado.released,
                    rating: resultado.rating,
                    platforms: resultado.platforms.map(e => e.platform.name),
                    genres: resultado.genres
                })
        })
        return juegosApi;  //juegos = [ {juego1}, {juego2} ---> {juego120} ]
    } catch (error) {
        return error
    }
}

const obtieneJuegosBd = async () => {
    try {
        const juegosBd = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ["name"],
                through: { attributes: [] }
            }
        })
        return juegosBd
    } catch (error) {
        return error
    }
}

const todosLosJuegos = async () => {
    try {
        const arrApi = await obtieneJuegosApi()
        const arrBd = await obtieneJuegosBd()
        return [...arrBd, ...arrApi]
    } catch (error) {
        return error
    }
};

rutaVideogames.get("/", async (req, res) => {
    const { name } = req.query;
    const juegosTotal = await todosLosJuegos();
    if (name) {
        const juegosFiltrados = juegosTotal.filter(juego => {
            return juego.name.toLowerCase().includes(name.toLowerCase())
        })
        juegosFiltrados.length
            ? res.status(200).json(juegosFiltrados)
            : res.status(200).send(juegosFiltrados)
    } else {
        res.status(200).json(juegosTotal)
    }
})

rutaVideogames.get("/plataforms", async (req, res) => {

    const juegos = await obtieneJuegosApi();
    const allPlatforms = [];
    juegos.map(game => {
        game.platforms.map(platform => {
            if (!allPlatforms.includes(platform)) {
                allPlatforms.push(platform)
            }
        })
    })
    allPlatforms.length
        ? res.status(200).json(allPlatforms)
        : res.status(404).send('Error')
}
)


module.exports = rutaVideogames; */