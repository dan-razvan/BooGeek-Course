
class StorageService {



    get (options) {
        return JSON.parse(localStorage.getItem(url))
        
    }

    set({url, data}) {
        localStorage.setItem( url, JSON.stringify(data))
    }
}

export default StorageService;