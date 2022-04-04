
const init = {
    Email: '',
    Password: '',
    Username: '',
    Confirm_Password: '',
    isfist: true,
    todos: [
        { id: 0, text: 'Learn React', completed: true },
        { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
}

export function counterReducer(state = init, action) {
    switch (action.type) {
        case "set_fist":
            state.isfist = false
            return state;
        case "set_Email":
            state.Email = action.Email
            console.log('set_Email: ' + [state.Email])
            return state;
        case "set_Password":
            state.Password = action.Password
            console.log('set_Password: ' + [state.Password])
            return state;
        case "set_Username":
            state.Username = action.Username
            console.log('set_Username: ' + [state.Username])
            return state;
        case "set_Confirm_Password":
            state.Confirm_Password = action.Confirm_Password
            console.log('set_Confirm_Password: ' + [state.Confirm_Password])
            return state;
        default:
            return state;
    }
}
export default counterReducer;



