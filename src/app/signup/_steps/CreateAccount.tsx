import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  CreateAccount,
  schemaCreateAccount
} from '@/schemas/schemaCreateAccount'
import useCreateAccountStore from '@/stores/use-create-account-store'
import Domain from '@/types/domain'
import api from '@/utils/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
export default function StepCreateAccount() {
  const methods = useForm<CreateAccount>({
    resolver: zodResolver(schemaCreateAccount),
    reValidateMode: 'onChange'
  })

  const { nextStep, setForm, form } = useCreateAccountStore((store) => store)

  const { data: listGenero } = useQuery(
    'listGenero',
    () => {
      return api.get<Domain[]>('/dominios/tipos-codigos/TIPO_GENERO')
    },
    {
      retry: false,
      refetchInterval: false
    }
  )
  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          setForm({ ...form, usuario: data })
          nextStep()
        })}
      >
        <Card className="md:w-[600px]">
          <CardHeader>
            <Logo />
            <Separator className="my-4" />
            <CardTitle>Crie sua conta agora!</CardTitle>
            <CardDescription>
              Adquira sua licença e conheça o futuro para gerenciar sua empresa
              de forma fácil e inteligente.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <FormField
                name="nome"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                name="cpf"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="CPF" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                name="idGenero"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Genêro" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {listGenero?.data?.map((item) => (
                          <SelectItem value={`${item?.id}`} key={item?.id}>
                            {item?.descricao}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                name="telefone"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Telefone celular" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-2">
              <FormField
                name="email"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-2">
              <FormField
                name="senha"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" placeholder="Senha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col gap-1 w-full">
              <Button type="submit" variant="purple" className="w-full">
                Começar <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
