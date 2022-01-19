## Movie App

- Web data APIs
- OOP
- DOM
- Callbacks
- Promises / Async await
- Fetch / AJAX
- Code splitting / JS modules
- Live search

## PART 2

- interface
- decoupled architecture
- booting
- dynamic substitution (contextual)
- service container
- DI ( Dependency Injection) / lights
- ES6+ features destructuring

## PART 3

- App Domain
- Data Hydration

## Separation

    TMDB API     LocalStorage API

      ^   |      /   ^
      |   v     V   /

| Services |
^ |
| V

| Logic | <--------------> | Domain |
^ |
| V

| Presentation |
^ |
| V

| User |

(app) | <--- data(Movie) ---> TMDBService
| <--- data(Movie) ---> StorageService

INTERFACE
<Whatever> Service
.get(options) ---> get the data / error \* returns data --> onSuccess callback
.set (options) <--- save the data / error

    * where options {
        url: ...
        method: ...
        onSuccess: ...
        onError: ...
        data: ...
    }

APPLICATION DOMAIN

    Movie
      -id
      -title
      -poster
      -description
      -year
      -rating

[APP] Movie App <--- data exchange (JSON) ---> TMDB [APP]
|
v
Object <--- data seed
|
v
<hydration>

     |
     v

Movie { from movie class}


# What is TypeScript?

* Programming language | Type | Zero Cost (memory / CPU)

# What is NodeJs ?

* Engine + Env for running JS




source.ts ----> compiler(tsc) ----> source.js ----> BROWSER