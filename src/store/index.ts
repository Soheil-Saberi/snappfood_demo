import { configureStore } from '@reduxjs/toolkit';

import cart from './cartSlice';

const store = configureStore({
  reducer: cart
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
