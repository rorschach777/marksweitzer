import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export  async function POST( req : NextRequest){

    // Query parameter passed in 

    try{
      const response = await req.json();
      const jobTitle = response.jobTitle;
      const cookieStore = await cookies();
     
      if (jobTitle !== null){
        // Set Cookie if not null
        cookieStore.set("jobTitle", jobTitle, { secure: false});
      }
    } 
    finally{
      return Response.json(
        {},
        { status: 200 }
      );
    } 
   

}