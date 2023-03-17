import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseconfig';


export function NewAccountForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function addNewUser(e) {
    e.preventDefault()
    const validatePassword = password === checkPassword
    if(validatePassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setShowSuccessMessage(true)
        setErrorMessage('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    } else {
      setErrorMessage('As senhas não são iguais')
    }
  }


  return (
    <div>
      <form onSubmit={e => addNewUser(e)} className='flex flex-col w-full border-2 border-none px-10 pt-10 pb-5 gap-3'>
          <label htmlFor="email" className='text-zinc-300'>E-mail</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            placeholder='Digite seu e-mail'  
            className="p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-inputbg border-2 border-none text-white focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-background"
          />
          
          <label htmlFor="password" className='text-zinc-300'>Senha</label>
          <input 
            type="password" 
            id="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite sua senha"  
            className="p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-inputbg border-2 border-none text-white focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-background"
          />

          <label htmlFor="password" className='text-zinc-300'>Confirmar senha</label>
          <input 
            type="password" 
            placeholder="Digite sua senha de novo" 
            value={checkPassword}
            required
            onChange={e => setCheckPassword(e.target.value)}
            className="p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-inputbg border-2 border-none text-white focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-background"
          />

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {showSuccessMessage && <p className="text-green-500">Conta criada com sucesso, volte e faça login!</p>}

          <button 
            type='submit'
            className="mt-10 text-white py-4 px-10 rounded-lg bg-green-600 text-lg font-bold  hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-background">
            Cadastrar
          </button>
    
        </form>
    </div>
  )
}