'use client'
import { Step, Stepper } from '@/components/containers/stepper'
import { useMultiStepForm } from '@/hooks/useMultiStepForm'
import StepCreateAccount from './steps/step-create-account'
import StepOneUserInfo from './steps/step-one-user-info'
import StepThreeSelectPlan from './steps/step-three-select-module'
import StepTwoCompanyInfo from './steps/step-two-company-info'

export default function Page() {
  const { currentStep, handleNext, handlePrevious } = useMultiStepForm()

  return (
    <Stepper
      currentStepIndex={currentStep}
      className="w-screen h-screen  flex flex-row justify-center items-center bg-gradient-conatus"
    >
      <Step>
        <StepCreateAccount onNext={handleNext} onPrevious={handlePrevious} />
      </Step>
      <Step>
        <StepOneUserInfo />
      </Step>
      <Step>
        <StepTwoCompanyInfo />
      </Step>
      <Step>
        <StepThreeSelectPlan />
      </Step>
    </Stepper>
  )
}
