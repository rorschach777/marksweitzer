   
    export const formInitialState = {
        formIsValid: false,
        firstName : {
            value: '',
            isValid: false,
            isUpdated: false
        },
        lastName : {
            value: '',
            isValid: false,
            isUpdated: false
        },
        email : {
            value: '',
            isValid: false,
            isUpdated: false
        },
        message : {
            value: '',
            isValid: true,
            isUpdated: false
        }
    }


export const formReducer = (state, action) => {
    if(action.type === "UPDATE_FORM_VALIDITY"){
        return{
            ...state,
            formIsValid : action.payload.value
        };
    }
    if(action.type === "UPDATE_FIRST_NAME"){
        return{
            ...state,
            firstName : {
                ...state.firstName,
                value: action.payload.value,
                isValid: action.payload.isValid,
                isUpdated: action.payload.isUpdated
            }
        }
    }
    if(action.type === "UPDATE_LAST_NAME"){
        return{
            ...state,
            lastName : {
                ...state.lastName,
                value: action.payload.value,
                isValid: action.payload.isValid,
                isUpdated: action.payload.isUpdated
            }
        }
    }
    if(action.type === "UPDATE_EMAIL"){
        return{
            ...state,
            email : {
                ...state.email,
                value: action.payload.value,
                isValid: action.payload.isValid,
                isUpdated: action.payload.isUpdated
            }
        }
    }
    if(action.type === "UPDATE_MESSAGE"){
        return{
            ...state,
            message : {
                ...state.message,
                value: action.payload.value,
                isUpdated: action.payload.isUpdated
            }
        }
    }
}
