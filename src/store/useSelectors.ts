import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
  } from 'react-redux'
  import { RootState } from './store'
  
  export const useSelectors: TypedUseSelectorHook<RootState> = useReduxSelector