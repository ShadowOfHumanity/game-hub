import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {key: "597bd1e720af4513b6dddd0fb9ce8562"}
})

