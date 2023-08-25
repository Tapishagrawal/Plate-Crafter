export const initState = {
    data: [],
    isLoading: false,
    isError: false,
}
export const bikeReducer = (state, { type, payload }) => {
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
