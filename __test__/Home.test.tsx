import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

test('should have Next.js', () => {
  render(<Page />) // ARRANGE

  const myElem = screen.getByText('Next.js Learn Course') // ACT

  expect(myElem).toBeInTheDocument();
})