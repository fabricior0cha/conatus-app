import { z } from 'zod'

const SignupSchema = z.object({
  nome: z
    .string()
    .min(3, { message: 'Campo obrigatório' })
    .refine((value) => value.split(' ').length >= 2, {
      message: 'Insira um nome válido.'
    }),
  email: z
    .string()
    .min(3, { message: 'Campo obrigatório' })
    .email({ message: 'Insira um email válido.' }),
  senha: z
    .string()
    .min(8, { message: 'Insira uma senha com pelo menos 8 caracteres.' })
    .refine(
      (senha) => {
        return /[A-Z]/.test(senha) && /[!@#$%^&*?]/.test(senha)
      },
      {
        message:
          'Insira uma senha com pelo menos uma letra maiúscula e um caractere especial.'
      }
    )
})

export default SignupSchema
