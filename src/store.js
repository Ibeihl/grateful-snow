import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reportReducer } from './reducers/report';
import authReducer from './reducers/auth';
import {reducer as formReducer} from 'redux-form';

export default createStore(
    combineReducers({
        report: reportReducer,
        auth: authReducer,
        form: formReducer
    }),
    applyMiddleware(thunk)
);
