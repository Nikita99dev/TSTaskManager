import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './rooReducer';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleWare = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: 
  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
