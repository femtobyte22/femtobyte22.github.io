const cards = document.querySelectorAll(".card");
const preloader = document.querySelector(".preloader")
const pageURL = [
    'free_stream/index.html',
    'countdown/index.html',
    'webmodel1/index.html',
    'games-tictactoe/index.html'
]
for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
        window.open(`https://femtobyte22.github.io/${pageURL[i]}`)
    }
}
window.addEventListener("load", function () {
    preloader.style.display = 'none'
})