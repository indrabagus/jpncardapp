import axios from 'axios';
import {Config} from './jcConfig';

export const loginUrl = `${Config.url.APIBASE_URL}/login`;

export async function getToken(username,passwd){
  const result = await axios.get(`${loginUrl}`,{
    auth: {
      username: username,
      password: passwd
    }
  })
  return result.data;
}

export async function getCardData(token,urldata){
  const result = await axios.get(`${Config.url.APIBASE_URL}`+urldata,{
    headers:{
      Accept:'application/json',
      Authorization:'Token '+ token
    }
  });
  return result.data;
}