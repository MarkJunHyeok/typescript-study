import {AnyAction} from "redux";
import {Dispatch} from "react";

export const logIn = (data: LoginRequestData) => { // async action creator
    return (dispatch : Dispatch<AnyAction>, getState: () => any) => { // async action
        dispatch(logInRequest(data));
        try {
            setTimeout(() => {
                dispatch(logInSuccess({
                    userId: 1,
                    nickname: 'zerocho'
                }));
            }, 2000);
        } catch (e) {
            dispatch(logInFailure(e as LoginFailureError));
        }
    };
};

export type LoginRequestData = {nickname: string, password: string}
export type LoginRequestAction = {type: 'LOG_IN_REQUEST', data: LoginRequestData}
const logInRequest = (data: LoginRequestData) : LoginRequestAction => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
};

export type LoginSuccessData = {userId: number, nickname: string}
export type LoginSuccessAction = {
    type: 'LOG_IN_SUCCESS',
    data: LoginSuccessData
}
const logInSuccess = (data: LoginSuccessData) : LoginSuccessAction => {
    return {
        type: 'LOG_IN_SUCCESS',
        data,
    }
};

export type LoginFailureError = {message: string}
export type LoginFailureAction = {
    type: 'LOG_IN_FAILURE',
    error: LoginFailureError
}
const logInFailure = (error: LoginFailureError): LoginFailureAction => {
    return {
        type: 'LOG_IN_FAILURE',
        error,
    }
};


export type LogOutAction = {
    type: 'LOG_OUT'
}
export const logOut = () : LogOutAction => {
    return { // action
        type: 'LOG_OUT',
    };
};

export default {
    logIn,
    logOut,
};