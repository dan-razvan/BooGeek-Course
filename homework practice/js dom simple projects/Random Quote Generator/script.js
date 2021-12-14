const container = document.querySelector(".container")
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const button = document.getElementById("button")

const quotes = [
    {
        "Nelson Mandela": "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        "James Cameron": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    },
    {
        "Robert Louis Stevenson": "Don't judge each day by the harvest you reap but by the seeds that you plant."
    },
    {
        "Benjamin Franklin": "Tell me and I forget. Teach me and I remember. Involve me and I learn."
    },
    {
        "Abraham Lincoln": "In the end, it's not the years in your life that count. It's the life in your years."
    },
    {
        "Thomas A. Edison": "Many of life's failures are people who did not realize how close they were to success when they gave up."
    },
    {
        "Franklin D. Roosevelt": "The only limit to our realization of tomorrow will be our doubts of today"
    },

]

const getRandom = (arr) => {
    return Math.floor(Math.random() * arr.length)
}

button.addEventListener("click", () => {
    let random  = getRandom(quotes)
    // quote.removeChild()
    quote.textContent =  Object.values(quotes[random])
    author.innerHTML = Object.keys(quotes[random]) 
})