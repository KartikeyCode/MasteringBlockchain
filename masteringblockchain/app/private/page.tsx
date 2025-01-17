"use client"
import { useRouter } from 'next/navigation'
import Navbar from '../components/navbar'
import { isUser } from './actions';
import {User} from "./actions"
import { useEffect,useState } from 'react'
export default function PrivatePage() {
  const router = useRouter()
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState< User | null>(null);
  useEffect(()=>{
    async function checkUser() {
      const userExists = await isUser();
      if( userExists && userExists.success){
        setIsLoggedIn(userExists.success);
        setUserData(userExists.data.user)
      }
      else{
        router.push("/login")
      }
    }
    checkUser();
  },[])

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen'>
      <Navbar/>
      <div>
        {
          isLoggedIn && userData &&
   <p>Hello {userData.email}</p>
        }
    
      </div>
    </div>
)

}