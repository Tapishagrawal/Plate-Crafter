export const initState = {
    id:"",
    text : "PS-26-11-5987",
    textColor : "#FFFFFF",
    bgColor: "#4492A2",
    framColor: "#4680DD",
    circleColor: "#C85151",
    textSize:"30px",
    fName: "",
    lName: "",
    licenceNO: "",
    customerId:"",
    panCard:"",
    vehicle:"",
    vehicleNo:""
}
// export const formInitState = {
    
// }


export const customPLateReducer = (state,{type, payload})=>{
    switch(type){
        case "CHANGE_PLATE_STATUS":{
            return {...state, [payload.name]:payload.value}
        }
        case "RESET_FORM":{
            return initState
        }
        case "USERFORM_CHANGES_STATE":{
            return {...state, [payload.name]:payload.payload}
        }
        case "RESET_FORM_DETAILS":{
            return initState
        }
        default:
            throw new Error("Somthin Error.")
    }
}

// export const customerFormReducer = (initState,{type,payload})=>{
//     switch(type){
//         case "USERFORM_CHANGES_STATE":{
//             return {...initState, [payload.name]:payload.payload}
//         }
//         case "RESET_FORM_DETAILS":{
//             return formInitState
//         }
//     }
// }