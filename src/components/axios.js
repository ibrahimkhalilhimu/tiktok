import axios from "axios"

 const instance = axios.create({
    baseURL: "https://gentle-everglades-71982.herokuapp.com/"
})

export default instance