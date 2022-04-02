const movies = require('../db.json')

let id = movies.length + 1

const getAllMovies = (req, res) => {
    res.status(200).send(movies)
}

const deleteMovie = (req, res) => {
    const movieToBeDeletedID = +req.params.id

    for(let i = 0; i < movies.length; i++){
        const movie = movies[i]
        if(movie.id === movieToBeDeletedID) {
            movies.splice(i, 1)
            return res.status(200).send(movies)
        }
    }

    res.status(400).send(movies)
}

const createMovie = (req, res) => {
    const {title, rating, imageURL} = req.body

    const newMovie = {
        id,
        title,
        rating,
        imageURL,
    }

    movies.push(newMovie)

    id++

    res.status(200).send(movies)
}

const updateMovie = (req, res) => {
    const movieToBeUpdatedID = +req.params.id
    const { type } = req.body

    for(let i = 0; i < movies.length; i++) {
        const movie = movies[i]
        if(movie.id === movieToBeUpdatedID) {
            if (type === 'plus') {
                if(movie.rating !== 5)
            movie.rating++
        } else {
            if(movie.rating !== 0)
            movie.rating--
        }

        return res.status(200).send(movies)
    }
    }

    res.status(400).send(movies)
}

const exportObj = {
    getAllMovies,
    deleteMovie,
    createMovie,
    updateMovie,
}

module.exports = exportObj