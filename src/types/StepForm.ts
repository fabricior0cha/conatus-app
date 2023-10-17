import { AnyZodObject } from 'zod'

interface StepForm {
  value: string
  step: () => React.JSX.Element
  schema: AnyZodObject
  nextStep: string
  previousStep?: string
}

export default StepForm
