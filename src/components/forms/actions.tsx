"use server"

import { Resend } from 'resend';
import { ContactUsAutoReplyEmail } from '@/components/emails/contact-us-autoreply';
import { revalidatePath } from 'next/cache';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendMessage(formData: FormData) {
  
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  console.log("Test")

  try {
    // // Send email
    await resend.emails.send({
      from: 'Axiom Test Prep <info@axiomtestprep.com>',
      to: 'info@axiomtestprep.com',
      subject: `New Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });

    // Optional: Send auto-reply to the user
    await resend.emails.send({
      from: 'Axiom Test Prep <info@axiomtestprep.com>',
      to: email,
      subject: 'Welcome to Axiom Test Prep!',
      react: <ContactUsAutoReplyEmail/>,
    });
    
    // Revalidate the current path to clear form state
    revalidatePath('/contact');


    // Optionally return a success message or status
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send message' };
  }
}