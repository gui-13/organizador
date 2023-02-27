import { useState, useEffect } from 'react';
import { Logo } from './components/Logo'
import { Loading } from './components/Loading';
import { Balance } from './components/Balance';
import { BillsList } from './components/BillsList';
import { ButtonOpenDialog } from './components/ButtonOpenDialog';

import './styles/global.css'

import { v4 as uuidv4 } from 'uuid';

import { ref, set, child, onValue } from "firebase/database";
import { database } from "./firebaseconfig";

export function App() {
  const [billsList, setBillsList] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const billsRef = ref(database, 'bills');
    onValue(billsRef, (snapshot) => {
      const billsData = snapshot.val();
      const billsList = billsData ? Object.values(billsData) : [];
      setBillsList(billsList);
      setLoading(false)
    });
  }, []);
  

  function handleAddBills (billName, billExpiration, billValue) {
    const billsRef = ref(database, 'bills');
    const newBillRef = child(billsRef, billName);
  
    set(newBillRef, {
      id: uuidv4(),
      name: billName,
      expiration: billExpiration,
      value: billValue,
      paid: false,
    });
  
    alert('Conta criada com sucesso!');
  }

  return (
    <div className='flex flex-col w-full h-full justify-center items-center mt-24'>
      
      <Logo />
      
      {
        billsList.length > 0 && <Balance billsList={billsList} />
      }

      {
        loading ?
        <Loading />
        :
        <BillsList 
          billsList={billsList}
        />
      }

      <ButtonOpenDialog 
       handleAddBills={handleAddBills}
      />

    </div>
    )
}