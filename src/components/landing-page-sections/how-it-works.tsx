import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ExamIcon from "@/assets/exam-icon.png";
import GrowthIcon from "@/assets/growth-icon.png";
import TeachingIcon from "@/assets/teaching-icon.png";
import PlanIcon from "@/assets/plan-icon.png";


export function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <main>
      <div className="min-w-screen bg-foreground text-background">
        <div className="px-12 lg:px-52 py-24">
          <div className="text-4xl font-extrabold">
            How it <span className="text-primary ">works</span>
          </div>
          <div className="mt-2 text-lg text-muted-foreground">
              Explore our four step system.
          </div>
          <div className="mt-12 w-full relative h-[375px]" ref={ref}>
            <HowItWorksCard
              title={"Assessment and Goal Setting"}
              content={
                "We start by assessing each students' skills with carefully designed tests.\
                Using the results, we set clear and measurable goals to achieve their target SAT scores."
              }
              imageSrc={ExamIcon}
              imageAltDescription={
                "An icon of an exam "
              }
              index={1}
              animate={animate}
            />
            <HowItWorksCard
              title={"Customized Learning Plans"}
              content={
                  "We use these goals to develop a personalized lesson plan in each field of mathematics "
              }

              imageSrc={PlanIcon}
              imageAltDescription={
                "An icon representing a lesson plan."
              }
              index={2}
              animate={animate}
            />
            <HowItWorksCard
              title={"Teaching and Adapting"}
              content={
                "With the plan guiding each lesson, we provide engaging and interactive instruction for the subjects the students struggle in.\
                 We consistently update the lesson plan based on student's performance."
              }
              imageSrc={TeachingIcon}
              imageAltDescription={
                "An icon showing a teacher and a class."
              }
              index={3}
              animate={animate}
            />
            <HowItWorksCard
              title={"Practice and Feedback"}
              content={
                "Offer ample opportunities for students to practice SAT math questions under timed conditions, simulating test-day pressure. \
                "
              }
              imageSrc={GrowthIcon}
              imageAltDescription={
                "An icon of a plant growing."
              }
              index={4}
              animate={animate}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

const offsets = [
  { transform: "rotate(-1deg) translate(-10px, 0px)" },
  { transform: "rotate(-1deg) translate(100px, 0px)" },
  { transform: "rotate(1deg) translate(200px, 0px)" },
  { transform: "rotate(1deg) translate(300px, 0px)" },
];

const finalPositions = [
  { transform: "translateX(-10%)", zIndex: 1 },
  { transform: "translateX(90%)", zIndex: 2 },
  { transform: "translateX(190%)", zIndex: 3 },
  { transform: "translateX(290%)", zIndex: 4 },
];

const iconBackgrounds = [
  "bg-amber-100", "bg-amber-100", "bg-amber-100", "bg-amber-100"
];

function HowItWorksCard({
  title,
  content,
  imageAltDescription,
  imageSrc,
  index,
  animate,
}: {
  title: string;
  content: string;
  imageAltDescription: string;
  imageSrc: StaticImageData;
  index: number;
  animate: boolean;
}) {

  const iconBackground = iconBackgrounds[index-1];
  const delay = index * 0.075;

  return (
    <div
      className={`p-4 w-[350px] absolute transition-transform duration-700 ${animate ? `reveal-card` : ""}`}
      style={{
        ...(animate ? finalPositions[index - 1] : offsets[index - 1]),
        transitionDelay: `${delay}s`,
      }}
    >
      <Card className="bg-card-foreground border-none shadow-2xl rounded-none h-[360px]">
        <CardHeader>
          <div className={`${iconBackgrounds[index-1]} h-20 w-20 rounded-full`}>
            <Image
              src={imageSrc}
              alt={imageAltDescription}
              className="p-6"
            />
          </div>
        </CardHeader>
        <CardContent className="text-background">
          <div className="mt-2 text-md">Step {index}</div>
          <div className="mt-4 text-lg font-bold">{title}</div>

          <div className="mt-4 text-sm text-muted">{content}</div>
          
        </CardContent>
      </Card>

    </div>
  );
}
