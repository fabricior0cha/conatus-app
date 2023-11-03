import messages from '@/utils/messages'
import { z } from 'zod'

export const schemaCompanyInfo = z.object({
  nomeFantasia: z
    .string({ required_error: messages.required })
    .min(1, { message: messages.required }),
  razaoSocial: z
    .string({ required_error: messages.required })
    .min(1, { message: messages.required }),
  cnpj: z
    .string({ required_error: messages.required })
    .min(1, { message: messages.required }),
  idRamoAtividade: z
    .string({ required_error: messages.required })
    .min(1, { message: messages.required })
})

export type CompanyInfo = z.infer<typeof schemaCompanyInfo>
