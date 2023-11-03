import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <Image
      width={180}
      height={180}
      src="/assets/images/conatus-logo.png"
      alt="Conatus"
      className="my-2"
    />
  )
}
