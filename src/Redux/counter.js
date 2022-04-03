
const initProduct = {
    Email: '',
    Password: '',
    Username: '',
    Confirm_Password: '',
    isfist: true
}

export const counterReducer = (state = initProduct, action) => {
    switch (action.type) {
        case "set_fist":
            initProduct.isfist = false
            console.log(initProduct.isfist + "")
            return initProduct;
        default:
            return initProduct.isfist;

    }
}
export default counterReducer;