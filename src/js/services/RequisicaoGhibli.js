import {
    HttpRequest
} from './HttpRequest.js'

export class RequisicaoGhibli {
    constructor() {
        throw new Error('RequisicaoGhlibli is static.')
    }

    static async listarFilmes() {
        try {
            const filmes = await HttpRequest.get('https://ghibliapi.herokuapp.com/films')
            return filmes
        } catch (err) {
            console.log(err)
            throw new Error('Erro ao realizar a requisição à API.')
        }
    }
}