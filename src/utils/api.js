import axios from "axios"
export const apiUrl = "http://localhost:8080/api/"
export const api = axios.create({baseURL: apiUrl})
export const endpoints = {
    read_equipos: "equipos/read",
    sign_in: "auth/signin",
    read_categories:"categories",
    read_mangas: "mangas",
}