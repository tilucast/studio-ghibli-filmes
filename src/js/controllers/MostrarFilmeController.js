import {
    RequisicaoGhibli
} from '../services/RequisicaoGhibli.js'
import {
    MostrarFilmeView
} from '../views/MostrarFilmeView.js'


class MostrarFilmeController {

    static async requisicao() {

        try{
            const result = await RequisicaoGhibli.listarFilmes()
            return result.forEach(film => MostrarFilmeView.criarElementos(film.title, film.description, 
                film.director, film.release_date, film.rt_score))
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }

}

MostrarFilmeController.requisicao()