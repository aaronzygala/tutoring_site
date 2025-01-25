import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export function PricingSection() {
  return (
    <main>
      <div className="min-w-screen">
        <div className="px-12 lg:px-52 py-24">
          <div className="flex w-full flex-col">
            <div className="text-4xl font-extrabold">
              Our tutoring <span className="text-primary">plans</span>
            </div>
            <div className="mt-2 lg:text-lg text-muted-foreground">
              Whether its group tutoring or one-on-one, we&apos;re here to help.
            </div>
          </div>
          <div className="mt-12 flex flex-col lg:flex-row">
            <div className="grid w-full items-start gap-10 rounded-lg border-2 border-b-0 lg:border-b-2 lg:border-r-0 p-10 md:grid-rows-[1fr_200px] rounded-b-none lg:rounded-r-none lg:rounded-bl-lg transition-all ease-in-out delay-150 hover:shadow-2xl">
              <div className="grid gap-2">
                <h3 className="text-3xl font-extrabold text-center">SAT</h3>
                <Tabs defaultValue="math" className="ml-auto mr-auto text-center w-full">
                  <TabsList className="">
                      <TabsTrigger value="math">Math</TabsTrigger>
                      <TabsTrigger value="reading">Reading</TabsTrigger>
                  </TabsList>
                  <TabsContent value="math">
                    <ul className="grid gap-3 text-sm text-muted-foreground">
                      <li className="flex items-left">
                        <Icons.check className="mr-2 h-4 w-4" /> Small Groups of 3-5
                        students
                      </li>
                      <li className="flex items-left">
                        <Icons.check className="mr-2 h-4 w-4" /> One class every week for 10 weeks
                      </li>
                      <li className="flex items-left">
                        <Icons.check className="mr-2 h-4 w-4" /> Thursday or Sunday
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="reading">
                      <ul className="grid gap-3 text-sm text-muted-foreground">
                        <li className="flex items-left">
                          <Icons.check className="mr-2 h-4 w-4" /> Small Groups of 2-4
                          students
                        </li>
                        <li className="flex items-left">
                          <Icons.check className="mr-2 h-4 w-4" /> One class every week for 8 weeks
                        </li>
                        <li className="flex items-left">
                          <Icons.check className="mr-2 h-4 w-4" /> Wednesday or Saturday
                        </li>
                      </ul>
                  </TabsContent>
                </Tabs>

              </div>
              <div className="flex flex-col gap-4 mt-auto">
                <div>
                  <h4 className="text-7xl font-bold">$1200</h4>
                </div>
                <Link href="/" className="">
                  <Button className="">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="grid w-full items-start gap-10 rounded-lg border-2 p-10 md:grid-rows-[1fr_200px] rounded-none transition-all ease-in-out delay-150 hover:shadow-2xl">
              <div className="grid gap-2">
                <h3 className="text-3xl font-extrabold text-center">
                  ACT
                </h3>
                <Tabs defaultValue="math" className="ml-auto mr-auto text-center w-full">
                  <TabsList className="">
                      <TabsTrigger value="math">Math</TabsTrigger>
                      <TabsTrigger value="reading">Reading</TabsTrigger>
                  </TabsList>
                  <TabsContent value="math">
                    <ul className="grid gap-3 text-sm text-muted-foreground">
                      <li className="flex items-left">
                        <Icons.check className="mr-2 h-4 w-4" /> Small Groups of 3-5
                        students
                      </li>
                      <li className="flex items-left">
                        <Icons.check className="mr-2 h-4 w-4" /> One class every week for 9 weeks
                      </li>
                      <li className="flex items-left">
                        <Icons.check className="mr-2 h-4 w-4" /> Tuesday or Sunday
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="reading">
                      <ul className="grid gap-3 text-sm text-muted-foreground">
                        <li className="flex items-left">
                          <Icons.check className="mr-2 h-4 w-4" /> Small Groups of 2-4
                          students
                        </li>
                        <li className="flex items-left">
                          <Icons.check className="mr-2 h-4 w-4" /> One class every week for 9 weeks
                        </li>
                        <li className="flex items-left">
                          <Icons.check className="mr-2 h-4 w-4" /> Monday or Saturday
                        </li>
                      </ul>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="flex flex-col gap-4 mt-auto">
                <div>
                  <h4 className="text-7xl font-bold">$1200</h4>
                </div>
                <Link href="/" className="">
                  <Button className="">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="grid w-full items-start gap-10 rounded-lg border-2 p-10 md:grid-rows-[1fr_200px] rounded-none transition-all ease-in-out delay-150 hover:shadow-2xl">
              <div className="grid gap-2">
                <h3 className="text-3xl font-extrabold text-center">
                  CLT
                </h3>
                <Tabs defaultValue="math" className="ml-auto mr-auto text-center w-full">
                  <TabsList className="">
                      <TabsTrigger value="math">Math</TabsTrigger>
                      <TabsTrigger value="reading">Reading</TabsTrigger>
                  </TabsList>
                  <TabsContent value="math">
                    <ul className="grid gap-3 text-sm text-muted-foreground">
                      <li className="flex items-left">
                        <Icons.check className="mr-2 h-4 w-4" /> Small Groups of 3-5
                        students
                      </li>
                      <li className="flex items-left">
                        <Icons.check className="mr-2 h-4 w-4" /> One class every week for 9 weeks
                      </li>
                      <li className="flex items-left">
                        <Icons.check className="mr-2 h-4 w-4" /> Tuesday or Sunday
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="reading">
                      <ul className="grid gap-3 text-sm text-muted-foreground">
                        <li className="flex items-left">
                          <Icons.check className="mr-2 h-4 w-4" /> Small Groups of 2-4
                          students
                        </li>
                        <li className="flex items-left">
                          <Icons.check className="mr-2 h-4 w-4" /> One class every week for 9 weeks
                        </li>
                        <li className="flex items-left">
                          <Icons.check className="mr-2 h-4 w-4" /> Monday or Saturday
                        </li>
                      </ul>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="flex flex-col gap-4 mt-auto">
                <div>
                  <h4 className="text-7xl font-bold">$1200</h4>
                </div>
                <div className="flex flex-row gap-3">
                  <Link href="/" className="">
                    <Button className="">Learn More</Button>
                  </Link>
                  {/* <Link href="/" >
                    <Button className="bg-primary/40 hover:bg-primary/60">Schedule Now</Button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
