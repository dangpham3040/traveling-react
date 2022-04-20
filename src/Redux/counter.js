
const today = new Date();
const init = {
    Email: '',
    Password: '',
    Username: '',
    Confirm_Password: '',
    isfist: true,
    islogin: false,
    isdim: 0,
    DATA: [
        {
            id: 0,
            pic: require('../static/images/Silder1.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'Ben Nha Rong',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE',
            star: 2
        },
        {
            id: 1,
            pic: require('../static/images/Silder2.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'Ben Nha Rong',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE',
            star: 3
        },
        {
            id: 2,
            pic: require('../static/images/Silder3.png'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'Ben Nha Rong',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE',
            star: 4
        },
        {
            id: 3,
            pic: require('../static/images/Silder4.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'Ben Nha Rong',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE',
            star: 5
        },
        {
            id: 4,
            pic: require('../static/images/Silder5.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'Ben Nha Rong',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE',
            star: 1
        },
        {
            id: 5,
            pic: require('../static/images/Silder6.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'Ben Nha Rong',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE',
            star: 2
        },
        {
            id: 6,
            pic: require('../static/images/Silder7.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'Ben Nha Rong',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE',
            star: 2
        },
        {
            id: 7,
            pic: require('../static/images/Silder8.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'Ben Nha Rong',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE',
            star: 1
        },
    ],
    TYPE: [
        {
            id: 0,
            pic: require('../static/images/type1.jpeg'),
            name: 'Must Do'
        },
        {
            id: 1,
            pic: require('../static/images/type2.jpeg'),
            name: 'Eat & Drink'
        },
        {
            id: 2,
            pic: require('../static/images/type3.jpeg'),
            name: 'Festival & Event'
        },
        {
            id: 3,
            pic: require('../static/images/type4.jpeg'),
            name: 'Stay'
        },
        {
            id: 4,
            pic: require('../static/images/type5.jpeg'),
            name: 'Transportation'
        },
    ],
    HOTNEW: [
        {
            id: 0,
            pic: require('../static/images/hotnew1.jpeg'),

        },
        {
            id: 1,
            pic: require('../static/images/hotnew2.jpeg'),

        },
        {
            id: 2,
            pic: require('../static/images/hotnew3.jpeg'),

        },
        {
            id: 3,
            pic: require('../static/images/hotnew4.jpeg'),

        },
    ],
    TOPPLACE: [
        {
            id: 0,
            pic: require('../static/images/TopPlaces1.png'),
        },
        {
            id: 1,
            pic: require('../static/images/TopPlaces2.png'),
        },
    ],
    TOPPOP: [
        {
            id: 0,
            pic: require('../static/images/pop1.jpeg'),

        },
        {
            id: 1,
            pic: require('../static/images/pop2.jpeg'),

        },
        {
            id: 2,
            pic: require('../static/images/pop3.jpeg'),

        },
        {
            id: 3,
            pic: require('../static/images/pop3.jpeg'),

        },
    ],
    DAY: [
        {
            id: 0,
            temperature1: 23,
            temperature2: 30,
            day: 'SUNDAY'
        },
        {
            id: 1,
            temperature1: 23,
            temperature2: 30,
            day: 'MONDAY'
        },
        {
            id: 2,
            temperature1: 23,
            temperature2: 30,
            day: 'TUESDAY'
        },
        {
            id: 3,
            temperature1: 23,
            temperature2: 30,
            day: 'WEDNESDAY'
        },
        {
            id: 4,
            temperature1: 23,
            temperature2: 30,
            day: 'THURSDAY'
        },
        {
            id: 5,
            temperature1: 23,
            temperature2: 30,
            day: 'FRIDAY'
        },
        {
            id: 6,
            temperature1: 23,
            temperature2: 30,
            day: 'SATURDAY'
        },

    ],
    Country: [
        {
            name: 'USA',
            currency: 'USD',
            pic: require('../static/images/usa.png'),
        },
        {
            name: 'Brunei',
            currency: 'BND',
            pic: require('../static/images/Brunei.png'),
        },
        {
            name: 'Canada',
            currency: 'CND',
            pic: require('../static/images/Canada.png'),
        },
        {
            name: 'Brazil',
            currency: 'BRL',
            pic: require('../static/images/Brazil.png'),
        },
        {
            name: 'Denmark',
            currency: 'DKK',
            pic: require('../static/images/Denmark.png'),
        },
        {
            name: 'Bangladesh',
            currency: 'USD',
            pic: require('../static/images/Bangladesh.png'),
        },
        {
            name: 'Belgium',
            currency: 'BHD',
            pic: require('../static/images/Belgium.png'),
        },
        {
            name: 'Bahrain',
            currency: 'BHD',
            pic: require('../static/images/Bahrain.png'),
        },
        {
            name: 'Australia',
            currency: 'AUD',
            pic: require('../static/images/Australia.png'),
        },
        {
            name: 'China',
            currency: 'CNY',
            pic: require('../static/images/China.png'),
        },
        {
            name: 'Japan',
            currency: 'JPY',
            pic: require('../static/images/Japan.png'),
        },

    ],
    WHATNEW: [
        {
            pic: require('../static/images/whatnew1.jpeg'),
            name: 'SAIGON CENTRAL POST OFFICE',
        },
        {
            pic: require('../static/images/whatnew2.jpeg'),
            name: 'SAIGON CENTRAL POST OFFICE',
        },
        {
            pic: require('../static/images/whatnew3.jpeg'),
            name: 'SAIGON CENTRAL POST OFFICE',
        },
        {
            pic: require('../static/images/whatnew4.jpeg'),
            name: 'SAIGON CENTRAL POST OFFICE',
        },
    ],
    TYPES: ['ALL', 'Must Do', 'Eat & Drink', 'Festival & Event', 'Stay', 'Transportation'],
    DAYNUMBER: ['1', '2', '3', '4', '5', '6', '7'],
    starday: today,
    endday: today
}
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
export function counterReducer(state = init, action) {
    switch (action.type) {
        case "set_fist":
            state.isfist = false
            return {...state};
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
        case "login":
            state.islogin = true
            return state;
        case "logout":
            state.islogin = false
            return state;
        case "set_dim":
            state.isdim =1
            return state;
        case 'starday':
            state.starday = action.day
            return state;
        case 'endday':
            state.endday = action.day
            return state;
        default:
            return state;
    }
}
export default counterReducer;



