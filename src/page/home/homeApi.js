import axios from "axios"

export const fetchCustomerReviewData = (URL) =>{
    return axios({
        url: URL,
        method: 'get',
    })
} 

