import renderer from 'react-test-renderer';
import { describe, expect, test } from '@jest/globals';
import { cleanup } from '@testing-library/react';
// Component
import CartHeader from './CartHeader';
// Model
import Cart from '../../../model/Cart';
// Redux
import { Provider } from 'react-redux';
import store from './../../../store/index';

afterEach(() => {
  cleanup();
});

describe('CartHeader Component', () => {
  test('Component Rendernig With Value Template (count = 1)', () => {
    const defaultValue: Cart[] = [{ productId: 1, count: 1 }];
    const cartHeader = renderer.create(
      <Provider store={store}>
        <CartHeader cartUser={defaultValue} />
      </Provider>
    );
    expect(cartHeader.toJSON()).toMatchSnapshot();
  });

  test('Component Rendernig With Empty Cart', () => {
    const defaultValue: Cart[] = [];
    const cartHeader = renderer.create(
      <Provider store={store}>
        <CartHeader cartUser={defaultValue} />
      </Provider>
    );
    expect(cartHeader.toJSON()).toBeNull();
  });
});
