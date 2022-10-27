import axios from "axios";

export const contactsAPI = axios.create({
    baseURL: 'https://6357b022c26aac906f2fe922.mockapi.io',
})