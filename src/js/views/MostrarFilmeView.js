export class MostrarFilmeView {

    static criarElementos(films) {

        const divFilmes = document.querySelector(".films")

        return divFilmes.innerHTML = films.map(({title, description, director, release_date, rt_score}) => `
            <div class="film">
                <div class="film-title">
                    <h2>${title}</h2>
                </div>

                <p class="description">${description}</p>

                <h3>Director: ${director}</h3>
                <p class="release-date">Release Date: ${release_date}</p>
                <p class="rt-score">Rotten Tomatoes: ${rt_score}</p>
            </div>
        `).join('')
    }
}