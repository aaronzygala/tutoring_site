import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

const ExamPricing = ({ examName, mathDetails, readingDetails, price } : {examName: string, mathDetails: string[], readingDetails: string[], price: number}) => (
  <div className="grid w-full items-start rounded-lg border-accent/20 border-2 p-10 lg:hover:shadow-2xl transition-all">
    <div className="grid gap-2 w-full">
      <h3 className="text-3xl font-extrabold text-center w-full">{examName}</h3>
      <Tabs defaultValue="math" className="w-full justify-center items-center place-items-center">
        <TabsList className="ml-auto mr-auto">
          <TabsTrigger value="math">Math</TabsTrigger>
          <TabsTrigger value="reading">Reading</TabsTrigger>
        </TabsList>
        <TabsContent value="math">
        <ul className="grid gap-3 text-sm text-muted-foreground">
          {mathDetails.map((detail, index) => (
            <li key={index} className="flex items-center">
              <div className="flex-shrink-0 mr-2 w-4 h-4">
                <Icons.check className="w-full h-full" />
              </div>
              <span className="flex-1">{detail}</span>
            </li>
          ))}
        </ul>
          <div className="mt-12 grid gap-4">
            <h4 className="text-5xl md:text-7xl font-bold">${price}</h4>
            <div className="flex flex-col md:flex-row justify-start gap-4">
              <Link href={`/tutoring#${examName}`}>
                <Button>Learn More</Button>
              </Link>
              <Link href={`https://calendly.com/axiomtestprep/${examName.toLowerCase()}-math-private-tutoring`} target={"_blank"}>
                <Button className="bg-primary/20 hover:bg-primary/40">Schedule Now</Button>
              </Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reading">
          <ul className="grid gap-3 text-sm text-muted-foreground">
            {mathDetails.map((detail, index) => (
              <li key={index} className="flex items-center">
                <div className="flex-shrink-0 mr-2 w-4 h-4">
                  <Icons.check className="w-full h-full" />
                </div>
                <span className="flex-1">{detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-4">
            <h4 className="text-5xl md:text-7xl font-bold">${price}</h4>
            <div className="flex flex-col md:flex-row justify-start gap-4">
              <Link href={`/tutoring#${examName}`}>
                <Button>Learn More</Button>
              </Link>
              <Link href={`https://calendly.com/axiomtestprep/${examName.toLowerCase()}-reading-private-tutoring`} target={"_blank"}>
                <Button className="bg-primary/20 hover:bg-primary/40">Schedule Now</Button>
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
);

export function PricingSection() {
  const exams = [
    {
      name: 'SAT',
      mathDetails: [
        'Free intake meeting and student assessment',
        'One-on-one, flexible tutoring sessions via Zoom',
        'Customized study plan based on individual needs',
        'No long term commitment required'
      ],
      readingDetails: [
        'Free intake meeting and student assessment',
        'One-on-one, flexible tutoring sessions via Zoom',
        'Customized study plan based on individual needs',
        'No long term commitment required'
      ],
      price: 1200
    },
    {
      name: 'ACT',
      mathDetails: [
        'Free intake meeting and student assessment',
        'One-on-one, flexible tutoring sessions via Zoom',
        'Customized study plan based on individual needs',
        'No long term commitment required'
      ],
      readingDetails: [
        'Free intake meeting and student assessment',
        'One-on-one, flexible tutoring sessions via Zoom',
        'Customized study plan based on individual needs',
        'No long term commitment required'
      ],
      price: 1200
    },
    {
      name: 'CLT',
      mathDetails: [
        'Free intake meeting and student assessment',
        'One-on-one, flexible tutoring sessions via Zoom',
        'Customized study plan based on individual needs',
        'No long term commitment required'
      ],
      readingDetails: [
        'Free intake meeting and student assessment',
        'One-on-one, flexible tutoring sessions via Zoom',
        'Customized study plan based on individual needs',
        'No long term commitment required'
      ],
      price: 1200
    }
  ];

  return (
    <main>
      <div className="min-w-screen px-6 lg:px-52 py-24 bg-foreground text-background">
        <div className="flex w-full flex-col mb-12 px-12">
          <div className="text-2xl lg:text-4xl font-extrabold">
            Our Tutoring <span className="text-primary">Plans</span>
          </div>
          <div className="mt-2 lg:text-lg text-muted-foreground">
            Whether its group tutoring or one-on-one, we&apos;re here to help.
          </div>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row gap-2 justify-center">
          {exams.map((exam) => (
            <ExamPricing 
              key={exam.name}
              examName={exam.name}
              mathDetails={exam.mathDetails}
              readingDetails={exam.readingDetails}
              price={exam.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}