import {LoginRequestAction, LoginSuccessAction, LoginSuccessData, LogOutAction} from "../actions/user";
import {Reducer} from "redux";

export interface InitialState {
    isLoggingIn: boolean,
    data: LoginSuccessData | null,
    loading: boolean
}

const initialState = {
    isLoggingIn: false,
    data: null,
    loading: false
};

type UserReducerActions = LoginSuccessAction | LogOutAction | LoginRequestAction

const userReducer: Reducer<InitialState, UserReducerActions> = (prevState = initialState, action) => { // 새로운 state 만들어주기
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return {
                ...prevState,
                data: action.data,
                loading: false
            };
        case 'LOG_OUT':
            return {
                ...prevState,
                data: null,
            };
        case "LOG_IN_REQUEST": {
            return {
                ...prevState,
                loading: true
            }
        }
        default:
            return prevState;
    }
};

export default userReducer;