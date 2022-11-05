import { describe, expect, test } from '@jest/globals';
// Redux
import { configureStore } from '@reduxjs/toolkit';
import store from '.';
import cart, { cartActions } from './cartSlice';
// Model
import Cart from '../model/Cart';

describe('cartSlice Redux', () => {
  test('Get Default Value cartUser', () => {
    const state = store.getState().cartUser;
    const valueCartUser: Cart[] = [];
    expect(state).toEqual(valueCartUser);
  });

  test('Add To cartUser (productId = 1)', async () => {
    const store = configureStore({ reducer: cart });
    await store.dispatch(cartActions.addToCart(1));
    const state = store.getState().cartUser;
    const valueCartUser: Cart[] = [{ productId: 1, count: 1 }];
    expect(state).toEqual(valueCartUser);
  });

  test('Add Two Product To cartUser (productId = 1 , count = 2)', async () => {
    const store = configureStore({ reducer: cart });
    await store.dispatch(cartActions.addToCart(1));
    await store.dispatch(cartActions.addToCart(1));
    const state = store.getState().cartUser;
    const valueCartUser: Cart[] = [{ productId: 1, count: 2 }];
    expect(state).toEqual(valueCartUser);
  });

  test('Remove Product From cartUser (productId = 1)', async () => {
    const store = configureStore({ reducer: cart });
    await store.dispatch(cartActions.addToCart(1));
    await store.dispatch(cartActions.removeFromCart(1));
    const state = store.getState().cartUser;
    const valueCartUser: Cart[] = [];
    expect(state).toEqual(valueCartUser);
  });

  test('Remove Two Product From cartUser (productId = 1 , count =3)', async () => {
    const store = configureStore({ reducer: cart });
    await store.dispatch(cartActions.addToCart(1));
    await store.dispatch(cartActions.addToCart(1));
    await store.dispatch(cartActions.addToCart(1));
    await store.dispatch(cartActions.removeFromCart(1));
    await store.dispatch(cartActions.removeFromCart(1));
    const state = store.getState().cartUser;
    const valueCartUser: Cart[] = [{ productId: 1, count: 1 }];
    expect(state).toEqual(valueCartUser);
  });

  test('Remove All Product From cartUser', async () => {
    const store = configureStore({ reducer: cart });
    await store.dispatch(cartActions.addToCart(1));
    await store.dispatch(cartActions.addToCart(1));
    await store.dispatch(cartActions.emptyCart());
    const state = store.getState().cartUser;
    const valueCartUser: Cart[] = [];
    expect(state).toEqual(valueCartUser);
  });
});
