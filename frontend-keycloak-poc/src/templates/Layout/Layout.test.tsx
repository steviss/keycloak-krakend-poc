import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { renderWithProviders } from 'src/tests'

import Layout from './Layout'
import { MOCK_LAYOUT_TEXT, TEST_LAYOUT_BOX_ID } from './Layout.consts'

describe('Layout Test Suite', () => {
  afterEach(() => {
    cleanup()
  })
  test('Render test', () => {
    renderWithProviders(
      <MemoryRouter>
        <Layout>
          <span>{MOCK_LAYOUT_TEXT}</span>
        </Layout>
      </MemoryRouter>,
    )
    expect(screen.getByText(/Lorem Ipsum/i)).toBeInTheDocument()
    const layoutContainer = screen.getByTestId(TEST_LAYOUT_BOX_ID)
    const styles = window.getComputedStyle(layoutContainer)
    expect(layoutContainer).toBeInTheDocument()
    expect(styles.alignItems).toBe('')
    expect(styles.justifyContent).toBe('')
  })
  test('Render test - Centered', () => {
    renderWithProviders(
      <MemoryRouter>
        <Layout type="centered">
          <span>{MOCK_LAYOUT_TEXT}</span>
        </Layout>
      </MemoryRouter>,
    )
    const layoutContainer = screen.getByTestId(TEST_LAYOUT_BOX_ID)
    const styles = window.getComputedStyle(layoutContainer)
    expect(layoutContainer).toBeInTheDocument()
    expect(styles.alignItems).toBe('center')
    expect(styles.justifyContent).toBe('center')
  })
})
