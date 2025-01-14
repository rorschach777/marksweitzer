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


  const requestData : Payload = await req.json();
  console.log(requestData);
  const { error } = await resend.emails.send({
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
  if(error){
    return NextResponse.json({
      status: 500,
      message: error.message
    })
  } else {
    return NextResponse.json({
      status: 200,
      message: "Email was successfully sent."
    })
  }



};