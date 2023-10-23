import React from 'react'
import { Label } from '../ui/label'
import { Select } from '../ui/select'
import { SelectProps } from '@radix-ui/react-select'
import { FieldError } from 'react-hook-form'

type Props = {
  label?: string
  error?: FieldError
} & SelectProps

export default function SelectBox(props: Props) {
  return (
    <div className="flex flex-col  space-y-1.5">
      {props?.label && <Label htmlFor={props.name}>{props.label}</Label>}
      <Select {...props}>{props.children}</Select>
      <span className="h-4 text-xs text-red-500 px-1 font-semibold">
        {props?.error?.message}
      </span>
    </div>
  )
}
