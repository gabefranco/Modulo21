import { expect } from '@jest/globals';
import react from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('01 - Tela é renderizada corretamente', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
});