import CardStep from '@/components/containers/CardStep'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronRight } from 'lucide-react'
export default function StepCreateAccount() {
  return (
    <CardStep
      title="Crie sua conta agora!"
      description="Adquira sua licença e conheça o futuro para gerenciar sua empresa de forma fácil e inteligente."
    >
      <CardContent>
        <div className="grid grid-cols-2 w-full items-center gap-2">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Seu nome" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Seu email" />
          </div>
          <div className="flex flex-col col-span-2 space-y-1.5">
            <Label htmlFor="email">Senha</Label>
            <Input id="email" placeholder="Sua senha" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-1 w-full">
          <Button variant="purple" className="w-full">
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
  )
}
