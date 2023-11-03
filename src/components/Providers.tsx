'use client'
import React, { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from './ui/toaster'

export default function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
      </QueryClientProvider>
    </>
  )
}
