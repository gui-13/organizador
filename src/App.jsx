import { useState, useEffect } from 'react';
import { Logo } from './components/Logo'
import { Home } from './components/Home'
import { Loading } from './components/Loading';
import { Balance } from './components/Balance';
import { BillsList } from './components/BillsList';
import { ButtonOpenDialog } from './components/ButtonOpenDialog';
import { FiX } from "react-icons/fi";


import './styles/global.css'

import { v4 as uuidv4 } from 'uuid';

import { ref, set, child, onValue } from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { database, auth } from "./firebaseconfig";

export function App() {
  const [billsList, setBillsList] = useState([]);
  const [loading, setLoading] = useState(true)
  const [userLogged, setUserLogged] = useState(false)

 
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLogged(true);
        const userId = user.uid;
        const billsRef = ref(database, `users/${userId}/bills`);
        const unsubscribeBills = onValue(billsRef, (snapshot) => {
          const bills = [];
          snapshot.forEach((childSnapshot) => {
            const bill = childSnapshot.val();
            bills.push(bill);
          });
          setBillsList(bills);
          setLoading(false)
        }); 
        return unsubscribeBills;
      } else {
        setUserLogged(false);
        setBillsList([]);
      }
    });
    return unsubscribeAuth;
  }, [auth]);
  

  function handleAddBills(billName, billExpiration, billValue) {
    const user = auth.currentUser;
  
    if (!user) {
      alert('Usuário não autenticado.');
      return;
    }
  
    const userId = user.uid;
    const billsRef = ref(database, `users/${userId}/bills`);
    const newBillRef = child(billsRef, billName);
  
    const newBill = {
      id: uuidv4(),
      name: billName,
      expiration: billExpiration,
      value: billValue,
      paid: false,
    };
  
    set(newBillRef, newBill)
      .then(() => alert('Conta criada com sucesso!'))
      .catch((error) => console.error(error));
  }
  
  return (
    <div className="w-full h-full">
      { !userLogged ? (
        <Home />
      ) : (
        <div className="flex flex-col w-full h-full justify-center items-center gap-3 mt-24">
          <Logo />
  
          <div className="w-full h-full flex justify-end pr-24">
            <button
              type="submit"
              onClick={() => signOut(auth)}
              className="flex justify-center gap-1 items-center text-lg font-semibold text-zinc-400 hover:text-zinc-300 border-2 hover:border-zinc-300 border-gpurple px-3 rounded-xl"
            >
              Sair
              <FiX size={22} aria-label="Fechar" />
            </button>
          </div>
  
          {billsList.length > 0 && <Balance billsList={billsList} />}
  
          { loading ? 
            (
              <Loading/> 
            ) : 
            (
              <BillsList billsList={billsList} />
            )
          }
  
          <ButtonOpenDialog handleAddBills={handleAddBills} />
        </div>
      )}
    </div>
  );
}