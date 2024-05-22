import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CustomLessonPlans from "@/assets/plan-icon.png"
import GradedExams from "@/assets/exam-icon.png"
import PrivateLessons from "@/assets/teaching-icon.png"
import {Icons} from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <main>
      <div className="min-w-screen bg-foreground text-background">
        <div className="px-52 py-24">
        <div className="flex w-full flex-col">
            <div className="text-4xl font-extrabold">
                Simple, transparent <span className="text-primary">pricing</span>
            </div>
            <div className="mt-2 text-xl text-muted-foreground">
                Whether its group tutoring or one-on-one, we&apos;re here to help.
            </div>
        </div>
        <div className="mt-12 flex flex-row">
        <div className="grid w-full items-start gap-10 rounded-lg border-2 p-10 md:grid-rows-[1fr_200px] rounded-r-none transition-all ease-in-out delay-150 hover:shadow-2xl">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-rows-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Users
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Custom domain
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Access to Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Premium Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <div>
            <h4 className="text-7xl font-bold">$19</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
          <Link href="/" className="">
            <Button className="">
                Get Started
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border-2 p-10 md:grid-rows-[1fr_200px] rounded-none transition-all ease-in-out delay-150 hover:shadow-2xl">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-rows-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Users
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Custom domain
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Access to Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Premium Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <div>
            <h4 className="text-7xl font-bold">$19</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
          <Link href="/" className="    ">
            <Button className="">
                Get Started
            </Button>
          </Link>
        </div>
        
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border-2 p-10 md:grid-rows-[1fr_200px] rounded-none transition-all ease-in-out delay-150 hover:shadow-2xl">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-rows-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Users
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Custom domain
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Access to Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Premium Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <div>
            <h4 className="text-7xl font-bold">$19</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
          <Link href="/" className="    ">
            <Button className="">
                Get Started
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border-2 p-10 md:grid-rows-[1fr_200px] rounded-l-none transition-all ease-in-out delay-150 hover:shadow-2xl">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-rows-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Users
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Custom domain
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Access to Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Premium Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <div>
            <h4 className="text-7xl font-bold">$19</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
            <Link href="/" className="">
                <Button className="">
                    Get Started
                </Button>
            </Link>

        </div>
      </div>
        </div>

        </div>
      </div>

    </main>
  );
}


function CardTest({title, description, imageAltDescription, imageSrc}: {title:string, description:string, imageAltDescription:string, imageSrc:StaticImageData}) {
    return(
      <Card className="w-96 h-[300px] bg-transparent border-none rounded-none shadow-none">
        <CardHeader>
          <CardTitle className="text-lg text-background text-center">
            <div className="h-24 w-24 mb-6 ml-auto mr-auto ">
              <Image
                  src={imageSrc}
                  alt={imageAltDescription}
                  className=""
                />
            </div>

              {title}
        
          </CardTitle>
          <CardDescription className="text-background text-center">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }
