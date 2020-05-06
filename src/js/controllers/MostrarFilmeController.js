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
            return MostrarFilmeView.criarElementos(result)
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }

}

MostrarFilmeController.requisicao()