'use client'
import React from 'react'
import { Label } from '../ui/label'
import { FieldError } from 'react-hook-form'
import { Input } from '../ui/input'

type Props = {
  label: string
  type?: 'text' | 'password'
  error?: FieldError
} & React.InputHTMLAttributes<HTMLInputElement>
export default function TextField(props: Props) {
  return (
    <>
      <div className="w-full flex flex-col space-y-1.5">
        {props?.label && <Label htmlFor={props?.name}>{props?.label}</Label>}
        <Input
          {...props}
          id={props?.name}
          value={props?.value}
          placeholder={props?.placeholder}
        />
        <span className="h-4 text-xs text-red-500 px-1 font-semibold">
          {props?.error?.message}
        </span>
      </div>
    </>
  )
}
