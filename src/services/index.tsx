import axios from 'axios';
import { TOKEN } from '../utils/constants';

import { PushMoreBody } from '../models/request';

/**
* This API is used to send a url to Telegram
* @param {Object} body
* @param {string} body.repoUrl
* @param {string} body.sender
* @return {Promise<AxiosResponse>}
*/
const pushMore = (body: PushMoreBody) => axios.post(`${TOKEN}`, body);

const apis = {
  pushMore,
}

export default apis