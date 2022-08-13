import axios from 'axios';

export default {
    callAPI: async function(url, method, data) { // exemple: await callAPI.callAPI([base url] + 'route', 'POST', request) 
        const payload = {
            url: url,
            method: method,
            data: data
        };
        return axios(payload)
    }
};