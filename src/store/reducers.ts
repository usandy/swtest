import { combineReducers } from 'redux'

import people from './people/reducer'
import person from './person/reducer'

export const rootReducer = combineReducers({
  people,
  person,
})
