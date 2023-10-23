import { FieldValues, UseFormSetValue, Path } from 'react-hook-form'

const handleFillForm = <T extends FieldValues>(
  storeForm: T,
  setValue: UseFormSetValue<T>
) => {
  if (!storeForm) return

  Object.entries(storeForm).forEach(([key, value]) => {
    setValue(key as Path<T>, value)
  })
}

export default handleFillForm
