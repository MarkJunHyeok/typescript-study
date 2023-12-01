import {combineReducers, compose, legacy_createStore as createStore, PreloadedState} from "redux";

const initialState = {
    user: {
        isLoggingIn: false,
        data: null
    },
    posts: [],
}
const reducer = combineReducers({
    user: (state, action) => {
        switch (action.type) {
            case 'LOGIN':
                return {
                    isLoggingIn: true,
                    data: {

                    }
                }
        }
        return state
    },
    posts:(state, action) => state
})

const store = createStore(reducer, initialState);
store.dispatch({type: 'LOGIN'})
store.getState()