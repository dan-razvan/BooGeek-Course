// es6 modules

class TMDBService {

    constructor (){
        this.accessKey = "?api_key=ff701bbe69e6eb8260529e58737a2533";
        this.baseUrl = "https://api.themoviedb.org/3"


        // this.baseUrl = "https://api.themoviedb.org/3&quot" - NU REUSESC cu acest url.
    }
    getMovies () {

  
        console.log("{This is the data}")
    }

    get (options) {
        let request = new XMLHttpRequest();
        
        //aici am concatenat astfel incat sa nu primesc eroare si desi primesc un rezultat, nu cred ca e cel dorit
        request.open(options.method, `${this.baseUrl}${options.url}${this.accessKey}`)
        request.send()

        request.onload = () => {
            let data = JSON.parse(request.responseText)
            options.onSuccess(data)
        }
        // onError hw
    }
    set(options) {
        
    }
}

// `https://api.themoviedb.org/3/movie/latest?api_key=ff701bbe69e6eb8260529e58737a2533`



export default TMDBService
