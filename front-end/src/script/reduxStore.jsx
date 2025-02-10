import  { configureStore} from '@reduxjs/toolkit';
import { ReduxReducer } from './reduxReducer';






export const store = configureStore({
  reducer:ReduxReducer
});

/*store.subscribe(()=>{
  console.log(store.getState())
})*/