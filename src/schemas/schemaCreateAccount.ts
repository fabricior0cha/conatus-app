import messages from '@/utils/messages'
import { z } from 'zod'

export const schemaCreateAccount = z.object({
  nome: z
    .string({ required_error: messages.required })
    .min(1, { message: messages.required })
    .refine((value) => /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/.test(value), {
      message: 'Insira um nome completo válido'
    })
    .refine((value) => value.split(' ').filter(Boolean).length >= 2, {
      message: 'Insira um nome completo válido'
    }),
  email: z
    .string({ required_error: messages.required })
    .min(1, { message: messages.required })
    .email({
      message: 'Insira um e-mail válido'
    }),
  senha: z
    .string({ required_error: messages.required })
    .min(8, { message: 'Insira uma senha com pelo menos 8 caracteres' })
    .refine(
      (senha) => {
        return /[A-Z]/.test(senha) && /[!@#$%^&*?]/.test(senha)
      },
      {
        message:
          'Insira uma senha com pelo menos uma letra maiúscula e um caractere especial'
      }
    ),
  idGenero: z
    .string({ required_error: messages.required })
    .min(1, { message: messages.required }),
  cpf: z
    .string({ required_error: messages.required })
    .min(1, { message: messages.required }),
  telefone: z
    .string({ required_error: messages.required })
    .min(1, { message: messages.required })
})

export type CreateAccount = z.infer<typeof schemaCreateAccount>
