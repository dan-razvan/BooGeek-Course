const container = document.querySelector(".container")
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const button = document.getElementById("button")

// const quotes = [
//     {
//         "Nelson Mandela": "The greatest glory in living lies not in never falling, but in rising every time we fall."
//     },
//     {
//         "James Cameron": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
//     },
//     {
//         "Robert Louis Stevenson": "Don't judge each day by the harvest you reap but by the seeds that you plant."
//     },
//     {
//         "Benjamin Franklin": "Tell me and I forget. Teach me and I remember. Involve me and I learn."
//     },
//     {
//         "Abraham Lincoln": "In the end, it's not the years in your life that count. It's the life in your years."
//     },
//     {
//         "Thomas A. Edison": "Many of life's failures are people who did not realize how close they were to success when they gave up."
//     },
//     {
//         "Franklin D. Roosevelt": "The only limit to our realization of tomorrow will be our doubts of today"
//     },

// ]

const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote:  "The only limit to our realization of tomorrow will be our doubts of today",
        author: "Franklin D. Roosevelt"
    },

]

const getRandom = (arr) => {
    return Math.floor(Math.random() * arr.length)
}

button.addEventListener("click", () => {
    let random  = getRandom(quotes)
    // quote.removeChild()
    quote.innerHTML =  `${quotes[random].quote}`
    author.innerHTML = `${quotes[random].author}`
})