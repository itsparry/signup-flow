import { createStore, combineReducers } from "redux";
import { userReducers } from "./Reducers";

// const configureStore = () => {

export const store = createStore(userReducers)    

    //     combineReducers({
    //         age: AgeReducer,
    //         username: UsernameReducer,
    //         phone: PhoneReducer,
    //         email: EmailReducer,
            
           
    //     })         
    // )

// export const store = configureStore()
