import axios from 'axios';

const instance = axios.create({
    //THE API(Cloud Function) URL
    // baseURL: 'http://localhost:5001/clone-e16fb/us-central1/api' DEV
    baseURL: 'https://us-central1-clone-e16fb.cloudfunctions.net/api' // PRODUCTION
})

export default instance;