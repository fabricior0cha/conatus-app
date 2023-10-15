'use client'
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
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className="w-screen h-screen  flex flex-row justify-center items-center bg-gradient-conatus">
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
          <CardTitle className="mt-4">Crie sua conta agora!</CardTitle>
          <CardDescription>
            Adquira sua licença agora e conheça o futuro para gerenciar sua
            empresa de forma fácil e inteligente.
          </CardDescription>
        </CardHeader>
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
      </Card>
    </div>
  )
}
