import axios  from "axios";

const apiClient = axios.create({
    baseURL: "https://portfolio-navy-pi-28.vercel.app/api/v1"
})

export default apiClient;