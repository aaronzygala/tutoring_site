"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import { Icons } from "@/components/icons";
import { Textarea } from "@/components/ui/textarea"

export default function ContactUs() {
  return (
    <main className="overflow-clip">
        <div className="backdrop-blur-0 bg-gradient-to-b from-gray-950 to-transparent min-h-screen">

        <div className="flex flex-col items-left z-10 px-44 pt-4">
          <div className="mt-24">
            <Card className="border-none bg-transparent shadow-none">
              <div className="flex flex-col items-left">
              <CardHeader>
                  <div className="text-7xl text-white font-extrabold font-sans">
                    <span className="text-primary hover:italic">Get In Touch</span>
                  </div>
                  <span className="text-lg text-foreground">Feel free to leave any inquiries below, or give us a call to speak with our helpful sales team.</span>                   
                </CardHeader>
              <CardContent className="flex flex-row gap-12">
                    <Card className="w-[900px]">
                      <CardHeader >
                        <CardTitle>
                          Contact Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul>
                          <li className="flex items-center space-y-1.5">
                            <Icons.phone className="w-6 h-6 mr-2"/><span className="w-96">+1 (555)-555-5555</span>
                          </li>
                          <li className="flex items-center space-y-1.5">
                            <Icons.mail className="w-6 h-6 mr-2"/><span className="w-96">emailaddress@company.com</span>
                          </li>
                          <li className="flex items-center space-y-1.5">
                            <Icons.mapPin className="w-6 h-6 mr-2"/><span className="w-96">1234 Address Lane, City Name, State, Zip Code, United States</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="w-full">
                      <CardHeader className="text-2xl">
                        <CardTitle>Send us a Message</CardTitle>
                        <CardDescription>We&apos;ll get back to you as soon as we can.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form>
                          <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Enter your Name</Label>
                              <Input id="name" placeholder="Full Name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Enter your Email</Label>
                              <Input id="name" placeholder="email@address.com" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="framework">Enter your Message</Label>
                              <Textarea/>
                            </div>
                          </div>
                        </form>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Send</Button>
                      </CardFooter>
                    </Card>              
                  </CardContent>
              <CardFooter>
              </CardFooter>
              </div>
            </Card>
          </div>
        </div>
        </div>
    </main>
  );
}
