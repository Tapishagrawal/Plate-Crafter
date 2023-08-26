    import axios from "axios"

    export const fetchData = (params={}) =>{
        let greater = "", less=null
        if(params.filtersState==="below2999"){
            less=2999
        }
        else if(params.filtersState==="3000-4000"){
            less=4000
            greater = 3000
        }
        else if(params.filtersState==="4000-6000"){
            less=6000
            greater = 4000
        }
        else if(params.filtersState==="6000-8000"){
            less=8000
            greater = 6000
        }
        else if(params.filtersState==="8000-10000"){
            less=10000
            greater = 8000
        }
        else if(params.filtersState==="above10000"){
            greater = 10000
            less=null
        }
        return axios({
            url:`https://platecrafters-moke-api.onrender.com/carPlates`,
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