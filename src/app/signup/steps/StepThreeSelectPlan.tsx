'use client'
import CardPlan from '@/components/CardPlan'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radio-group'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
export default function StepThreeSelectPlan() {
  return (
    <Card className="w-[650px]">
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
        <CardTitle className="mt-4">Contratação de plano</CardTitle>
        <CardDescription>
          Selecione o plano que faça sentido para sua empresa e começa hoje a
          gerenciar seu negócio com Conatus.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          defaultValue="card"
          className="w-full grid grid-cols-3 gap-4 "
        >
          <CardPlan
            plan="Free"
            price={0}
            description="Plano gratuito com período de teste de 15 dias para conhecer a plataforma."
            features={['Estoque limitado', 'Apenas o próprio usuário']}
            onClick={() => {}}
          />
          <CardPlan
            plan="Starter"
            price={10}
            description="Plano inicial para pequenos negócios que desejam expandir."
            features={['Estoque limitado', '15 usuários']}
            onClick={() => {}}
          />
          <CardPlan
            plan="Premium"
            price={25}
            description="Plano avançado para quem quer usufrui de todos os recursos de forma ilimitada."
            features={['Estoque ilimitado', '25 usuários']}
            onClick={() => {}}
          />
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-1 w-full">
          <Button variant="purple" className="w-full">
            Finalizar <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
