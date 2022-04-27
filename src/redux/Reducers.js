// import * as ActionTypes from "./ActionTypes";
import { initialUserState } from './state';

export const userReducers = ( state = initialUserState, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: action.payload
            };
        case 'ADD_USERNAME':
            return {
                ...state,
                username: action.payload
            }
        case 'ADD_PHONE':
            return {
                ...state,
                phone: action.payload
            }
        case 'ADD_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        default:
            return state;
    }
};

// export const UsernameReducer = ( state = initialUserState, action) => {
//     switch (action.type) {
//         case 'ADD_USERNAME':
//             return {
//                 ...state,
//                 username: action.payload
//             };
//         default:
//             return state;
//     }
// };

// export const PhoneReducer = ( state = initialUserState, action) => {
//     switch (action.type) {
//         case 'ADD_PHONE':
//             return {
//                 ...state,
//                 phone: action.payload
//             };
//         default:
//             return state;
//     }
// };

// export const EmailReducer = ( state = initialUserState, action) => {
//     switch (action.type) {
//         case 'ADD_EMAIL':
//             return {
//                 ...state,
//                 email: action.payload
//             };
//         default:
//             return state;
//     }
// };