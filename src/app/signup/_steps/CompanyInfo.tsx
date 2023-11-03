import Logo from '@/components/Logo'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
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
import { useToast } from '@/components/ui/use-toast'
import { CompanyInfo, schemaCompanyInfo } from '@/schemas/schemaCompanyInfo'
import useCreateAccountStore from '@/stores/use-create-account-store'
import Domain from '@/types/domain'
import api from '@/utils/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { RocketIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
export default function StepCompanyInfo() {
  const methods = useForm<CompanyInfo>({
    resolver: zodResolver(schemaCompanyInfo)
  })

  const { form } = useCreateAccountStore((store) => store)

  const { toast } = useToast()

  const { data: listDepartamento } = useQuery(
    'listDepartamento',
    () => {
      return api.get<Domain[]>('/dominios/tipos-codigos/RAMO_ATIV')
    },
    {
      retry: false,
      refetchInterval: false
    }
  )

  const { mutate, isSuccess } = useMutation({
    mutationFn: (data: CompanyInfo) => {
      return api
        .post('/tenants', {
          usuario: form.usuario,
          pessoaJuridica: { ...data }
        })
        .then(({ data }) => {
          return data
        })
    },
    onError: () => {
      toast({
        title: 'Erro ao cadastrar',
        description: 'Não foi possível realizar o cadastro'
      })
    }
  })

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          mutate(data)
        })}
      >
        {isSuccess && (
          <Alert className="my-4">
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Cadastro realizado com sucesso!</AlertTitle>
            <AlertDescription>
              Bem vindo ao Conatus, faça login para continuar.
            </AlertDescription>
          </Alert>
        )}
        <Card className="md:w-[600px]">
          <CardHeader>
            <Logo />
            <Separator className="my-4" />
            <CardTitle>Dados da empresa</CardTitle>
            <CardDescription>
              Preencha os dados da sua empresa que fará parte do Conatus para
              continuar.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <FormField
                name="cnpj"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="CNPJ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                name="razaoSocial"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Razão social" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                name="nomeFantasia"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nome fantasia" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                name="idRamoAtividade"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Departamento" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {listDepartamento?.data?.map((item) => (
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
          </CardContent>
          <CardFooter>
            <div className="flex flex-col gap-1 w-full">
              <Button variant="purple" className="w-full">
                Finalizar
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
