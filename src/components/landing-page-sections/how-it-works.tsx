"use client"
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { useInView } from "react-intersection-observer";
import ExamIcon from "@/assets/exam-icon.png";
import GrowthIcon from "@/assets/growth-icon.png";
import TeachingIcon from "@/assets/teaching-icon.png";
import PlanIcon from "@/assets/plan-icon.png";

export function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, // Ensures animation triggers only once
  });

  const cardData = [
    {
      title: "Assessment and Goal Setting",
      content: "We start by assessing each student's skills with carefully designed tests. Using the results, we set clear and measurable goals to achieve their target SAT scores.",
      imageSrc: ExamIcon,
      imageAltDescription: "An icon of an exam"
    },
    {
      title: "Customized Learning Plans",
      content: "We use these goals to develop a personalized lesson plan in each field of mathematics.",
      imageSrc: PlanIcon,
      imageAltDescription: "An icon representing a lesson plan."
    },
    {
      title: "Teaching and Adapting",
      content: "With the plan guiding each lesson, we provide engaging and interactive instruction for the subjects the students struggle in. We consistently update the lesson plan based on student's performance.",
      imageSrc: TeachingIcon,
      imageAltDescription: "An icon showing a teacher and a class."
    },
    {
      title: "Practice and Feedback",
      content: "Offer ample opportunities for students to practice SAT math questions under timed conditions, simulating test-day pressure.",
      imageSrc: GrowthIcon,
      imageAltDescription: "An icon of a plant growing."
    }
  ];

  return (
    <main>
      <div className="min-w-screen bg-foreground">
        <div className="py-32">
          <div className="px-12 lg:px-52 text-2xl lg:text-4xl font-extrabold text-background">
            How It <span className="text-primary">Works</span>
          </div>
          <div className="px-12 lg:px-52 mt-2 lg:text-lg text-muted-foreground">
            Explore our four-step system.
          </div>
          <div 
            ref={ref} 
            className="place-items-center px-4 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
              {cardData.map((card, index) => (
                <HowItWorksCard
                  key={index}
                  {...card}
                  index={index + 1}
                  inView={inView}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function HowItWorksCard({
  title,
  content,
  imageAltDescription,
  imageSrc,
  index,
  inView
}: {
  title: string;
  content: string;
  imageAltDescription: string;
  imageSrc: StaticImageData;
  index: number;
  inView: boolean;
}) {
  return (
    <div 
      className={`
        w-full max-w-md 
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100' : 'opacity-0'}
        ${(index % 2 !== 0) ? "md:ml-auto" : "md:mr-auto"}
      `}
      style={{
        transitionDelay: inView ? `${(index - 1) * 200}ms` : '0ms'
      }}
    >
      <Card className={`w-full border-none shadow-2xl rounded-lg h-fit bg-foreground text-background`}>
        <CardHeader>
          <div className={`bg-amber-100 h-20 w-20 rounded-full`}>
            <Image src={imageSrc} alt={imageAltDescription} className="p-6" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-2 text-md">Step {index}</div>
          <div className="mt-4 text-lg font-bold">{title}</div>
          <div className="mt-4 text-sm">{content}</div>
        </CardContent>
      </Card>
    </div>
  );
}