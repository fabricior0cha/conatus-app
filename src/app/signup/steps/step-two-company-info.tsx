import CardStep from '@/components/containers/card-step'
import TextField from '@/components/form/text-field'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ChevronRight } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
export default function StepTwoCompanyInfo() {
  const { control } = useForm()

  return (
    <form>
      <CardStep
        title="Dados da empresa"
        description="Preencha os dados da sua empresa que fará parte do Conatus para continuar."
      >
        <CardContent>
          <div className="grid grid-cols-2 w-full items-center gap-2">
            <div>
              <Controller
                name="cnpj"
                control={control}
                render={({
                  field: { onChange, value, disabled },
                  fieldState: { error }
                }) => (
                  <TextField
                    label="CNPJ"
                    name="cnpj"
                    placeholder="CNPJ"
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                    error={error}
                  />
                )}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="company">Razão social</Label>
              <Input id="company" placeholder="Razão social" />
            </div>
            <div className="flex flex-col col-span-2 space-y-1.5">
              <Label htmlFor="trade">Nome da empresa</Label>
              <Input id="trade" placeholder="Nome da empresa" />
            </div>
            <div className="flex flex-col  space-y-1.5">
              <Label htmlFor="trade">Mercado de atuação</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Mercado de atuação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Mercado de atuação</SelectLabel>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col  space-y-1.5">
              <Label htmlFor="trade">Departamento</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Departamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Departamento</SelectLabel>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-1 w-full">
            <Button variant="purple" className="w-full">
              Prosseguir <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </CardStep>
    </form>
  )
}
