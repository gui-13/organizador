import { useState } from "react"

export function NewBillsForm({handleAddBills}) {
  const [billName, setBillName] = useState('')
  const [billExpiration, setBillExpiration] = useState('')
  const [billValue, setBillValue] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    
    const validationInput = billName && billExpiration && billValue !== ''
    if(validationInput) {
      handleAddBills(billName, billExpiration,  billValue)
    } else {
      alert('Por favor Preencha todos os campos!')
    }

    setBillName('')
    setBillExpiration('')
    setBillValue('')
  }

  return (
    <form className="mt-12 w-full flex flex-col justify-center items-center gap-3">
      <div className="flex gap-3 justify-start items-center">
        <label htmlFor="name">Nome</label>
        <input 
          type="text"  
          id="name"
          value={billName}
          onChange={e => setBillName(e.target.value)}
          placeholder="Digite sua conta" 
          className="p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-inputbg border-2 border-none text-white focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-background"
        />
      </div>

      <div className="flex gap-3 justify-start items-center">
        <label htmlFor="expiration">Dia</label>
        <input 
          type="number"  
          id="expiration"
          value={billExpiration}
          onChange={e => setBillExpiration(e.target.value)}
          placeholder="Vence dia..." 
          className="p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-inputbg border-2 border-none text-white focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-background ml-4"
        />
      </div>

      <div className="flex gap-3 justify-start items-center">
        <label htmlFor="value">Valor</label>
        <input 
          type="number"  
          id="value"
          value={billValue}
          onChange={e => setBillValue(e.target.value)}
          placeholder="Valor da conta" 
          className="p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-inputbg border-2 border-none text-white focus:outline-none focus:ring-2 focus:ring-gpurple focus:ring-offset-2 focus:ring-offset-background"
        />
      </div>


      <button 
        type="submit"
        onClick={e => handleClick(e)}
        className="text-white py-4 px-10 rounded-lg bg-green-600 mt-12 text-lg font-bold  hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-background"
      >
        Confirmar
      </button>
    </form>
  )
}