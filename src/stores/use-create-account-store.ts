import Signup from '@/types/signup'
import StepFormStore from '@/types/stepStore'
import { create } from 'zustand'

const useCreateAccountStore = create<StepFormStore<Signup>>((set) => ({
  step: 0,
  form: {} as Signup,
  setForm: (form) => set(() => ({ form })),
  setStep: (step) => set(() => ({ step })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 }))
}))

export default useCreateAccountStore
