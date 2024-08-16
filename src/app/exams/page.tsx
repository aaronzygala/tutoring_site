"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import museumImage from "@/assets/museum.jpg";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DSATInfo, ACTInfo, CLTInfo, ExamInfo } from "@/lib/exam_info";
import Link from "next/link";

export default function ContactUs() {

  return (
    <main>
      <div className="relative h-80 bg-cover bg-center" >
        <div className="relative backdrop-blur-lg h-80 bg-gradient-to-b from-background to-transparent overflow-hidden z-10 flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
            <Card className="border-none bg-transparent shadow-none">
              <div className="flex flex-col items-left">
                <CardHeader>
                  <div className="text-7xl text-white font-extrabold font-sans">
                    <span className="text-primary lg:hover:italic">
                      The Exams
                    </span>
                  </div>
                  <span className="text-lg">
                    We offer study programs for a few standardized tests. Scroll
                    down to see a breakdown of them.
                  </span>
                </CardHeader>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="min-w-screen bg-foreground text-background">
        <Exam examInfo={DSATInfo} />
        <Exam examInfo={ACTInfo} />
        <Exam examInfo={CLTInfo} />

      </div>
    </main>
  );
}

function Exam({ examInfo }: { examInfo: ExamInfo }) {
  return (
    <div id={examInfo.name} className="py-24 px-12 lg:px-52">
      <div className="text-6xl font-extrabold">
        The <span className="text-primary">{examInfo.name}</span>
      </div>

      <div className="flex flex-row w-full">
        <div className="w-[50%] flex flex-col">
          <div className="mt-4">
            {examInfo.description}
          </div>
          <div className="mt-8 text-4xl font-extrabold">
            What&apos;s on the <span className="text-primary">{examInfo.name}</span>?
          </div>
          <div className="mt-4">
            {examInfo.examContent.map(examSection => 
            <div key={examSection.sectionName}>
                <div className="font-bold" >
                  {examSection.sectionName} Section: 
                </div>
                <ul className="list-disc ml-8 space-y-1.5">
                  <li>Total Questions: {examSection.totalQuestions}</li>
                  <li>Time Allotted: {examSection.timeAlloted}</li>
                  <ul className="list-disc ml-8">
                    {examSection.contentAreas.map(area => 
                      <li key={area}> {area} </li>
                    )}
                  </ul>
                </ul>
                <div className="text-sm font-bold">{examSection.additionalInfo ?? examSection.additionalInfo}</div>

              </div>
            )}
          </div>
          <div className="mt-8 text-4xl font-extrabold">
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
        <div className="ml-auto w-[40%]">
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
  );
}
