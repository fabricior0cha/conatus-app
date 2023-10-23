'use client'
import FormSignin from '@/types/signin/FormSignin'
import { SchemaSignin } from '@/validations/signin/schemaSignin'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import SignIn from './cards/sign-in'

export default function Page() {
  const methods = useForm<FormSignin>({
    resolver: zodResolver(SchemaSignin)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods?.handleSubmit((data) => console.log(data))}>
        <div className="w-screen h-screen  flex flex-row justify-center items-center bg-gradient-conatus">
          <SignIn />
        </div>
      </form>
    </FormProvider>
  )
}
