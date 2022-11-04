import renderer from 'react-test-renderer';
import { describe, expect, test } from '@jest/globals';
import { cleanup } from '@testing-library/react';
import CategoryItem from './CategoryItem';
import Category from '../../../model/Category';

afterEach(() => {
  cleanup();
});

describe('CategoryItem Component', () => {
  test('Component Rendernig With Value Template', () => {
    const categoryValue: Category = {
      id: 1,
      title: 'پیتزا',
      img: '../assets/images/pizza.png',
      alt: 'pizza-icon'
    };
    const categoryItem = renderer.create(<CategoryItem category={categoryValue} />);
    expect(categoryItem.toJSON()).toMatchSnapshot();
  });

  test('Component Rendernig With Empty title', () => {
    const categoryValue: Category = {
      id: 1,
      title: '',
      img: '../assets/images/pizza.png',
      alt: 'pizza-icon'
    };
    const categoryItem = renderer.create(<CategoryItem category={categoryValue} />);
    expect(categoryItem.toJSON()).toBeNull();
  });
});
