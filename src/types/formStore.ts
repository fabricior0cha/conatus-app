interface FormStore<T> {
  form: T
  setForm: (form: T) => void
}

export default FormStore
