import axios from 'axios';

export const request = ({method,url, withCredentials}) => axios({method,url, withCredentials})