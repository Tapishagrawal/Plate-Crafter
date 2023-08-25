import axios from "axios"

export const fetchData = (params={}) =>{
    return axios({
        url:`https://platecrafters-moke-api.onrender.com/carPlates`,
        method:'get',
        params:{
            _sort:params.sortBy,
            _order:params.orderBy,
            _page:params.page,
            _limit:params.limit
        }
    })
}

export const singleProductFetchData = (id) =>{
    return axios({
        url:`https://platecrafters-moke-api.onrender.com/carPlates/${id}`,
        method:"get"
    })
}

export const FetchSliderData = (url, category) => {
    return axios({
        url:`${url}?category=${category}`,
        method:"get"
    })
}