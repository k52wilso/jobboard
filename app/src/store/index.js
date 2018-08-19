import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index';
​
const loggerMiddleware = createLogger()
​
export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState
  )
}