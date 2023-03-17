import { Logo } from './Logo'
import { LoginAccountForm } from './LoginAccountForm';
import { NewAccountForm } from './NewAccountForm'
import { FiLogIn, FiX } from "react-icons/fi";
import * as Dialog from '@radix-ui/react-dialog';


export function Home() {
  return (
    <div className="h-screen flex flex-wrap justify-center items-center gap-7">
 
      <div className='flex flex-col items-start gap-3'>
        <Logo />
        
        <div className='flex justify-center items-center mt-7 gap-3'>
          <FiLogIn 
            size={24}
            style={{
              color: '#B52AAB',
            }}
          />
          <h2 className='text-4xl font-bold text-zinc-300'>Faça seu login</h2>
        </div>

        <p className='text-zinc-400'>Entre com suas informações de Cadastro.</p>
      </div>
      
      <div className='border-gpurple border-2 lg:w-1/3 sm:w-1/2 flex flex-col rounded-xl justify-center'>

        <LoginAccountForm />

        <Dialog.Root>

            <div className='text-gpurple text-center mb-3'>
              Não tem uma conta? 
              <Dialog.Trigger
                type='button'
                className='font-bold cursor-pointer hover:text-green-500 ml-2'>
                Registre-se
              </Dialog.Trigger>
            </div>
         
          <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>
            <Dialog.Content className="absolute p-10 bg-background rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-zinc-900">
              <FiX size={24} aria-label="Fechar"/>
            </Dialog.Close>

              <Dialog.Title className="text-3xl leading-tight text-center font-extrabold">
                Cadastre-se
              </Dialog.Title>

              <NewAccountForm />

            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
          
      </div>
    </div>
  ) 
}