import axios from 'axios'
// importujem axios

export default class Repos {
    constructor () {
      axios.defaults.baseURL = 'https://api.github.com/'
      // definisem default url na koji ce se nastavljati http requesti
    }

    getRepos(username) {
        return axios.get(`users/${username}/repos`)
    }


}
export const gitHub = new Repos ()