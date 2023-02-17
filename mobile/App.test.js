import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Onboarding from './pages/Onboarding';

it('renders correctly', () =>
{
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
    const tree = renderer.create(<Onboarding />).toJSON();
    expect(tree).toMatchSnapshot();
}
    
);




    