"use client"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons";
import tempImage from "@/app/favicon.ico";


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
                    <span className="text-primary hover:italic">Meet the Team</span>
                  </div>
                  <span className="text-lg text-foreground">We are a small team of dedicated math-enthusiasts.</span>                   
                </CardHeader>
              <CardContent className="flex flex-row gap-12 w-full mt-6 justify-evenly">
                    <Card className="">
                      <CardHeader >
                        <CardTitle>
                          Natalia Mercado
                        </CardTitle>
                        <CardDescription>
                            Short blurb on the instructor&apos;s qualifications, etc.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                            src={tempImage}
                            alt="A Headshot of the instructor"
                            className="h-[500px] w-[500px] ml-auto mr-auto py-6"
                        />
                        Longer explanation of why the instructor tutors, any fun facts, etc. Maybe LinkedIn link?
                      </CardContent>
                    </Card>
                    <Card className="">
                      <CardHeader >
                        <CardTitle>
                          Aaron Zygala
                        </CardTitle>
                        <CardDescription>
                            Short blurb on the instructor&apos;s qualifications, etc.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                            src={tempImage}
                            alt="A Headshot of the instructor"
                            className="h-[500px] w-[500px] ml-auto mr-auto py-6"
                        />
                        Longer explanation of why the instructor tutors, any fun facts, etc. Maybe LinkedIn link?
                      </CardContent>
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
