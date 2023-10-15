import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
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
import Image from 'next/image'
import React from 'react'
export default function StepTwoCompanyInfo() {
  return (
    <Card className="w-[550px]">
      <CardHeader>
        <Image
          width={180}
          height={180}
          src="/assets/images/conatus-logo.png"
          alt="Conatus"
          className="my-2"
        />
        <div>
          <hr className="h-px mb-4  bg-gray-200 border-0" />
        </div>
        <CardTitle className="mt-4">Dados da empresa</CardTitle>
        <CardDescription>
          Preencha os dados da sua empresa que fará parte do Conatus para
          continuar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 w-full items-center gap-2">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input id="cnpj" placeholder="CNPJ" />
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
    </Card>
  )
}
