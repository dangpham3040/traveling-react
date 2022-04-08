
const init = {
    Email: '',
    Password: '',
    Username: '',
    Confirm_Password: '',
    isfist: false,
}

export function counterReducer(state = init, action) {
    switch (action.type) {
        case "set_fist":
            state.isfist = false
            return state;
        case "set_Email":
            state.Email = action.Email;
            return state;
        case "set_Password":
            state.Password = action.Password
            return state;
        case "set_Username":
            state.Username = action.Username
            return state;
        case "set_Confirm_Password":
            state.Confirm_Password = action.Confirm_Password
            return state;
        case "get":
            console.log("email: "+state.Email)
            return state;
        default:
            return state;
    }
}
export default counterReducer;



