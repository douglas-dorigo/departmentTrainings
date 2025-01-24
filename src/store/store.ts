import { createStore, combineReducers, ActionFromReducer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { dataReducer } from './data'
import { trainingReducer } from './trainings'

export const rootReducer = combineReducers({
  data: dataReducer,
  trainings: trainingReducer,
})

export type AppState = ReturnType<typeof rootReducer>
type Store = ReturnType<typeof getStore>

export type AppDispatch = Store['dispatch']
export type GetAppState = Store['getState']
export type AppActions = ActionFromReducer<typeof rootReducer>

export const getStore = () => {
  return createStore(rootReducer, composeWithDevTools({
    name: "Redux-HR-Department",
  }))
}
