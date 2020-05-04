export class HttpRequest {
    constructor() {
        throw new Error(`HttpRequest is static.`)
    }

    static async get(url) {

        try{
            const result = await fetch(url)
            return result.json()
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }

}