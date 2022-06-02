const  axios = require('axios')
const { Router } = require('express');
require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


const findGameApi = async (attributes) => {    
    const obj = await axios.get(`https://api.rawg.io/api/games/${attributes}?key=${API_KEY}`)
    const game = {
        ID: obj.data.id,
        name : obj.data.name,
        released: obj.data.released,
        rating: obj.data.rating,
        platforms: obj.data.platforms.map(p => p.platform.name),
        description: obj.data.description,
        genres: obj.data.genres.map(p => p.name),
        image: obj.data.background_image
    }
    if(game.ID)return game
    return false    
};

const getApiInfo = async () => {

    const res1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const res2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
    const res3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)
    const res4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)
    const res5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)
    
    const info = res1.data.results.concat(res2.data.results,
                                         res3.data.results,
                                         res4.data.results,
                                         res5.data.results)                                        
    
    const apiInfo = await Promise.all(info.map(async obj => {
        let id = obj.id
        return await findGameApi(id)
    }));
    
    return apiInfo;
};

const getDbInfo = async () => {
    return await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['ID','name'],
            through: {
                 attributes: [],
            },
        }    
    })
};

const getAllGames = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal; 
};

router.get('/videogames', async (req, res)=> {
    const name = req.query.name
    let totalVideogames = await getAllGames();
    if (name){
        let videogameName = totalVideogames.filter(g => g.name.toLowerCase().includes(name.toLowerCase()))
        videogameName.length ? 
        res.status(200).json(videogameName) :
        res.status(404).send('Game not found'); 
    }else{
        res.status(200).json(totalVideogames)
/*         console.log(totalVideogames); */
    }
});

router.get('/videogame/:idVideogame', async (req, res,)=>{
    const  {idVideogame} = req.params
    let game = await findGameApi(idVideogame)
    res.json(game);
});


router.get("/genres", async (req, res) => {
    try {
      let genres = await Genre.findAll();
      if (!genres.length) {
        const genresApi = await axios.get(
          `https://api.rawg.io/api/genres?key=${API_KEY}`
        );
        genres = await genresApi.data.results.map((el) => ({
          name: el.name,
        }));
        await Genre.bulkCreate(genres);
        genres = await Genre.findAll();
      }  
      res.send(genres);
    } catch (error) {
      console.log(error);
    }
});

router.post('/videogame', async (req, res) => {
    try {
        let {
            name,
            description,
            released,
            rating,
            platforms,
            genres
        } = req.body;
        let gameCreated = await Videogame.create({
            name,
            description,
            released,
            rating,
            platforms
        })
        let genreDb = await Genre.findAll({
            where: {name: genres}
        })
/*         console.log(genreDb) */
        gameCreated.addGenre(genreDb);
        res.send('Personaje creado con exito!');
    } catch (e) {
        console.error(e)  
    }
});



module.exports = router;
