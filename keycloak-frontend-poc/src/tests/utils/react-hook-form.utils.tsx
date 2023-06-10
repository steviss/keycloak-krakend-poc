import { render } from '@testing-library/react'
import React, { PropsWithChildren } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'

interface ExtendedRenderOptions {
  defaultValues?: FieldValues[]
  mockSubmitFunction?: (data: FieldValues[]) => Promise<void>
}

function renderWithReactHookForm(ui: React.ReactElement, { defaultValues, mockSubmitFunction }: ExtendedRenderOptions = {}) {
  const Wrapper = ({ children }: PropsWithChildren<unknown>) => {
    const methods = useForm({ defaultValues })
    const { handleSubmit } = methods
    const onSubmit = mockSubmitFunction
      ? handleSubmit(async data => mockSubmitFunction(data))
      : handleSubmit(async () =>
          // eslint-disable-next-line no-console
          console.warn('No mock submit function')
        )
    return (
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>{children}</form>
      </FormProvider>
    )
  }

  return {
    ...render(ui, { wrapper: Wrapper }),
  }
}

export default renderWithReactHookForm
