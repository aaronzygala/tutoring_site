import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomLessonPlans from "@/assets/plan-icon.png";
import GradedExams from "@/assets/exam-icon.png";
import PrivateLessons from "@/assets/teaching-icon.png";

export function IncentiveSection() {
  return (
    <main>
      <div className="min-w-screen bg-foreground text-background">
        <div className="py-24">
          <div className="px-12 lg:px-52 text-4xl font-extrabold">
            Why choose <span className="text-primary">Axiom Test Prep</span>?
          </div>
          <div className="px-12 lg:px-52 mt-2 lg:text-lg text-muted-foreground">
            Check out the benefits of the education we offer.
          </div>
          <div className="flex justify-center mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <IncentiveCard
                  title={"Private Lessons"}
                  description={
                    "During our Live Lessons we provide 1:1 support directly in Zoom. Every week you'll join mentorship sessions to build your confidence."
                  }
                  imageSrc={PrivateLessons}
                  imageAltDescription={
                    "An image showing a teacher having a 1 on 1 tutoring session with their student"
                  }
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <IncentiveCard
                  title={"Realistic Exams"}
                  description={
                    "Be prepared for the SAT, ACT and CLT exams by taking practice exams that mimic the real thing!"
                  }
                  imageSrc={GradedExams}
                  imageAltDescription={"An image showing a graded exam"}
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <IncentiveCard
                  title={"Custom Lesson Plans"}
                  description={
                    "Personalized plans designed by your teacher to maximize your learning potential. Every student is unique, and we're ready to help."
                  }
                  imageSrc={CustomLessonPlans}
                  imageAltDescription={
                    "An image showing an agenda for a tutor's student."
                  }
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <IncentiveCard
                  title={"Experienced Teachers"}
                  description={
                    "We have a team of experienced math instructors with 99th-percentile SAT scores. Our students will be personally guided by the best possible teachers."
                  }
                  imageSrc={CustomLessonPlans}
                  imageAltDescription={
                    "An image showing an agenda for a tutor's student."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function IncentiveCard({
  title,
  description,
  imageAltDescription,
  imageSrc,
}: {
  title: string;
  description: string;
  imageAltDescription: string;
  imageSrc: StaticImageData;
}) {
  return (
    <Card className="bg-transparent border-none rounded-none shadow-none">
      <CardHeader>
        <CardTitle className="text-lg text-background text-center">
          <div className="h-24 w-24 mb-6 ml-auto mr-auto">
            <Image src={imageSrc} alt={imageAltDescription} className="" />
          </div>
          {title}
        </CardTitle>
        <CardDescription className="text-background text-center w-[60%] lg:w-[80%] justify-center ml-auto mr-auto">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
