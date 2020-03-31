export class MostrarFilmeView {

    static criarElementos(title, description, director, release, score) {
        const sectionFilmes = document.querySelector('.films')

        const divFilm = document.createElement('div')
        divFilm.classList.add('film')

        const divFilmTitle = document.createElement('div')
        divFilmTitle.classList.add('film-title')
        const h2FilmTitle = document.createElement('h2')

        const pDescription = document.createElement('p')
        pDescription.classList.add('description')

        const h3Director = document.createElement('h3')

        const pRelease = document.createElement('p')
        pRelease.classList.add('release-date')

        const pScore = document.createElement('p')
        pScore.classList.add('rt-score')

        divFilm.appendChild(divFilmTitle)
        divFilm.appendChild(h2FilmTitle)
        divFilm.appendChild(pDescription)
        divFilm.appendChild(h3Director)
        divFilm.appendChild(pRelease)
        divFilm.appendChild(pScore)

        sectionFilmes.appendChild(divFilm)

        divFilmTitle.appendChild(h2FilmTitle)

        h2FilmTitle.innerHTML = title
        pDescription.innerHTML = description
        h3Director.innerHTML = `Director: ${director}`
        pRelease.innerHTML = `Release Date: ${release}`
        pScore.innerHTML = `Rotten Tomatoes: ${score}`
    }
}