"use server"
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
export default async function signOut() {
  const supabase = await createClient()  
    const { error } = await supabase.auth.signOut()
    if(error){
      console.log(error)
    }
    redirect("/login")
  }

  export async function isUser(){
    const supabase = await createClient()  
      const { data, error } = await supabase.auth.getUser()
      if (error || !data?.user) {
        return false;
      }
      return {success:true,data};
}

export interface User {
  id: string
  aud: string
  confirmation_sent_at?: string
  recovery_sent_at?: string
  email_change_sent_at?: string
  new_email?: string
  new_phone?: string
  invited_at?: string
  action_link?: string
  email?: string
  phone?: string
  created_at: string
  confirmed_at?: string
  email_confirmed_at?: string
  phone_confirmed_at?: string
  last_sign_in_at?: string
  role?: string
  updated_at?: string
  is_anonymous?: boolean
}