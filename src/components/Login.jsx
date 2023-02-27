import * as Tabs from '@radix-ui/react-tabs';

export function Login() {
  return (
    <div className='mt-12'>
      <h2 className='text-4xl text-center'>Bem Vindo !</h2>
      <p className='text-zinc-500 text-center mt-2'>Entre ou crie uma nova conta</p>
      <Tabs.Root className='w-full mt-7 bg-inputbg rounded-xl p-2' defaultValue="tab1">
        <Tabs.List className=''>
          <Tabs.Trigger className='mx-5 text-2xl focus:border-b-2 text-zinc-300 focus:border-gpurlpe' value="tab1" >
            Login
          </Tabs.Trigger>
          <Tabs.Trigger className='mx-5 text-2xl focus:border-b-2 text-zinc-300 focus:border-gpurlpe' value="tab2">
            Cadastre-se
          </Tabs.Trigger>
        </Tabs.List>
          <Tabs.Content value='tab1'>
           <p className='text-xl text-zinc-400 my-5'>Por favor entre com seu e-mail e senha.</p>
           <form action="" className='flex flex-col gap-3'>
            <input 
              className="w-full p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-gpurlpe border-2 border-background text-white focus:outline-none focus:ring-2 focus:ring-gpurlpe focus:ring-offset-2 focus:ring-offset-background" 
              type="email" 
              placeholder='seu e-mail'
              name="email"
            />
             <input 
              className="w-full p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-gpurlpe border-2 border-background text-white focus:outline-none focus:ring-2 focus:ring-gpurlpe focus:ring-offset-2 focus:ring-offset-background" 
              type="password" 
              placeholder='******'
              name="password"
            />
           </form>
          </Tabs.Content>
          <Tabs.Content value='tab2' >
          <p className='text-xl text-zinc-400 my-5'>Digite seus dados e clique em cadastrar.</p>
           <form action="" className='flex flex-col gap-3'>
            <input 
              className="w-full p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-gpurlpe border-2 border-background text-white focus:outline-none focus:ring-2 focus:ring-gpurlpe focus:ring-offset-2 focus:ring-offset-background" 
              type="email" 
              placeholder='seu e-mail'
              name="email"
            />
             <input 
              className="w-full p-4 rounded-lg placeholder:text-center placeholder:text-zinc-400 bg-gpurlpe border-2 border-background text-white focus:outline-none focus:ring-2 focus:ring-gpurlpe focus:ring-offset-2 focus:ring-offset-background" 
              type="password" 
              placeholder='******'
              name="password"
            />
           </form>
          </Tabs.Content> 
      </Tabs.Root>
    </div>
  ) 
}