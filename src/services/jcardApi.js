import axios from 'axios';
import {Config} from './jcConfig';

export const loginUrl = `${Config.url.APIBASE_URL}/login`;

export async function getToken(username,passwd){
  const result = await axios.get(`${loginUrl}`,{
                  auth: {
                    username: username,
                    password: passwd
                  }})
  return result.data;
}