import * as Dialog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";
import { NewBillsForm } from './NewBillsForm'


export function ButtonOpenDialog({handleAddBills}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="text-white p-4 px-10 rounded-lg bg-green-600 mt-12 text-lg font-bold  hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-background">
        Criar
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0">
          <Dialog.Content className="absolute p-10 bg-background rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-gpurlpe focus:ring-offset-2 focus:ring-offset-background">
            <X size={24} aria-label="Fechar"/>
          </Dialog.Close>
            <Dialog.Title className="text-3xl leading-tight font-extrabold text-center">
              Qual é sua conta?
            </Dialog.Title>

            <NewBillsForm handleAddBills={handleAddBills}/>

          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}