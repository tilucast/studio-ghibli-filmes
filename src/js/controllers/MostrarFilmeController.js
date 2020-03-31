import {
    HttpRequest
} from '../services/HttpRequest.js'
import {
    MostrarFilmeView
} from '../views/MostrarFilmeView.js'


class MostrarFilmeController {

    static requisicao() {
        HttpRequest.requisicaoGhibli()
            .then(filmes => filmes.forEach(filme => MostrarFilmeView.criarElementos(
                filme.title, filme.description, filme.director, filme.release_date, filme.rt_score)))
    }

}

MostrarFilmeController.requisicao()