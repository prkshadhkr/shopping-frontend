import axios from 'axios';
import { TOKEN_IN_STORAGE } from './App.js';
import { BASE_URL } from './constants/generic';

class ShoppingApi {

  static async request(endpoint, params = {}, verb = "get"){
    let _token = localStorage.getItem(TOKEN_IN_STORAGE);

    console.debug("API call:", endpoint, params, verb);

    let req;
    if (verb === "get"){
      req = axios.get(`${BASE_URL}/${endpoint}`, { params: {_token, ...params}});
    } else if (verb === "post"){
      req = axios.post(`${BASE_URL}/${endpoint}`, {_token, ...params});
    } else if (verb === "patch"){
      req = axios.patch(`${BASE_URL}/${endpoint}`, {_token, ...params});
    }

    try {
      return (await req).data;
    } catch (err) {
      console.error("API communication error: ", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  
  static async register(data){
    let response = await this.request(`users`, data, "post");
    return response.token;
  }

  static async login(data){
    let response = await this.request(`login`, data, "post");
    return response.token;
  }

  static async updateUser(username, data){
    let response = await this.request(`users/${username}`, data, "patch");
    return response.user;
  }

  static async getCurrentUser(username){
    let response = await this.request(`users/${username}`);
    return response.user;
  }
}

export default ShoppingApi;