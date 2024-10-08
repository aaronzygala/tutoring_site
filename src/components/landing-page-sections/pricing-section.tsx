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

export function PricingSection() {
  return (
    <main>
      <div className="min-w-screen bg-foreground text-background">
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
              <div className="grid gap-6">
                <h3 className="text-xl font-bold">Group SAT Math Course</h3>
                <ul className="grid gap-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Small Groups of 6-8
                    students
                  </li>
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Hosted Virtually
                    via Zoom
                  </li>
                  <li className="flex flex-col items-left">
                    <div className="flex items-center">
                      <Icons.check className="mr-2 h-4 w-4" /> 40.5 Total Hours
                    </div>
                    <ul className="ml-8 mt-4 grid gap-3 text-xs text-muted-foreground">
                      <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> 4.5 Hours of
                        Proctored Exams
                      </li>
                      <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> 24 Tutoring
                        Hours / 8 sessions
                      </li>
                      <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> 12 Review Hours
                        / 4 sessions
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 ">
                <div>
                  <h4 className="text-7xl font-bold">$350</h4>
                </div>
                <Link href="/" className="">
                  <Button className="">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="grid w-full items-start gap-10 rounded-lg border-2 p-10 md:grid-rows-[1fr_200px] rounded-none transition-all ease-in-out delay-150 hover:shadow-2xl">
              <div className="grid gap-6">
                <h3 className="text-xl font-bold">
                  Private Tutoring Plan
                  <div className="text-sm font-thin text-muted-foreground">
                    A completely personalized experience, designed to guide each
                    student to achieve their goal SAT score.
                  </div>
                </h3>

                <ul className="grid gap-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> An initial skill
                    assessment.
                  </li>
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Personalized study
                    materials and guides.
                  </li>
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Consistent
                    reassessment as their math skills evolve.
                  </li>
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Access to unlimited
                    study materials on our website.
                  </li>
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Unlimited weekly
                    sessions, prioritized scheduling available on our website.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 ">
                <div>
                  <h4 className="text-7xl font-bold">$150</h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    Per Session
                  </p>
                </div>
                <Link href="/" className="">
                  <Button className="">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="grid w-full items-start gap-10 rounded-lg border-2 border-t-0 lg:border-t-2 lg:border-l-0 p-10 md:grid-rows-[1fr_200px] rounded-t-none lg:rounded-l-none lg:rounded-r-lg transition-all ease-in-out delay-150 hover:shadow-2xl">
              <div className="grid gap-6">
                <h3 className="text-xl font-bold sm:text-2xl">
                  Group CLT Math Course
                </h3>
                <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-rows-2">
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Small Groups of 6-8
                    students
                  </li>
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Hosted Virtually
                    via Zoom
                  </li>
                  <li className="flex flex-col items-left">
                    <div className="flex items-center">
                      <Icons.check className="mr-2 h-4 w-4" /> 30 Total Hours
                    </div>
                    <ul className="ml-8 mt-4 grid gap-3 text-xs text-muted-foreground sm:grid-rows-2">
                      <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> 4 Hours of
                        Proctored Exams
                      </li>
                      <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> 18 Tutoring
                        Hours / 8 sessions
                      </li>
                      <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> 8 Review Hours
                        / 4 sessions
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 ">
                <div>
                  <h4 className="text-7xl font-bold">$300</h4>
                  <p className="text-sm font-medium text-muted-foreground"></p>
                </div>
                <Link href="/" className="">
                  <Button className="">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
