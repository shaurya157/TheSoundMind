import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import AskReducer from './ask_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    recommendations: AskReducer
});

export default RootReducer;
