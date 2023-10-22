import { StoreForm } from '@/types/commons/StoreForm'
import FormSignup from '@/types/signup/FormSignup'
import { createStore } from 'zustand'

const useFormSignup = createStore<StoreForm<FormSignup>>((set) => ({
  form: {} as FormSignup,
  setForm: (form: FormSignup) => set({ form })
}))

export default useFormSignup
