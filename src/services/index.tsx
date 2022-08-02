import axios from 'axios';
import { BASE_URL, TOKEN } from '../utils/constants';

import { PushMoreBody } from '../models/request';

/**
* This API is used to send a url to Telegram
* @param {Object} body
* @param {string} body.repoUrl
* @param {string} body.sender
* @return {Promise<AxiosResponse>}
*/
const pushMore = (body: PushMoreBody) => axios.post(`${BASE_URL}/${TOKEN}`, body, {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const apis = {
  pushMore,
}

export default apis