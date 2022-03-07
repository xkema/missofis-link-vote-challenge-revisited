import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { createMemoryHistory } from 'history'
import { BrowserRouter } from 'react-router-dom';


describe(`App.test.js`, () => {
  test('renders nav menu links', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>,
    );    
    const linkElementHome = screen.getByText(/Home/);
    const linkElementAdd = screen.getByText(/\+ Submit Link/);
    expect(linkElementHome).toBeInTheDocument();
    expect(linkElementAdd).toBeInTheDocument();
  });
});
