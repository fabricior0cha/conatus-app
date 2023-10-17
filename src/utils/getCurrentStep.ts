import StepForm from '@/types/StepForm'

function getCurrentStep(steps: StepForm[], currentStep: string) {
  const step = steps.find((step) => step.value === currentStep)

  return step ?? null
}

export default getCurrentStep
