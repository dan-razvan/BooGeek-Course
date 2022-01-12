


import StorageService from "./services/StorageService.js"
import TMDBService from "./services/TMDBService.mjs"


// APP initialization logic
let tmdbs = new TMDBService()
const ss = new StorageService()

export { tmdbs, ss}