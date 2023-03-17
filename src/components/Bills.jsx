import { X, Check } from "phosphor-react";
import { clsx } from 'clsx';
import * as Popover from '@radix-ui/react-popover';
import { ref, remove, update } from "firebase/database";
import { auth, database } from "../firebaseconfig";


export function Bills({ bill }) {
  
  function handleDeleteBill(billName) {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      const billRef = ref(database, `users/${userId}/bills/${billName}`);
      
      remove(billRef)
        .then(() => {
          alert('Conta excluída com sucesso!');
        })
        .catch((error) => {
          console.error(error);
          alert('Erro ao excluir conta.');
        });
    } else {
      alert('Usuário não autenticado.');
    }
  }

  function handlePaidChange(billName, currentPaid) {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      const billRef = ref(database, `users/${userId}/bills/${billName}`);
      update(billRef, {
        paid: !currentPaid
      })
  }
  }

  return (
    <Popover.Root>
       <Popover.Trigger className={clsx('bg-inputbg  w-48 h-14 rounded-lg transition-colors', {
          'border-2 border-green-600' : bill.paid === true,
       })}>
          {bill.name}
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content className='flex flex-col mt-4 min-w-[320px] gap-3 bg-inputbg p-4 rounded-lg border-2 border-gpurple'>
            <div>
              <ul>
                <li className='flex gap-3'>
                  <span className='text-zinc-400'>Nome:</span>
                    <p>{bill.name}</p>
                  </li>
                  <li className='flex gap-3'>
                    <span className='text-zinc-400'>Vencimento dia:</span>
                    <p>{bill.expiration}</p>
                  </li>
                  <li className='flex gap-3'>
                     <span className='text-zinc-400'>Valor:</span>
                      <p>R$ {bill.value}</p>
                   </li>
                </ul>
                {
                  bill.paid === true && 
                  <p className="text-zinc-400 text-center mt-2">Essa conta está paga !</p>
                }
                <div className='flex justify-center mt-5 gap-3'>
                  <button 
                    className='p-1 bg-green-600 hover:bg-green-500 rounded-lg'
                    onClick={() => handlePaidChange(bill.name, bill.paid)}
                  >
                    <Check size={24} aria-label="paga"/>
                  </button>
                  <button 
                    className='p-1 bg-red-600 hover:bg-red-500 rounded-lg'
                    onClick={() => handleDeleteBill(bill.name)}
                  >
                     <X size={24} aria-label="remover"/>
                  </button>
                </div>
              </div>  
          </Popover.Content>
        </Popover.Portal>
    </Popover.Root>     
  )
}