'use client'
import useCreateAccountStore from '@/stores/use-create-account-store'
import StepCreateAccount from './_steps/CreateAccount'
import StepCompanyInfo from './_steps/CompanyInfo'

export default function Page() {
  const { step } = useCreateAccountStore((store) => store)

  const steps = [
    <StepCreateAccount key={'s1'} />,
    <StepCompanyInfo key={'s2'} />
  ]
  return (
    <>
      <main className="w-screen h-screen md:flex md:flex-row md:justify-center md:items-center md:bg-gradient-conatus">
        {steps[step]}
      </main>
    </>
  )
}
