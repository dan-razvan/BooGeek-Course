// main module / entry point

import TMDBService from "./services/TMDBService.mjs"


const tmdbs = new TMDBService()

tmdbs.getMovies()