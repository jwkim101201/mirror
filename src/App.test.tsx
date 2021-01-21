import { render } from '@testing-library/react'
import App from './pages/App'

it('app has all elements', () => {
  const { getByText } = render(<App />)
  
  const title = getByText('Mirror')
  const newDesignBtn = getByText('New Design')
  const openDesignBtn = getByText('Open Design')

  expect(title).toBeInTheDocument()
  expect(newDesignBtn).toBeInTheDocument()
  expect(openDesignBtn).toBeInTheDocument()
})
