import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseconfig';
import { SendNewPassword } from './SendNewPassword';

import { FiX } from "react-icons/fi";
import * as Dialog from '@radix-ui/react-dialog';
import { verificaErro } from '../utils/handleErro';

export function LoginAccountForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function login(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(verificaErro(errorCode))
    });
  }


  return (
    <div>
      <form onSubmit={e => login(e)} className='flex flex-col w-full border-2 border-none px-10 pt-10 pb-5 gap-3'>
          <label htmlFor="email" className='text-zinc-300'>E-mail</label>
          <input 
            type="email" 
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Digite seu e-mail'  
            className="p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-inputbg border-2 border-none text-white focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-background"
          />
          
          <label htmlFor="password" className='text-zinc-300'>Senha</label>
          <input 
            type="password" 
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite sua senha"  
            className="p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-inputbg border-2 border-none text-white focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-background"
          />

          <div className='text-gpurple hover:text-green-500 cursor-pointer text-right mb-10'>

          <Dialog.Root>

              <Dialog.Trigger
                type='button'
                className='font-bold cursor-pointer hover:text-green-500 ml-2'>
                esqueci minha senha
              </Dialog.Trigger>

            <Dialog.Portal>
            <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>
            <Dialog.Content className="absolute p-10 bg-background rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-zinc-900">
              <FiX size={24} aria-label="Fechar"/>
            </Dialog.Close>

              <Dialog.Title className="text-3xl leading-tight text-center font-extrabold">
                Redefinir senha
              </Dialog.Title>

                <p className='text-zinc-400 text-center pt-3'>Digite o seu e-mail cadastrado que enviaremos um e-mail para a redefinição de senha</p>

              <SendNewPassword />

            </Dialog.Content>
            </Dialog.Portal>
            </Dialog.Root>

          </div>

          {error && <p className='text-red-500'>{error}</p>}

          <button 
          type='submit'
          className="text-white py-4 px-10 rounded-lg bg-green-600 text-lg font-bold  hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-background">Entrar</button>
    
        </form>
    </div>
  )
}