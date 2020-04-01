import {
    RequisicaoGhibli
} from '../services/RequisicaoGhibli.js'
import {
    MostrarFilmeView
} from '../views/MostrarFilmeView.js'


class MostrarFilmeController {

    static requisicao() {
        RequisicaoGhibli.listarFilmes()
            .then(filmes => filmes.forEach(filme => MostrarFilmeView.criarElementos(
                filme.title, filme.description, filme.director, filme.release_date, filme.rt_score)))
    }

}

MostrarFilmeController.requisicao()