
const initProduct = {
    Email: 'd',
    Password: '',
    Username: '',
    Confirm_Password: '',
    isfist: true
}

export const counterReducer = (state = initProduct, action) => {
    switch (action.type) {
        case "set_fist":
            state = false
            return state;
        default:
            return state;

    }
}
export default counterReducer;