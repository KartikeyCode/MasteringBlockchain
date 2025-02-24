"use server"
import { createClient } from '@/utils/supabase/server'
export async function isUser(){
    const supabase = await createClient()  
      const { data, error } = await supabase.auth.getUser()
      if (error || !data?.user) {
        return false;
      }
      return true;
}