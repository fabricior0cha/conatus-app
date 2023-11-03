import IMask from 'imask'

export function maskCnpj(value: string) {
  const str = value.replaceAll(/\D/g, '')
  const mask = IMask.createMask({ mask: '00.000.000/0000-00' })

  return mask.resolve(str)
}
