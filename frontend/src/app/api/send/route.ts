import  { NextRequest, NextResponse} from 'next/server';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';


const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

type Payload = {
  firstName: string, 
  lastName: string,
  email: string, 
  message: string
}
export  async function POST(req: NextRequest) {


  try {
    const requestData : Payload = await req.json();
    console.log(requestData);
    await resend.emails.send({
      from: `${process.env.NEXT_RESEND_FROM}`,
      to: [`${process.env.NEXT_RESEND_TO}`],
      subject: 'Email from MarkSweitzer.io',
      react: EmailTemplate({ 
        firstName: requestData.firstName, 
        lastName: requestData.lastName, 
        email: requestData.email, 
        message: requestData.message
      }),
    });
    return NextResponse.json({
      status: 200,
      message: "Email was successfully sent."
    })
  }
  catch(error : any){

    return NextResponse.json({
      status: 500,
      message: error.message
    })
  }
  finally{
    console.log("Email endpoint was hit.")
  }


  // if (error) {
  //   return console.error({ error });
  // }    
  

};