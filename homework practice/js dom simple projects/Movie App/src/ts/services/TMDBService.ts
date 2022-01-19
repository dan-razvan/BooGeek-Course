// es6 modules

class TMDBService {
    accessKey: string;
    baseUrl: string;

    constructor (){
        this.accessKey = "?api_key=ff701bbe69e6eb8260529e58737a2533";
        this.baseUrl = "https://api.themoviedb.org/3"

    }

    get ({method, url, onSuccess}) {
        let request = new XMLHttpRequest();
        

        request.open(method, `${this.baseUrl}${url}${this.accessKey}`)
        request.send()

        request.onload = () => {
            let data = JSON.parse(request.responseText)
            onSuccess(data)
        }
        // onError ... hw
    }
    set(options) {
        // ... HW
    }
}

// `https://api.themoviedb.org/3/movie/latest?api_key=ff701bbe69e6eb8260529e58737a2533`



export default TMDBService
