import { request } from '../RestClient';

export const authenticate = () => 
request({
    method: 'get',
    url: `${process.env.REACT_APP_MONONOTH_BASE_URL}/session/authenticated`,
    withCredentials: true,
});
