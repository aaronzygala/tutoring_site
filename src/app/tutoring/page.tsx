import React from "react";
import Image, { StaticImageData } from "next/image";
import SATImage from "@/assets/SAT_logo.png"
import ACTImage from "@/assets/ACT_logo.png"
import CLTImage from "@/assets/CLT_logo.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Tutoring Programs - Axiom Test Prep",
  description:
    "Axiom Test Prep offers private tutoring programs for the SAT, ACT, and CLT exams. Browse our selection of programs and schedule one that works for you.",
  keywords: ["SAT", "ACT", "CLT", "prep", "standardized tests", "tutor", "tutoring", "study", "Axiom", "test prep", "private tutor", "private tutoring", "tutoring programs"],
  openGraph: {
    url: "https://www.axiomtestprep.com/tutoring",
    type: "website",
    title: "Tutoring Programs - Axiom Test Prep",
    description:
      "Axiom Test Prep offers private tutoring programs for the SAT, ACT, and CLT exams. Browse our selection of programs and schedule one that works for you.",
    images: [
      {
        url: "https://www.axiomtestprep.com/thumbnails/tutoring.png",
        width: 1200,
        height: 630,
        alt: "Axiom Test Page Tutoring Page"
      }
    ]
  },
  alternates: {
    canonical: "https://www.axiomtestprep.com/tutoring"
  }
};

export default function Tutoring() {
  return (
    <main>
      <div className="relative h-80 bg-cover bg-center bg-background " >
        <div className="flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
              <h1 className="flex flex-col items-left p-8 text-background">
                  <div className="text-4xl xl:text-7xl font-extrabold font-sans">
                    <span className="text-primary">
                      Our Tutoring Programs
                    </span>
                  </div>
                  <span className="text-sm xl:text-lg mt-2 text-foreground">
                    Browse our programs, and schedule a time that works for you
                  </span>
              </h1>
          </div>
        </div>
      </div>
      <div className="min-w-screen bg-foreground">
        <div className="text-2xl xl:text-4xl text-background p-8 lg:px-52 flex flex-col gap-8">
          <span className="font-bold">Private Tutoring</span>
          <div className="text-xs md:text-sm ">
            Our private tutoring services are designed to maximize student achievement through personalized, one-on-one virtual instruction that accommodates diverse schedules. 
            We begin with complimentary consultations to evaluate each student&apos;s academic profile, including performance history, target institutions, and areas for development. 
            These insights inform customized learning plans tailored to individual goals.
          </div>
          <div className="text-xs md:text-sm ">
            Our flexible scheduling and no-commitment policy ensure students can focus entirely on their academic progress. 
            Our methodology is grounded in the systematic analysis of standardized test patterns and question frameworks. 
            By exposing students to comprehensive question banks and focusing intervention on identified challenge areas, 
            we cultivate both technical mastery and confidence for examination day.
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 place-items-center">
          <Program 
                  image={SATImage} 
                  programName={"SAT Private Tutoring"} 
                  bulletPoints={[
                    "Free initial intake meeting to assess goals and challenges",
                    "One-on-one, flexible tutoring sessions via Zoom",
                    "Customized study plan based on individual needs",
                    "Focused review of frequently asked question types",
                    "Emphasis on overcoming specific weaknesses",
                    "No-commitment cancellations at any time",
                  ]}
                  readingPath="https://calendly.com/axiomtestprep/sat-reading-private-tutoring"
                  mathPath="https://calendly.com/axiomtestprep/sat-math-private-tutoring"
                  specialClass="xl:ml-auto"
                  id="SAT"
                  />
          <Program image={ACTImage} programName={"ACT Private Tutoring"} bulletPoints={[
                    "Free initial intake meeting to assess goals and challenges",
                    "One-on-one, flexible tutoring sessions via Zoom",
                    "Customized study plan based on individual needs",
                    "Focused review of frequently asked question types",
                    "Emphasis on overcoming specific weaknesses",
                    "No-commitment cancellations at any time",
                  ]}
                  readingPath="https://calendly.com/axiomtestprep/act-reading-private-tutoring"
                  mathPath="https://calendly.com/axiomtestprep/act-math-private-tutoring"
                  specialClass="xl:mr-auto"
                  id="ACT"

                  />      
          <Program image={CLTImage} programName={"CLT Private Tutoring"} bulletPoints={[
                    "Free initial intake meeting to assess goals and challenges",
                    "One-on-one, flexible tutoring sessions via Zoom",
                    "Customized study plan based on individual needs",
                    "Focused review of frequently asked question types",
                    "Emphasis on overcoming specific weaknesses",
                    "No-commitment cancellations at any time",
                  ]}
                  readingPath="https://calendly.com/axiomtestprep/clt-reading-private-tutoring"
                  mathPath="https://calendly.com/axiomtestprep/clt-math-private-tutoring"
                  specialClass="xl:col-span-2 xl:ml-auto xl:mr-auto mb-8"
                  id="CLT"

                  />
        </div>

      </div>
    </main>
  );
}
function Program({ image, programName, bulletPoints, readingPath, mathPath, specialClass, id }: { image: StaticImageData, programName: string, bulletPoints: string[], readingPath: string, mathPath: string, specialClass: string, id: string  }) {
  return (
    <div id={id} className={`${specialClass} place-items-center`}>
    <div className={`w-full lg:w-[80%] p-8 border-accent/5 border-2 rounded-lg flex flex-col gap-3 `}>
      <div className={`text-background text-2xl xl:text-4xl font-bold ml-auto mr-auto`}>
        {programName}
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <Image
          src={image}
          width={200}
          alt={"Program Image"}
          className="rounded-sm object-contain mt-auto mb-auto ml-auto mr-auto"
        />
        <div className="flex flex-col gap-4">
          <ul className="list-disc ml-4 text-background text-xs md:text-sm ">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-8 ml-auto mr-auto mt-4">
        <Link href={readingPath} target="_blank">
          <Button className="w-full font-bold text-xs lg:text-sm">
            Schedule Reading Tutoring
          </Button>
        </Link>
        <Link href={mathPath} target="_blank">
          <Button className="w-full font-bold text-xs lg:text-sm">
            Schedule Math Tutoring
          </Button>
        </Link>

      </div>

    </div>
    </div>

  );
}
