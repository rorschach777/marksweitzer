import { NextRequest } from "next/server";
import { cookies } from "next/headers";
type Payload = {
  value: string;
}
export  async function POST( req : NextRequest){

    // Query parameter passed in 

    try{
      const response = await req.json();
      const jobTitle = response.jobTitle;
      const cookieStore = await cookies();
     
      if (jobTitle !== null){
        // Set Cookie if not null
        cookieStore.set("jobTitle", jobTitle, { secure: false});
        console.log(`job title from url: ${jobTitle}`)
      } else {
        console.log("Job title wasn't specified");
      }
    } catch (error : any){

    }
   

    return Response.json(
      {},
      { status: 200 }
    );
}