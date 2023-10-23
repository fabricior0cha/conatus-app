import StoreForm from '@/types/commons/StoreForm'
import FormSignup from '@/types/signup/FormSignup'
import { create } from 'zustand'

const useFormSignup = create<StoreForm<FormSignup>>((set) => ({
  form: {} as FormSignup,
  setForm: (form: FormSignup) =>
    set((prev) => ({ form: { ...prev.form, ...form } }))
}))

export default useFormSignup
