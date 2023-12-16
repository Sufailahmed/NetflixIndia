import axios from "axios"
const instents=axios.create({
    baseURL:"https://api.themoviedb.org/3",
})
export default instents