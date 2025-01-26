import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DSATInfo, ACTInfo, CLTInfo, ExamInfo } from "@/lib/exam_info";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

export default function Exams() {
  return (
    <main>
      <div className="relative h-80 bg-cover bg-center bg-background" >
        <div className="flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
              <div className="flex flex-col items-left p-8 text-background">
                 <div className="text-4xl xl:text-7xl font-extrabold font-sans">
                    <span className="text-primary">
                      The Exams
                    </span>
                  </div>
                  <span className="text-md xl:text-lg mt-8 text-foreground">
                    We offer study programs for a few standardized tests. Scroll
                    down to see a breakdown of them.
                  </span>
              </div>
          </div>
        </div>
      </div>
      <div className="min-w-screen bg-foreground">
        <Exam examInfo={DSATInfo} />
        <div className="bg-foreground">
          <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
        </div>
        <Exam examInfo={ACTInfo} />
        <div className="bg-foreground">
          <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
        </div>        
        <Exam examInfo={CLTInfo} />
      </div>
    </main>
  );
}

function Exam({ examInfo }: { examInfo: ExamInfo }) {
  return (
    <div id={examInfo.name} className="py-24 px-12 lg:px-52  text-background">
      <div className="text-6xl font-extrabold">
        The <span className="text-primary">{examInfo.name}</span>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex flex-col">
          <div className="mt-4">
            {examInfo.description}
          </div>
          <Card className="mt-4 bg-background">
            <CardHeader className="flex flex-row w-full justify-around">
              <div className="text-foreground text-4xl mt-auto mb-auto font-bold">
                  <span className="text-primary">{examInfo.name}</span> Structure
              </div>
              <div className="text-md p-4 bg-background border-[1px] border-border rounded-lg text-center">
                <div className="text-3xl">4</div>
                <div className="">Modules</div>
              </div>
              <div className="text-md p-4 bg-background border-[1px] border-border rounded-lg text-center">
                <div className="text-3xl">98</div>
                <div>Questions</div>
              </div>
              <div className="text-md p-4 bg-background border-[1px] border-border rounded-lg text-center">
                <div className="text-3xl">2hr 14min</div>
                <div>Duration</div>
              </div>
              <div className="text-md p-4 bg-background border-[1px] border-border rounded-lg text-center">
                <div className="text-3xl">1600</div>
                <div>Max Score</div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-row w-full gap-4">
            <Card className="w-full relative bg-card">
                <CardHeader className="flex flex-row text-foreground">
                    <Icons.notebookPen strokeWidth={1.2} className="h-8 w-8 mt-auto mb-auto"/>
                    <div className="text-2xl mt-auto mb-auto pb-1 pl-4">Reading & Writing</div>
                </CardHeader>
                <CardContent className="flex flex-row gap-12">
                  <Card className="w-full text-center">
                    <CardHeader className="text-2xl pb-0 pt-4">
                      Module 1
                    </CardHeader>
                    <Separator className="my-3"/>
                    <CardContent className="text-left">
                      <ul>
                        <li className="list-disc ml-2">
                          32 questions
                        </li>
                        <li className="list-disc ml-2">
                          27 minutes
                        </li>
                      </ul>

                      <div className="mt-4 text-xs">
                        <span className="font-bold italic">Adaptive learning system: </span>
                        <div>Score at least 70% to maximize your score</div>
                      </div>

                      <div className="ml-auto mr-auto mt-6 text-lg text-center border-2 border-border w-fit p-4 rounded-lg"> Medium </div>
                    </CardContent>
                  </Card>
                  <ArrowAnimation/>
                  <Card className="w-full text-center">
                    <CardHeader className="text-2xl pb-0 pt-4">
                      Module 2
                    </CardHeader>
                    <Separator className="my-3"/>
                    <CardContent className="text-left">
                      <ul>
                        <li className="list-disc ml-2">
                          32 questions
                        </li>
                        <li className="list-disc ml-2">
                          27 minutes
                        </li>
                      </ul>

                      <div className="ml-auto mr-auto mt-8 text-lg text-center border-2 border-border w-fit p-4 rounded-lg"> 
                        Easy 
                        <div className="text-xs">
                          Max Score: 550
                        </div>
                      </div>


                      <div className="ml-auto mr-auto mt-4 text-lg text-center border-2 border-border w-fit p-4 rounded-lg"> 
                        Hard 
                        <div className="text-xs">
                          Max Score: 800
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
              <Card className="w-full relative bg-card">
                <CardHeader className="flex flex-row text-foreground">
                    <Icons.calculator strokeWidth={1.2} className="h-8 w-8 mt-auto mb-auto"/>
                    <div className="text-2xl mt-auto mb-auto pb-1 pl-4">Math</div>
                </CardHeader>
                <CardContent className="flex flex-row gap-12">
                  <Card className="w-full text-center">
                    <CardHeader className="text-2xl pb-0 pt-4">
                      Module 1
                    </CardHeader>
                    <Separator className="my-3"/>
                    <CardContent className="text-left">
                      <ul>
                        <li className="list-disc ml-2">
                          32 questions
                        </li>
                        <li className="list-disc ml-2">
                          27 minutes
                        </li>
                      </ul>

                      <div className="mt-4 text-xs">
                        <span className="font-bold italic">Adaptive learning system: </span>
                        <div>Score at least 60% to maximize your score</div>
                      </div>
                      {/* <div>
                        Score: 80%
                      </div> */}

                      <div className="ml-auto mr-auto mt-6 text-lg text-center border-2 border-border w-fit p-4 rounded-lg"> Medium </div>
                    </CardContent>
                  </Card>
                  <ArrowAnimation/>
                  <Card className="w-full text-center">
                    <CardHeader className="text-2xl pb-0 pt-4">
                      Module 2
                    </CardHeader>
                    <Separator className="my-3"/>
                    <CardContent className="text-left">
                      <ul>
                        <li className="list-disc ml-2">
                          32 questions
                        </li>
                        <li className="list-disc ml-2">
                          27 minutes
                        </li>
                      </ul>

                      <div className="ml-auto mr-auto mt-8 text-lg text-center border-2 border-border w-fit p-4 rounded-lg"> 
                        Easy 
                        <div className="text-xs">
                          Max Score: 550
                        </div>
                      </div>


                      <div className="ml-auto mr-auto mt-4 text-lg text-center border-2 border-border w-fit p-4 rounded-lg"> 
                        Hard 
                        <div className="text-xs">
                          Max Score: 800
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
          <div className="flex flex-row mt-16 w-full">

          <div className="w-[50%]">
            <div className="text-4xl font-extrabold">
              Registering for the <span className="text-primary">{examInfo.name}</span>
            </div>
            <div className="mt-4">
              {examInfo.registrationInfo.description}
            </div>
            <div className="mt-4 text-2xl font-bold">
              Registration Dates:
            </div>
            <ul className="list-disc ml-8 mt-4">
              {examInfo.registrationInfo.registrationDates.map(date => 
                <li key={date}> {date} </li>
              )}
            </ul>
            <div className="text-sm tracking-tight mt-4">
              For more information about registering for the DSAT, please visit:
              <span> </span>
              <Link href={examInfo.registrationInfo.officialLink} target="_blank" className="text-sky-400 hover:text-blue-400 hover:underline">
                {examInfo.name} Registration
              </Link> 
            </div>
          </div>
          <div className="w-[40%] ml-auto">
            <div className="ml-auto text-left">
              <div className="lg:text-4xl text-background font-extrabold">
                FAQs
              </div>
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(examInfo.faqs).map(([key, value]) => (
                  <AccordionItem value={key} key={key}>
                    <AccordionTrigger>{key}</AccordionTrigger>
                    <AccordionContent>{value}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          </div>



        </div>

      </div>
    </div>
  );
}


const ArrowAnimation: React.FC = () => {
  return (
<svg
  className="animated-arrow absolute z-10 top-1/2 left-[36%]"
  width="320" // Increased width for a better view
  height="200"
  viewBox="0 0 320 200" // Adjusted viewBox to fit the new path dimensions
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Initial Path */}
  <path
    className="arrow-path initial-path"
    d="M 0 100 
       C 70 100, 100 100, 110 100" // Extended the curve to the right
    stroke="white"
    strokeWidth="2"
    fill="none"
  />
  {/* Upper Split Path */}
  <path
    className="arrow-path split-path"
    d="M 110 100 
       C 120 90, 130 60, 170 60" // Adjusted the starting point
    stroke="firebrick"
    strokeWidth="2"
    fill="none"
  />
  {/* Lower Split Path */}
  <path
    className="arrow-path split-path"
    d="M 110 100 
       C 120 110, 130 140, 170 140" // Adjusted the starting point
    stroke="seagreen"
    strokeWidth="2"
    fill="none"
  />
  {/* Upper Arrowhead */}
  <path
    className="arrow-head"
    d="M 165 55 L 170 60 L 165 65" // Adjusted the position of the upper arrowhead
    stroke="firebrick"
    strokeWidth="2"
    fill="none"
  />
  {/* Lower Arrowhead */}
  <path
    className="arrow-head"
    d="M 165 135 L 170 140 L 165 145" // Adjusted the position of the lower arrowhead
    stroke="seagreen"
    strokeWidth="2"
    fill="none"
  />
</svg>

  );
};

