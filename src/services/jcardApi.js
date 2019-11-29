import axios from 'axios';
import {Config} from './jcConfig';

export const loginUrl = `${Config.url.APIBASE_URL}/login`;
export const apUrlRandGenki1 = '/genki/random/1';
export const apUrlRandGenki2 = '/genki/random/2';

export async function getToken(username,passwd){
  const result = await axios.get(`${loginUrl}`,{
    auth: {
      username: username,
      password: passwd
    }
  })
  return result.data;
}

export async function getCardData(token,apiurl){
  const result = await axios.get(`${Config.url.APIBASE_URL}`+apiurl,{
    headers:{
      Accept:'application/json',
      Authorization:'Token '+ token
    }
  });
  return result.data;
}