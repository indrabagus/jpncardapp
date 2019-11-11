import axios from 'axios';

export const baseUrl = "https://qambing.com/rest-api/v0.1";
export const loginUrl = `${baseUrl}/login`;

export async function getToken(username,passwd){
  const result = await axios.get(`${loginUrl}`,{
                  auth: {
                    username: username,
                    password: passwd
                  }})
  return result.data;
}