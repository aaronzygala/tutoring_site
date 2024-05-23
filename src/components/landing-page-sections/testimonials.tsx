import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <main>
        <div className="min-w-screen bg-black">
            <div className="px-12 lg:px-52 py-24">
                <div className="text-4xl font-extrabold text-foreground">
                    What <span className="text-primary">everyone</span> is saying
                </div>
                <div 
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <TestimonialList/>
                <TestimonialList/>
             </div>
         </div>
        </div>
    </main>
  );
}

function TestimonialList() {
    return(
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
                <TestimonialCard 
                    name="Jane Doe" 
                    image_src = "https://media.istockphoto.com/id/1089633230/photo/glasses-girl-in-white.jpg?s=612x612&w=0&k=20&c=qtq-7I75UA_ViQdi0GWbaGnLUYjHIRBJE3ry1v5T-TA="
                    review="The tutors here are fantastic! They make complex subjects easy to understand and engaging."/>
            </li>
            <li>
                <TestimonialCard 
                    name="James Doe" 
                    image_src = "https://www.shutterstock.com/image-photo/smiling-cheerful-young-adult-african-260nw-1850821510.jpg"
                    review="Highly recommend this tutoring center. My daughter's confidence in math has soared since she started sessions here."/>
            </li>
            <li>
                <TestimonialCard 
                    name="Jack Doe" 
                    image_src = "https://t3.ftcdn.net/jpg/02/43/12/40/360_F_243124072_6XpPAWH0VM911MjRBfqp4QQ5PKsvD6T9.jpg"
                    review="Professional and dedicated tutors who go above and beyond to ensure students grasp the material."/>
            </li>
            <li>
                <TestimonialCard 
                    name="Janet Doe" 
                    image_src = "https://t4.ftcdn.net/jpg/04/80/05/77/360_F_480057743_J7wTBWRW3vABPnqEv2IwSVVXjj50xevN.jpg"
                    review="Great experience! The personalized attention and tailored lessons really made a difference for my son's learning."/>
            </li>
            <li>
                <TestimonialCard 
                    name="John Doe"
                    image_src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" 
                    review="Exceptional tutoring service with patient and knowledgeable tutors who helped my child improve their grades significantly."/>
            </li>
            <li>
                <TestimonialCard 
                    name="Jonah Doe" 
                    image_src = "https://static.vecteezy.com/system/resources/previews/007/662/908/non_2x/headshot-of-attractive-unshaven-young-male-with-cheerful-expression-looks-confidently-at-camera-being-pleased-to-meet-with-colleagues-dressed-in-formal-clothes-isolated-over-white-background-free-photo.jpg"
                    review="This tutoring service has been a game-changer for my son, turning his grades around and boosting his confidence."/>
            </li>
            <li>
                <TestimonialCard 
                    name="Jeff Doe" 
                    image_src = "https://media.istockphoto.com/id/1355110818/photo/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=T39jUOOjC8H-Op0cfd-uiNXk1a2XBn1sXkQbKIWwY7E="
                    review="Top-notch tutoring with a focus on individual learning styles. My child loves the sessions and has shown great improvement."/>
            </li>
            <li>
                <TestimonialCard 
                    name="Jess Doe" 
                    image_src = "https://st3.depositphotos.com/1011434/13157/i/450/depositphotos_131572502-stock-photo-happy-woman-smiling.jpg"
                    review="Fantastic tutors who are always well-prepared and genuinely care about their students' success."/>
            </li>
        </ul>
    )
}

function TestimonialCard({name, image_src, review}: {name:string, image_src:string, review:string}) {
    return(
        <Card>
            <CardHeader className="flex flex-row w-96">
                <Avatar>
                    <AvatarImage src={image_src} className="w-12 h-12"/>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="pl-6 align-text-bottom font-extrabold">
                    {name}
                </div>
            </CardHeader>
            <CardContent>
                &quot;{review}&quot;
            </CardContent>
        </Card>
    )
}