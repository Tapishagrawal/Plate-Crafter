import axios from "axios"

export const fetchData = (params={}) =>{
    let greater = "", less=null
        if(params.filtersState==="below500"){
            less=500
        }
        else if(params.filtersState==="500-2000"){
            less=2000
            greater = 500
        }
        else if(params.filtersState==="2000-4000"){
            less=4000
            greater = 2000
        }
        else if(params.filtersState==="4000-6000"){
            less=6000
            greater = 4000
        }
        else if(params.filtersState==="6000-8000"){
            less=8000
            greater = 6000
        }
        else if(params.filtersState==="above8000"){
            greater = 8000
            less=null
        }
    return axios({
        url:`https://platecrafters-moke-api.onrender.com/bikePlates`,
        method:'get',
        params:{
            _sort:params.sortBy,
            _order:params.orderBy,
            _page:params.page,
            _limit:params.limit,
            price_gte:greater,
            price_lte:less,
            
        }
    })
}

export const singleProductFetchData = (id) =>{
    return axios({
        url:`https://platecrafters-moke-api.onrender.com/bikePlates/${id}`,
        method:"get"
    })
}