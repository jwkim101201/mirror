import { render, queryByAttribute } from '@testing-library/react'
import App from './App'

it('app has all elements', () => {
  const { container, getByText } = render(<App />)
  const getById = queryByAttribute.bind(null, 'id')
  
  const newDesignBtn = getByText('New Design')
  const openDesignBtn = getById(container as HTMLElement, 'fileInput')

  expect(newDesignBtn).toBeInTheDocument()
  expect(openDesignBtn).toBeInTheDocument()
})
