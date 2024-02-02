import axios from "axios";

const productionUrl="http://localhost:3000/"

const customFetch=axios.create({
    baseURL:productionUrl
})

export default customFetch