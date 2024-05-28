import {Button} from "@/components/ui/button"
import { Icons } from '@/components/icons';


export function Footer() {
  return (
    <main>
      <div className="w-screen flex flex-col">

          <div className="flex flex-row px-12 py-12 gap-12 ml-auto mr-auto grid grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col">
                  <div className="ml-auto mr-auto text-xl text-primary font-bold ">Programs</div>
                  <Button className="mt-2 p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">Private Tutoring</Button>
                  <Button className="p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">CLT Math Group</Button>
                  <Button className="p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">SAT Math Group</Button>
            </div>
            <div className="flex flex-col">
                <div className="ml-auto mr-auto text-xl text-primary font-bold ">Legal</div>
                <Button className="mt-2 p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">Privacy Policy</Button>
                <Button className="p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">Terms of Service</Button>
                <Button className="p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">Responsible Disclosure</Button>
            </div>
            <div className="flex flex-col">
                <div className="ml-auto mr-auto text-xl text-primary font-bold ">Contact Us</div>
                <Button className="mt-2 p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">+1 (555)-555-5555</Button>
                <Button className="p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">contact@axiom.com</Button>
                <Button className="p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">1234 Address Lane, State, USA, ZIP</Button>
            </div>

            <div className="flex flex-col">
                <div className="ml-auto mr-auto text-xl text-primary font-bold ">Socials</div>

                <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost"><Icons.facebook size={18}/></Button>
                <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost"><Icons.twitter size={18}/></Button>
                <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost"><Icons.instagram size={18}/></Button>
            </div>
          </div>
          <div className="text-xs text-muted-foreground ml-auto mr-auto pb-6">
              &copy;2024 Axiom Test Prep. All rights reserved.
          </div>
      </div>

    </main>
  );
}
