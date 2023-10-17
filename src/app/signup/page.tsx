'use client'
import { FormProvider, useForm } from 'react-hook-form'
import StepCreateAccount from './steps/StepCreateAccount'
import FormSignup from '@/types/FormSignup'
import { zodResolver } from '@hookform/resolvers/zod'
import SignupSchema from '@/validations/SignupSchema'
import StepForm from '@/types/StepForm'
import getCurrentStep from '@/utils/getCurrentStep'
import StepOneUserInfo from './steps/StepOneUserInfo'
import StepTwoCompanyInfo from './steps/StepTwoCompanyInfo'

export default function Page() {
  const steps: StepForm[] = [
    {
      value: 'CREATE_ACCOUNT',
      schema: SignupSchema,
      step: StepCreateAccount,
      nextStep: 'USER_INFO'
    },
    {
      value: 'USER_INFO',
      schema: SignupSchema,
      step: StepOneUserInfo,
      nextStep: 'COMPANY_INFO',
      previousStep: 'CREATE_ACCOUNT'
    },
    {
      value: 'COMPANY_INFO',
      schema: SignupSchema,
      step: StepTwoCompanyInfo,
      nextStep: 'SELECT_PLAN',
      previousStep: 'USER_INFO'
    }
  ]

  const methods = useForm<FormSignup>({
    defaultValues: {
      nome: '',
      email: '',
      senha: '',
      step: 'CREATE_ACCOUNT'
    },
    resolver: zodResolver(SignupSchema)
  })

  const currentStep = getCurrentStep(steps, methods?.watch('step'))

  const RenderedStep = currentStep?.step

  const onSubmit = (data: FormSignup) => {
    if (currentStep?.nextStep) {
      console.log(data)
      methods?.setValue('step', currentStep?.nextStep)
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods?.handleSubmit(onSubmit)}>
        <div className="w-screen h-screen  flex flex-row justify-center items-center bg-gradient-conatus">
          {RenderedStep && <RenderedStep />}
        </div>
      </form>
    </FormProvider>
  )
}
