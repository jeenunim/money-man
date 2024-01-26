import { render, screen } from '@testing-library/react';
import App from './App';

describe('tests for money man', () => {
  it('Renders money man', () => {
    const app = render(<App/>)
    const money = app.getByText('MONEY MAN')
    expect(money).toBeInTheDocument()
  })
});
