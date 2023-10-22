import CardStep from '@/components/containers/card-step'
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
import React from 'react'

export default function StepOneUserInfo() {
  return (
    <CardStep
      title="Suas informações"
      description="Preencha suas informações para continuar o cadastro."
    >
      <CardContent>
        <div className="grid grid-cols-2 w-full items-center gap-2">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" placeholder="CPF" />
          </div>
          <div className="flex flex-col  space-y-1.5">
            <Label htmlFor="trade">Gênero</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Gênero" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Gênero</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col col-span-2 space-y-1.5">
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" placeholder="Telefone " />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-1 w-full">
          <Button variant="purple" className="w-full">
            Avançar <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </CardStep>
  )
}
