import { Bills } from './Bills';
import { HeaderInfo } from './HeaderInfo';

export function BillsList({ billsList }) {
  return (
    <div  className="mt-3 flex justify-center items-center w-1/2 gap-3 flex-wrap">
      {
         billsList.length > 0
         ?
         billsList.map((bill) => {       
         return (
           <Bills  
             key={bill.id}
             bill={bill}
           />
         )
        })
        :
       <HeaderInfo />
      }   
    </div>
  )
}