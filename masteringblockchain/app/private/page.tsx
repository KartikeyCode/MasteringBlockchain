import { redirect } from 'next/navigation'
import Navbar from '../components/navbar'
import { createClient } from '@/utils/supabase/server'
export default async function PrivatePage() {
  const supabase = await createClient()  
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen'>
      <Navbar/>
      <div>
   <p>Hello {data.user.email}</p>
    
      </div>
    </div>
)

}