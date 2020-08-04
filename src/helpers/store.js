import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();
const initialState = {
  providers: []
};

const loadProviders = (state, action) => {
  let newProviders = action.providers
  return {
    ...state,
    providers: newProviders
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case "load":
      return loadProviders(state, action)
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);