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
import { Separator } from "@/components/ui/separator";
import MathSAT from "@/assets/Math SAT.png"
import ReadingSAT from "@/assets/Reading:Writing SAT.png"
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exams - Axiom Test Prep",
  description:
    "Axiom Test Prep offers private tutoring programs for the SAT, ACT, and CLT exams. Learn more about the exams we offer, and register for them here.",
  keywords: ["SAT", "ACT", "CLT", "prep", "standardized tests", "Axiom", "test prep", "private tutor", "private tutoring", "tutoring programs"],
  openGraph: {
    url: "https://www.axiomtestprep.com/exams",
    type: "website",
    title: "Exams - Axiom Test Prep",
    description:
      "Axiom Test Prep offers private tutoring programs for the SAT, ACT, and CLT exams. Learn more about the exams we offer, and register for them here.",
    images: [
      {
        url: "https://www.axiomtestprep.com/thumbnails/exams.png",
        width: 1200,
        height: 630,
        alt: "Axiom Test Page Exams Page"
      }
    ]
  },
  alternates: {
    canonical: "https://www.axiomtestprep.com/exams"
  }
};

export default function Exams() {
  return (
    <main>
      <div className="relative h-80 bg-cover bg-center bg-background" >
        <div className="flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
              <h1 className="flex flex-col items-left p-8 text-background">
                 <div className="text-4xl xl:text-7xl font-extrabold font-sans">
                    <span className="text-primary">
                      The Exams
                    </span>
                  </div>
                  <span className="text-sm xl:text-lg mt-2 text-foreground">
                    We offer study programs for a few standardized tests. Scroll
                    down to see a breakdown of them.
                  </span>
              </h1>
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

function SATStructure({examInfo}: {examInfo: ExamInfo}) {
  return(
    <div>
      <div className="mt-4 px-8 md:px-0">
        {examInfo.description}
      </div>
      <Card className="mt-4 bg-background">
        <CardHeader className="grid grid-cols-2 lg:grid-cols-6 w-full">
          <div className="text-foreground text-4xl mt-auto mb-auto font-bold col-span-2 mb-8 lg:mb-auto ">
              <span className="text-primary">{examInfo.name}</span> Structure
          </div>

          <div className="text-md p-4 bg-background border-[1px] border-border rounded-lg text-center">
            <div className="text-lg lg:text-3xl">4</div>
            <div className="">Modules</div>
          </div>
          <div className="text-md p-4 bg-background border-[1px] border-border rounded-lg text-center">
            <div className="text-lg lg:text-3xl">98</div>
            <div>Questions</div>
          </div>
          <div className="text-md p-4 bg-background border-[1px] border-border rounded-lg text-center">
            <div className="text-lg lg:text-3xl">2hr 14min</div>
            <div>Duration</div>
          </div>
          <div className="text-md p-4 bg-background border-[1px] border-border rounded-lg text-center">
            <div className="text-lg lg:text-3xl">1600</div>
            <div>Max Score</div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col 2xl:flex-row w-full gap-8 p-0">
            <div className="w-full relative aspect-[3/2]">
              <Image
                src={ReadingSAT}
                alt="Diagram for Reading section of SAT"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-full relative aspect-[3/2]">
              <Image
                src={MathSAT}
                alt="Diagram for Math section of SAT"
                fill
                className="object-contain"
                priority
              />
            </div>
          </CardContent>
      </Card>
  </div>
  )
}

function Exam({ examInfo }: { examInfo: ExamInfo }) {
  return (
    <div id={examInfo.name} className="py-24 px-0 md:px-12 lg:px-52  text-background">
      <div className="text-4xl font-extrabold px-8 md:px-0">
        The <span className="text-primary">{examInfo.name}</span>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex flex-col">
          {examInfo.name === "SAT" ? 
            <SATStructure examInfo={examInfo}/> : 
            <Image src={examInfo.image!} alt={"Exam Info Structure"} className="ml-auto mr-auto"/>
          }
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 w-full">
          <div className="px-12 md:px-0">
            <div className="text-2xl lg:text-4xl font-extrabold">
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
          <div className="mt-12 lg:mt-0 lg:pl-8 px-12 md:px-0">
            <div className="ml-auto text-left ">
              <div className="text-2xl lg:text-4xl text-background font-extrabold">
                FAQs
              </div>
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(examInfo.faqs).map(([key, value]) => (
                  <AccordionItem value={key} key={key}>
                    <AccordionTrigger className="text-left">{key}</AccordionTrigger>
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