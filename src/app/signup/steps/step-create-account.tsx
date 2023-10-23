import CardStep from '@/components/containers/card-step'
import TextField from '@/components/form/text-field'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import useFormSignup from '@/stores/useFormSignup'
import FormSignup from '@/types/signup/FormSignup'
import handleFillForm from '@/utils/helpers/handleFillForm'
import { SchemaCreateAccount } from '@/validations/signup/schemaSignup'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

type Props = {
  onNext: () => void
  onPrevious: () => void
}

export default function StepCreateAccount({ onNext }: Props) {
  const { control, handleSubmit, setValue } = useForm<FormSignup>({
    resolver: zodResolver(SchemaCreateAccount)
  })

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
        title="Crie sua conta agora!"
        description="Adquira sua licença e conheça o futuro para gerenciar sua empresa de forma fácil e inteligente."
      >
        <CardContent className="pb-2">
          <div className="grid grid-cols-2 w-full items-center gap-2">
            <div>
              <Controller
                name="nome"
                control={control}
                render={({
                  field: { onChange, value, disabled },
                  fieldState: { error }
                }) => (
                  <TextField
                    label="Seu nome"
                    name="nome"
                    placeholder="Seu nome"
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
                name="email"
                control={control}
                render={({
                  field: { onChange, value, disabled },
                  fieldState: { error }
                }) => (
                  <TextField
                    label="Email"
                    name="email"
                    placeholder="Seu email"
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                    error={error}
                  />
                )}
              />
            </div>
            <div className="col-span-2">
              <Controller
                name="senha"
                control={control}
                render={({
                  field: { onChange, value, disabled },
                  fieldState: { error }
                }) => (
                  <TextField
                    label="Senha"
                    name="senha"
                    placeholder="Sua senha"
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                    error={error}
                    type="password"
                  />
                )}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-1 w-full">
            <Button type="submit" variant="purple" className="w-full">
              Começar <ChevronRight className="h-4 w-4" />
            </Button>
            <span className="text-xs text-gray-400">
              Já possui uma conta?{' '}
              <a className="text-slate-950 font-semibold underline">
                Faça login agora
              </a>
            </span>
          </div>
        </CardFooter>
      </CardStep>
    </form>
  )
}
