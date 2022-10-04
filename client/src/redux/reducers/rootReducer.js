import reducer from './reducer'
import {combineReducers} from 'redux'
import doctoreducer from './doctoreducer'

const rootReducer = combineReducers({reducer , doctoreducer})

export default rootReducer;