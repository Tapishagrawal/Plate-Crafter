import axios from "axios"

export const fetchData = (params={}) =>{
    return axios({
        url:`https://platecrafters-moke-api.onrender.com/bikePlates`,
        method:'get',
        params:{
            _sort:params.sortBy,
            _order:params.orderBy,
            _page:params.page,
            _limit:params.limit
        }
    })
}