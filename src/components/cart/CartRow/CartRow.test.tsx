import renderer from 'react-test-renderer';
import { describe, expect, test } from '@jest/globals';
import { cleanup } from '@testing-library/react';
// Component
import CartRow from './CartRow';
// Utils
import Constants from '../../../utility/Constants';

afterEach(() => {
  cleanup();
});

describe('CartRow Component', () => {
  test('Component Rendernig With Value Template', () => {
    const cartRow = renderer.create(<CartRow title="هزینه دسته بندی" price={Constants.PACK_PRICE.toString()} />);
    expect(cartRow.toJSON()).toMatchSnapshot();
  });

  test('Component Rendernig With Empty Value', () => {
    const cartRow = renderer.create(<CartRow title="" price="" />);
    expect(cartRow.toJSON()).toBeNull();
  });
});
