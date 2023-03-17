import { useState } from 'react';

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseconfig";




export function SendNewPassword () {
  const [email, setEmail] = useState('');

  function sendPassword() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('email enviado')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      setEmail('')
  }
  

  return (
    <div>
      <form onSubmit={sendPassword} className='flex flex-col w-full border-2 border-none px-10 pt-10 pb-5 gap-3'>
          <label htmlFor="email" className='text-zinc-300'>E-mail</label>
          <input 
            type="email" 
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Digite seu e-mail'  
            className="p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-inputbg border-2 border-none text-white focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-background"
        />
          <button 
            type='submit'
            className="text-white py-4 px-10 rounded-lg bg-green-600 text-lg font-bold  hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-background"
          >
            Enviar
          </button>
      </form>
    </div>
  )
}