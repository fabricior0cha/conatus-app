import { z } from 'zod'

export default z
  .string()
  .min(3, { message: 'Campo obrigatório' })
  .email({ message: 'Insira um email válido.' })
