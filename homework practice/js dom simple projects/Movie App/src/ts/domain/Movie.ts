export class Movie {
    id: number;
    title: string;
    rating: number;
    year: number;
    poster: string;
    language: string;

    constructor(id:number, title:string, rating:number, year:number, poster: string, language:string){
        	this.id = id;
            this.title = title;
            this.rating = rating;
            this.year = year;
            this.poster = poster;
            this.language = language;
    }

    get name () {
        return this.title;
    }

    set name(name){
        this.title = name;
    }

    showPoster(){
        return this.poster;
    }
}