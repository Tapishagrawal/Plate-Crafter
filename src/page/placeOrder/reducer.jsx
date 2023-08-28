export const initState = {
    fname: "",
    lName: "",
    additionalAddress:"",
    streetAddress:"",
    townCity:"",
    stateplce:"",
    pinCode:"",
    ponenumber:"",
    email:""

}
export const reducer = (state, { type, paylaod }) => {
    switch (type){
        case "CHANGING_FORM_FIELD" :{
            return {...state, [paylaod.name]: paylaod.paylaod}
        }
    }
}