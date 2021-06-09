import axios from 'axios';

const api = axios.create({ baseURL: 'https://my-health-1623118445103.azurewebsites.net/' });

export default api;