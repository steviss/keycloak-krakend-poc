import { Provider, createContext, useContext } from 'react'

function createStore<T>() {
  const Context = createContext<T | undefined>(undefined)
  function useStoreContext() {
    const context = useContext(Context)
    if (context === undefined) {
      throw new Error(`Context Provider for Store is missing`)
    }
    return context
  }

  return [Context.Provider, useStoreContext] as [Provider<T>, () => T]
}

export default createStore
