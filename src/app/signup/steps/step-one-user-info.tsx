import CardStep from '@/components/containers/card-step'
import SelectBox from '@/components/form/select-box'
import TextField from '@/components/form/text-field'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import {
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import useFormSignup from '@/stores/useFormSignup'
import PropsBasicStep from '@/types/commons/PropsBasicStep'
import FormSignup from '@/types/signup/FormSignup'
import handleFillForm from '@/utils/helpers/handleFillForm'
import { ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

export default function StepOneUserInfo({
  onNext,
  onPrevious
}: PropsBasicStep) {
  const { control, handleSubmit, setValue } = useForm<FormSignup>()

  const { setForm, form } = useFormSignup((store) => store)

  useEffect(() => {
    if (form) {
      handleFillForm<FormSignup>(form, setValue)
    }
  }, [])

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setForm(data)
        onNext()
      })}
    >
      <CardStep
        title="Suas informações"
        description="Preencha suas informações para continuar o cadastro."
      >
        <CardContent>
          <div className="grid grid-cols-2 w-full items-center gap-2">
            <div>
              <Controller
                name="cpf"
                control={control}
                render={({
                  field: { onChange, value, disabled },
                  fieldState: { error }
                }) => (
                  <TextField
                    label="CPF"
                    name="cpf"
                    placeholder="CPF"
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                    error={error}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="codeGenero"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <SelectBox label="Gênero" error={error} value={value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Gênero" />
                    </SelectTrigger>
                    <SelectContent onChange={onChange}>
                      <SelectGroup>
                        <SelectLabel>Gênero</SelectLabel>
                      </SelectGroup>
                    </SelectContent>
                  </SelectBox>
                )}
              />
            </div>
            <div className="col-span-2">
              <Controller
                name="telefone"
                control={control}
                render={({
                  field: { onChange, value, disabled },
                  fieldState: { error }
                }) => (
                  <TextField
                    label="Telefone"
                    name="telefone"
                    placeholder="Telefone"
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                    error={error}
                  />
                )}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-1 w-full">
            <Button variant="purple" type="submit" className="w-full">
              Avançar <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={() => onPrevious()}
            >
              Voltar
            </Button>
          </div>
        </CardFooter>
      </CardStep>
    </form>
  )
}
