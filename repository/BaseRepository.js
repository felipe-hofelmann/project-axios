import axios from "axios"

export class BaseRepository
{
    #base_url = "http://192.168.0.141/api/";
    #api;
    #endpoint;
    constructor(endpoint)
    {
        this.#api = axios.create({baseURL:this.#base_url});
        this.#endpoint = endpoint;
    }
    
    create(model)
    {
        this.#api.post(this.#endpoint, model).then(r=>console.log(r.status));
    }
    async read()
    {
        return (await(this.#api.get(this.#endpoint).then())).data;
    }
    async readById(id)
    {
        return (await(this.#api.get(`${this.#endpoint}/${id}`).then())).data;
    }
    update(model)
    {
        this.#api.put(`${this.#endpoint}/${model.Id}`,model).then(r=>console.log(r.status));
    }
    delete(id)
    {
        this.#api.delete(`${this.#endpoint}/${id}`).then(r=>console.log(r.status));
    }
}