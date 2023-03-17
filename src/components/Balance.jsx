export function Balance({ billsList }) {

   const totalValue = billsList.reduce((accumulator, bill) => {
    if(!bill.paid) {
      return parseFloat(accumulator) + parseFloat(bill.value);
    } 
    return accumulator
   }, 0);

  return (
    <div className="flex flex-col p-8 mt-4 bg-inputbg w-auto h-14 rounded-lg justify-center items-center">
      {
        totalValue === 0 
        ? 
        <p className="text-xl text-green-500">Contas pagas !</p> 
        :
        <>
          <h1 className="uppercase font-semibold text-zinc-400">Total</h1>
          <span className="text-xl font-semibold">R$ {totalValue.toFixed(2)}</span>
        </>
      }
    </div>
  )
}