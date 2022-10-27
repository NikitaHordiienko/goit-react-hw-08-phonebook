import axios from "axios";

export const contactsAPI = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
})