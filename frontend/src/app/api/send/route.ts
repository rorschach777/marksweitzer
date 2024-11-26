import type { NextRequest} from 'next/server';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

type Payload = {
  firstName: string,
  lastName: string,
  email : string,
  message: string
}

export  async function POST(req: NextRequest) {
  const formData: Payload = await req.json();;
  try {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Email from Testy McTesterson',
    react: EmailTemplate({ 
      firstName: formData.firstName, 
      lastName: formData.lastName }),
  });

    if (error) {
      console.log(error.message)
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ data });
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
};