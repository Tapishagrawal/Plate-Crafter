export const initState = {
    data: [],
    isLoading: false,
    isError: false,
}
export const carReducer = (state, { type, payload }) => {
    switch (type) {
        case "FETCHING_DATA_SUCCESS": {
            return {
                data: payload,
                isLoading: false,
                isError: false,
            }
        }
        case "LOEADING_STATUS": {
            return {
                data: [],
                isLoading: true,
                isError: false,
            }
        }
        case "ERROR_STATUS": {
            return {
                data: [],
                isLoading: false,
                isError: true,
            }
        }
    }
}


export const filterCardReducer = (state, {type,payload}) =>{

    switch(type){
        case "PRICE_FILTER_CHANGE":{
            return state = payload
        }
    }
}
