import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ExamIcon from "@/assets/exam-icon.png";
import GrowthIcon from "@/assets/growth-icon.png";
import TeachingIcon from "@/assets/teaching-icon.png";
import PlanIcon from "@/assets/plan-icon.png";

export function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <div className="min-w-screen bg-foreground text-background">
        <div className="px-12 lg:px-52 py-24">
          <div className="text-4xl font-extrabold">
            How it <span className="text-primary ">works</span>
          </div>
          <div className="mt-2 lg:text-lg text-muted-foreground">
            Explore our four step system.
          </div>
          <div className="mt-12 w-full relative h-[1750px] lg:h-[375px]" ref={ref}>
          <HowItWorksCard
              title={"Assessment and Goal Setting"}
              content={
                "We start by assessing each students' skills with carefully designed tests. Using the results, we set clear and measurable goals to achieve their target SAT scores."
              }
              imageSrc={ExamIcon}
              imageAltDescription={"An icon of an exam "}
              index={1}
              animate={animate}
              isMobile={isMobile}
            />
            <HowItWorksCard
              title={"Customized Learning Plans"}
              content={
                "We use these goals to develop a personalized lesson plan in each field of mathematics."
              }
              imageSrc={PlanIcon}
              imageAltDescription={"An icon representing a lesson plan."}
              index={2}
              animate={animate}
              isMobile={isMobile}
            />
            <HowItWorksCard
              title={"Teaching and Adapting"}
              content={
                "With the plan guiding each lesson, we provide engaging and interactive instruction for the subjects the students struggle in. We consistently update the lesson plan based on student's performance."
              }
              imageSrc={TeachingIcon}
              imageAltDescription={"An icon showing a teacher and a class."}
              index={3}
              animate={animate}
              isMobile={isMobile}
            />
            <HowItWorksCard
              title={"Practice and Feedback"}
              content={
                "Offer ample opportunities for students to practice SAT math questions under timed conditions, simulating test-day pressure."
              }
              imageSrc={GrowthIcon}
              imageAltDescription={"An icon of a plant growing."}
              index={4}
              animate={animate}
              isMobile={isMobile}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
const iconBackgrounds = ["bg-amber-100", "bg-amber-100", "bg-amber-100", "bg-amber-100"];

function HowItWorksCard({
  title,
  content,
  imageAltDescription,
  imageSrc,
  index,
  animate,
  isMobile,
}:
  {title: string,
  content: string,
  imageAltDescription: string,
  imageSrc: StaticImageData,
  index: number,
  animate: boolean,
  isMobile: boolean
  }
) {
  const iconBackground = iconBackgrounds[index - 1];
  const delay = index * 0.075;

  const finalPositionsHorizontal = [
    "translate-x-[0%] z-10",
    "translate-x-[100%] z-20",
    "translate-x-[200%] z-30",
    "translate-x-[300%] z-40",
  ];

  const finalPositionsVertical = [
    "translate-y-0 z-10",
    "translate-y-[100%] z-20",
    "translate-y-[200%] z-30",
    "translate-y-[300%] z-40",
  ];

  const offsets = [
    "rotate-[-1deg] translate-x-[-20px]",
    "rotate-[-1deg] translate-x-[-10px]",
    "rotate-[1deg] translate-x-[0px]",
    "rotate-[1deg] translate-x-[10px]",
  ];

  return (
    <div
      className={`p-4 absolute transition-transform duration-700 ${
        animate
          ? isMobile
            ? finalPositionsVertical[index - 1]
            : finalPositionsHorizontal[index - 1]
          : offsets[index - 1]
      }`}
      style={{
        width: isMobile ? '100%' : '25%',
        transitionDelay: `${delay}s`,
      }}
    >
      <Card className="bg-card-foreground border-none shadow-2xl rounded-none  h-[420px]">
        <CardHeader>
          <div className={`${iconBackgrounds[index - 1]} h-20 w-20 rounded-full`}>
            <Image src={imageSrc} alt={imageAltDescription} className="p-6" />
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