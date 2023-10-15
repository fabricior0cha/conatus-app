import Image from 'next/image'
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

type Props = {
  title: string
  description: string
  children: React.ReactNode
  width?: number
}
export default function CardStep({
  title,
  description,
  children,
  width = 550
}: Props) {
  return (
    <Card className={`w-[${width}px]`}>
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
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {children}
    </Card>
  )
}
