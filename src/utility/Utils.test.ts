import { describe, expect, test } from '@jest/globals';
import { camaPrice, toFarsi } from './Utils';

describe('toFarsi Method', () => {
  test('Convert English Number to Persian Number Matched (String)', () => {
    expect(toFarsi('123')).toMatch('۱۲۳');
  });

  test('0 Input Argument', () => {
    expect(toFarsi('0')).toMatch('۰');
  });

  test('Less Than 0 Input Argument', () => {
    expect(toFarsi('-1')).toMatch('-۱');
  });

  test('Character Input Argument', () => {
    expect(toFarsi('hi')).toBeNull();
  });

  test('Empty String Input Argument', () => {
    expect(toFarsi('')).toBeNull();
  });
});

describe('camaPrice Method', () => {
  test('Add Cama To Price', () => {
    expect(camaPrice('123000')).toMatch('۱۲۳,۰۰۰');
  });

  test('0 Input Argument', () => {
    expect(camaPrice('0')).toMatch('۰');
  });

  test('Less Than 0 Input Argument', () => {
    expect(camaPrice('-1')).toMatch('-۱');
  });

  test('Character Input Argument', () => {
    expect(camaPrice('hi')).toBeNull();
  });

  test('Empty String Input Argument', () => {
    expect(camaPrice('')).toBeNull();
  });
});
