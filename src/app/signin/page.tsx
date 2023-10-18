'use client'
import { FormProvider, useForm } from 'react-hook-form'
import SignIn from './cards/SignIn'

export default function Page() {
  const methods = useForm()

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
