   
    export const formInitialState = {
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
            isValid: false,
            isUpdated: false
        }
    }

export const formReducer = (state, action) => {
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
}
