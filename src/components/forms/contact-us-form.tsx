'use client'

import { sendMessage } from '@/components/forms/actions'
import { useRef } from 'react'
import { 
    CardFooter, 
  } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from './submit-button';
import { toast } from 'sonner'

export function ContactUsForm() {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await sendMessage(formData);
        ref.current?.reset();
        toast.success("Your message was received.", {
            description: "Check your inbox to follow up"
        })
      }}
    >
        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Enter your Name</Label>
            <Input 
                id="name" 
                name="name"
                placeholder="Full Name" 
                className="text-white" 
                required
            />
            </div>
            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Enter your Email</Label>
            <Input 
                id="email" 
                name="email"
                placeholder="email@address.com" 
                className="text-white"
                type="email"
                required
            />
            </div>
            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="message">
                Enter your Message
            </Label>
            <Textarea 
                id="message"
                name="message"
                className="text-white"
                required
            />
            </div>
        </div>
        <CardFooter className="flex justify-between p-0 mt-4">
            <SubmitButton/>
        </CardFooter>
    </form>
  )
}
