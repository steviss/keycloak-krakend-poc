import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit'

import { reHydrateStore } from './middlewares'
import { keycloakReducer } from './reducers'
import { api } from './services'

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  keycloak: keycloakReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
  })

export const preloadedState = reHydrateStore()

export const store = setupStore(preloadedState)

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
