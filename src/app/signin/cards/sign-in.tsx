// import TextField from '@/components/form/text-field'
// import { Button } from '@/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle
// } from '@/components/ui/card'
// import FormSignin from '@/types/signin/FormSignin'
// import { ChevronRight } from 'lucide-react'
// import Image from 'next/image'
// import { Controller, useFormContext } from 'react-hook-form'

// export default function SignIn() {
//   const { control } = useFormContext<FormSignin>()

//   return (
//     <Card className={`w-[550px]`}>
//       <CardHeader>
//         <Image
//           width={180}
//           height={180}
//           src="/assets/images/conatus-logo.png"
//           alt="Conatus"
//           className="my-2"
//         />
//         <div>
//           <hr className="h-px mb-4  bg-gray-200 border-0" />
//         </div>
//         <CardTitle className="mt-4">Login</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-2 w-full items-center gap-2">
//           <div className="col-span-2">
//             <Controller
//               name="email"
//               control={control}
//               render={({
//                 field: { onChange, value, disabled },
//                 fieldState: { error }
//               }) => (
//                 <TextField
//                   label="Email"
//                   name="email"
//                   placeholder="Seu email"
//                   onChange={onChange}
//                   value={value}
//                   disabled={disabled}
//                   error={error}
//                 />
//               )}
//             />
//           </div>
//           <div className="col-span-2">
//             <Controller
//               name="senha"
//               control={control}
//               render={({
//                 field: { onChange, value, disabled },
//                 fieldState: { error }
//               }) => (
//                 <TextField
//                   label="Senha"
//                   name="senha"
//                   placeholder="Sua senha"
//                   onChange={onChange}
//                   value={value}
//                   disabled={disabled}
//                   error={error}
//                   type="password"
//                 />
//               )}
//             />
//           </div>
//         </div>
//       </CardContent>
//       <CardFooter>
//         <div className="flex flex-col gap-1 w-full">
//           <Button type="submit" variant="purple" className="w-full">
//             Entrar <ChevronRight className="h-4 w-4" />
//           </Button>
//           <span className="text-xs text-gray-400">
//             Não possui uma conta?{' '}
//             <a
//               className="text-slate-950 font-semibold underline"
//               href="/signup"
//             >
//               Crie sua conta agora!
//             </a>
//           </span>
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }
