import { useState } from 'react'

export function useMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevious = () => {
    if (currentStep === 0) return
    setCurrentStep((prev) => prev - 1)
  }

  return { currentStep, handleNext, handlePrevious }
}
