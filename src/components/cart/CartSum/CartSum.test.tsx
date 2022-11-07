import renderer from 'react-test-renderer';
import { describe, expect, test } from '@jest/globals';
import { cleanup } from '@testing-library/react';
// Component
import CartSum from './CartSum';

afterEach(() => {
  cleanup();
});

describe('CartRow Component', () => {
  test('Component Rendernig With Value Template', () => {
    const cartSum = renderer.create(<CartSum sum="500000" />);
    expect(cartSum.toJSON()).toMatchSnapshot();
  });

  test('Component Rendernig With Empty Value', () => {
    const cartSum = renderer.create(<CartSum sum="" />);
    expect(cartSum.toJSON()).toBeNull();
  });
});
