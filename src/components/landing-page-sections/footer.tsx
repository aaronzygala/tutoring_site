import {Button} from "@/components/ui/button"
import { Icons } from '@/components/icons';


export function Footer() {
  return (
    <main>
      <div className="min-w-screen">

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-left px-4 lg:px-12 py-6">
        <div className="text-xs text-muted-foreground ml-4 lg:mt-auto lg:mb-auto">
            &copy;2024 Axiom Test Prep. All rights reserved.
        </div>
        <div className="flex">
            <Button className="p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">Privacy Policy</Button>
            <Button className="p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">Terms of Service</Button>
            <Button className="p-1 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">Responsible Disclosure</Button>
        </div>
        <div className="pl-4 lg:ml-auto flex flex-row justify-between">
          <div className="flex flex-col lg:gap-6 mt-auto mb-auto lg:mr-12 text-center text-xs text-muted-foreground">
            <div className="">
                +1 (555)-555-5555
            </div>
            <div className="">
                contact@axiom.com
            </div>
          </div>

          <div className="flex-col lg:flex-row">
              <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost"><Icons.facebook size={18}/></Button>
              <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost"><Icons.twitter size={18}/></Button>
              <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost"><Icons.instagram size={18}/></Button>
          </div>
        </div>

      </div>
      </div>

    </main>
  );
}
