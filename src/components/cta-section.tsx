import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CustomLessonPlans from "@/assets/custom_lesson_plans.jpg"
import GradedExams from "@/assets/graded_exams.jpg"
import PrivateLessons from "@/assets/private_lessons.jpg"
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <main>
      <div className="min-w-screen bg-foreground text-background">
        <div className="px-52 py-24">
            <div className="text-4xl font-extrabold">
                Ready to <span className="text-primary">learn</span>?
            </div>
            <div className="mt-6 text-xl text-background">
                We know it&apos;s a big leap to take. The first one&apos;s on us.
            </div>
            <div 
                className="mt-6">
                <Button className="bg-primary text-md py-4 animate-button-pulse">Schedule a free class.</Button>
            </div>
        </div>
      </div>

    </main>
  );
}

