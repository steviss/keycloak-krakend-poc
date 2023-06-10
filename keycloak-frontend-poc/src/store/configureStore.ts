import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit'

import { localStorageMiddleware, reHydrateStore } from './middlewares'
import { authReducer } from './reducers'
import { api } from './services'

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware, localStorageMiddleware.middleware),
  })

export const preloadedState = reHydrateStore()

export const store = setupStore(preloadedState)

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
