import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Textarea } from "@/components/ui/textarea";
import museumImage from "@/assets/museum2.jpg";
import Image from "next/image"
import fs from "fs";
import { Resend } from 'resend';
import { ContactUsAutoReplyEmail } from '../../components/emails/contact-us-autoreply';

const resend = new Resend(process.env.RESEND_API_KEY!);
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";


export default function ContactUs() {
  // // State variables for form inputs
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async () => {
    'use server'
    console.log("Test");

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'aaronzygala@gmail.com',
        subject: 'We Got Your Message!',
        react: <ContactUsAutoReplyEmail/>,
      });
      // Reset form after successful submission
      // setName('');
      // setEmail('');
      // setMessage('');
      // Optional: Add success notification
    } catch (error) {
      console.error('Failed to send email:', error);
      // Optional: Add error notification
    }
  };

  return (
    <main>
      <div className="relative min-h-screen bg-cover bg-center">
        <Image src={museumImage} alt={"Header image for landing page, depicting a lavish museum"} className="absolute top-0 z-0 h-screen"/>
        <div className="relative backdrop-blur-0 bg-gradient-to-b from-foreground to-transparent overflow-hidden z-10 flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
            <Card className="border-none bg-transparent shadow-none">
              <div className="flex flex-col items-left">
                <CardHeader>
                  <div className="text-7xl text-white font-extrabold font-sans">
                    <span className="text-primary">
                      Get In Touch
                    </span>
                  </div>
                  <span className="text-lg text-background">
                    Feel free to leave any inquiries below, or give us a call to
                    speak with our helpful sales team.
                  </span>
                </CardHeader>
                <CardContent className="flex flex-col lg:flex-row gap-12">
                  <Card className="lg:w-[900px] bg-black border-none text-white">
                    <CardHeader>
                      <CardTitle>Contact Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul>
                        <li className="flex my-4">
                          <span className="bg-yellow-400 p-3 rounded-full">
                            <Icons.phone className="text-black" />
                          </span>
                          <span className="w-96 mt-auto mb-auto ml-4">
                            +1 (555)-555-5555
                          </span>
                        </li>
                        <li className="flex my-4">
                          <span className="bg-yellow-400 p-3 rounded-full">
                            <Icons.mail className="text-black" />
                          </span>
                          <span className="w-96 mt-auto mb-auto ml-4">
                            axiomtestprep@gmail.com
                          </span>
                        </li>
                        <li className="flex my-4">
                          <span className="bg-yellow-400 p-3 rounded-full">
                            <Icons.mapPin className="text-black" />
                          </span>
                          <span className="w-96 mt-auto mb-auto ml-4">
                            1234, Address Lane, City, State United States, Zip
                            Code
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="w-full bg-black border-none text-white">
                    <CardHeader className="text-2xl">
                      <CardTitle>Send us a Message</CardTitle>
                      <CardDescription>
                        We&apos;ll get back to you as soon as we can.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form action={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Enter your Name</Label>
                            <Input 
                              id="name" 
                              placeholder="Full Name" 
                              className="text-black" 
                              // value={name}
                              // onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Enter your Email</Label>
                            <Input 
                              id="email" 
                              placeholder="email@address.com" 
                              className="text-black"
                              type="email"
                              // value={email}
                              // onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="message">
                              Enter your Message
                            </Label>
                            <Textarea 
                              id="message"
                              className="text-black"
                              // value={message}
                              // onChange={(e) => setMessage(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <CardFooter className="flex justify-between p-0 mt-4">
                          <Button type="submit">Send</Button>
                        </CardFooter>
                      </form>
                    </CardContent>
                  </Card>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}