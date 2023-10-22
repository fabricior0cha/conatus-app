import React, { Children, ReactElement, cloneElement } from 'react'
import { twMerge } from 'tailwind-merge'

type StepProps = {
  index?: number
  children: ReactElement
}

type Props = {
  className?: string
  currentStepIndex: number
  children: ReactElement<StepProps>[] | ReactElement<StepProps>
}

export function Step({ children }: StepProps) {
  return <>{children}</>
}

export function Stepper({
  className = '',
  currentStepIndex = 0,
  children
}: Props) {
  const childrenArray = Children.toArray(children).map((child, index) =>
    cloneElement(child as React.ReactElement, {
      index: index,
      key: index
    })
  )

  return (
    <div className={twMerge(className)}>{childrenArray[currentStepIndex]}</div>
  )
}
