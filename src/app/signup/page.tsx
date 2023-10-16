'use client'
import { FormProvider, useForm } from 'react-hook-form'
import StepCreateAccount from './steps/StepCreateAccount'
import FormSignup from '@/types/FormSignup'
import { zodResolver } from '@hookform/resolvers/zod'
import SignupSchema from '@/validations/SignupSchema'

export default function Page() {
  const methods = useForm<FormSignup>({
    defaultValues: {
      nome: '',
      email: '',
      senha: ''
    },
    resolver: zodResolver(SignupSchema)
  })
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods?.handleSubmit((data) => console.log(data))}>
        <div className="w-screen h-screen  flex flex-row justify-center items-center bg-gradient-conatus">
          <StepCreateAccount />
        </div>
      </form>
    </FormProvider>
  )
}
