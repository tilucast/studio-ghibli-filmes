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

}