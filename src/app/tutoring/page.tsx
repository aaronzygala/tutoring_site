import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import SATImage from "@/assets/SAT_logo.png"
import ACTImage from "@/assets/ACT_logo.png"
import CLTImage from "@/assets/CLT_logo.png"

export default function Tutoring() {
  return (
    <main>
      <div className="relative h-80 bg-cover bg-center bg-foreground " >
        <div className="flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
              <div className="flex flex-col items-left p-8 text-background">
                <div className="text-2xl xl:text-7xl font-extrabold font-sans">
                    <span className="text-primary">
                      Our Tutoring Programs
                    </span>
                  </div>
                  <span className="text-sm xl:text-lg mt-8">
                    Browse our programs, and schedule a time that works for you
                  </span>
              </div>
          </div>
        </div>
      </div>
      <div className="min-w-screen">
        <Program image={SATImage} programName={"SAT Tutoring"}/>
        <div className="bg-background">
          <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
        </div>
        <Program image={ACTImage} programName={"ACT Tutoring"}/>
        <div className="bg-background">
          <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
        </div>        
        <Program image={CLTImage} programName={"CLT Tutoring"}/>
      </div>
    </main>
  );
}
function Program({ image, programName }: { image: StaticImageData, programName: string }) {
  return (
    <div
      className={`lg:w-[80%] xl:w-[40%] ml-auto mr-auto p-8 border-border border-2 rounded-lg my-4 flex flex-col gap-3`}
    >
      <div className={`text-foreground text-3xl font-bold ml-auto mr-auto`}>
        {programName}
      </div>
      <div className="flex flex-row gap-4">
        <Image
          src={image}
          width={200}
          alt={"Program Image"}
          className="rounded-sm"
        />
        <div>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus nulla tellus eleifend eget eros vestibulum et dolor sit.
        </div>
      </div>


    </div>
  );
}
