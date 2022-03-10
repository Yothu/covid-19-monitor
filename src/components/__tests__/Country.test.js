import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import Country from '../Country/Country';
import store from '../../redux/configureStore';

describe('Country section tests', () => {
  it('it renders correctly', () => {
    const country = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Country />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(country).toMatchSnapshot();
  });
});
