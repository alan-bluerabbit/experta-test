import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();
const initialState = {
  providers: [
    {
      id: 0,
      date: '16 Mar, 2019',
      name: 'Elvis Presley',
      cuit: '20-41646784-7',
      mail: 'elvis@presley.com',
      address: '111 Rosetta St.',
      phone: '+5491151234567',
      resinc: true
    }
  ]
};

const addNewProvider = (state, action) => {
  let newProviders = state.providers
  newProviders.push(action.provider)
  return {
    ...state,
    providers: newProviders
  }
}

const removeProvider = (state, action) => {
  let newProviders = state.providers
  const foundProvider = newProviders.find(provider => provider.id === action.provider.id)
  const index = newProviders.indexOf(foundProvider)
  if (index > -1) {
    newProviders.splice(index, 1);
  }
  return {
    ...state,
    providers: newProviders
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case "add":
      return addNewProvider(state, action)
    case "edit": 
      return {
        ...state
      }
    case "remove":
      return removeProvider(state, action)
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