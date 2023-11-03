import FormStore from './formStore'

interface StepFormStore<T> extends FormStore<T> {
  step: number
  setStep?: (step: number) => void
  nextStep: () => void
  prevStep: () => void
}

export default StepFormStore
