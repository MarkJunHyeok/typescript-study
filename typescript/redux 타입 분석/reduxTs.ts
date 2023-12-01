import {
    legacy_createStore as createStore,
    compose,
    applyMiddleware,
    Middleware,
    Reducer,
    CombinedState,
    PreloadedState
} from 'redux';
import reducer from './reducers';
import {logIn, logOut} from './actions/user';
import {addPost, AddPostData} from "./actions/post";
import {ThunkMiddleware} from "redux-thunk";

const initialState = {
    user: {
        isLoggingIn: false,
        data: null,
        loading: false
    },
    posts: [],
};

const firstMiddleware: Middleware = (store) => (next) => (action) => {
    console.log('로깅', action);
    next(action);
};

const thunkMiddleware: Middleware = (store) => (next) => (action) => {
    if (typeof action === 'function') { // 비동기
        return action(store.dispatch, store.getState);
    }
    return next(action); // 동기
};

const enhancer = applyMiddleware(
    firstMiddleware,
    thunkMiddleware as ThunkMiddleware,
);

const store = createStore(reducer, initialState, enhancer);

console.log('1st', store.getState());

// --------------------------------------


store.dispatch(logIn({
    nickname: 'zerocho',
    password: '1234'
}));
console.log('2nd', store.getState());

store.dispatch(addPost({
    title: 'hi',
    content: '안녕하세요. 리덕스',
}));
console.log('3rd', store.getState());
store.dispatch(addPost({
    title: 'hi',
    content: '두번째 리덕스',
}));
console.log('4th', store.getState());

store.dispatch(logOut());
console.log('5th', store.getState());