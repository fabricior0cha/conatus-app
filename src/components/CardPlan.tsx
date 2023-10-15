'use client'
import React from 'react'
import { RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { CheckCircle2 } from 'lucide-react'
import { Button } from './ui/button'

type Props = {
  plan: string
  price: number
  description: string
  features: string[]
  onClick: () => void
}
export default function CardPlan({
  plan,
  price,
  description,
  features,
  onClick
}: Props) {
  return (
    <div>
      <RadioGroupItem
        value={plan.toLowerCase()}
        id={plan.toLowerCase()}
        className="peer sr-only"
      />
      <Label
        htmlFor={plan.toLowerCase()}
        className="flex h-full flex-col rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent
        hover:text-accent-foreground peer-data-[state=checked]:border-primary
        [&:has([data-state=checked])]:border-primary "
      >
        <h2 className="text-lg font-light text-gray-500">{plan}</h2>
        <div className="flex items-center flex-row gap-2">
          <span className="text-xl font-bold">R${price}</span>
          <span className="text-md font-light text-gray-500">/ mês</span>
        </div>
        <p className="text-sm font-light my-4">{description}</p>
        <div className="flex flex-col gap-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <Button className="mt-auto" variant="outline" onClick={() => onClick()}>
          Escolha o plano
        </Button>
      </Label>
    </div>
  )
}
