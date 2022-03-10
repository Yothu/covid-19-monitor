import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import Home from '../Home/Home';
import store from '../../redux/configureStore';

describe('Home page tests', () => {
  it('it renders correctly', () => {
    const home = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
