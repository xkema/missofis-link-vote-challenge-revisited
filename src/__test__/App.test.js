import { render, screen } from '@testing-library/react';
import App from '../App';
import { createMemoryHistory } from 'history'
import { BrowserRouter } from 'react-router-dom';


describe(`App.test.js`, () => {
  test('renders learn react link', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>,
    );    
    const linkElementHome = screen.getByText(/home/);
    const linkElementAdd = screen.getByText(/add/);
    expect(linkElementHome).toBeInTheDocument();
    expect(linkElementAdd).toBeInTheDocument();
  });
});
