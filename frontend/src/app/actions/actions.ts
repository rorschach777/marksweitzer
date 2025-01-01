'use server'
 
import { cookies } from 'next/headers'
 
interface ICookieData {
    jobTitle: string
}


export async function create(data : ICookieData) {
  const cookieStore = await cookies();
 
  cookieStore.set('title', 'booooobz');


  
}