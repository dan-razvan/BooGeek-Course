
import {tmdbs, ss} from "./boot.mjs"

tmdbs.getMovies()

tmdbs.get({
    url: "/movie/latest",
    method: "GET",
    onSuccess: (data) => {
        // console.log(data)
        
        ss.set({url:"/movie/popular",data})
        }
})