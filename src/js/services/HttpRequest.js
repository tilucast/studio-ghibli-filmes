export class HttpRequest {
    constructor() {
        throw new Error(`HttpRequest is static.`)
    }

    static get(url) {
        let Fetch = fetch(url)
        return new Promise((resolve, reject) => {
            resolve(Fetch.then(data => data.json()))
            reject(Fetch.catch(err => console.log(err)))
        })
    }

    static async requisicaoGhibli() {
        try {
            const filmes = await this.get('https://ghibliapi.herokuapp.com/films')
            return filmes
        } catch (err) {
            console.log(err)
            throw new Error('Erro ao realizar a requisição à API.')
        }
    }
}