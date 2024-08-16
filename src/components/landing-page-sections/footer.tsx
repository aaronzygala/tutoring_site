import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import { Input } from "../ui/input";


export function Footer() {
  return (
    <main>
      <div className="w-screen flex flex-col">
        <div className="flex flex-row px-12 py-12 gap-12 ml-auto mr-auto grid grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col w-[96]">
            <div className="text-left lg:text-xl text-primary font-bold pl-4">
              Programs
            </div>
            <Button
              className="w-fit justify-start mt-2 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              Private Tutoring
            </Button>
            <Button
              className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              CLT Math Group
            </Button>
            <Button
              className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              SAT Math Group
            </Button>
          </div>
          <div className="flex flex-col">
            <div className="text-left lg:text-xl text-primary font-bold pl-4">
              Legal
            </div>
            <Button
              className="w-fit justify-start mt-2 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              Privacy Policy
            </Button>
            <Button
              className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              Terms of Service
            </Button>
            <Button
              className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              Responsible Disclosure
            </Button>
          </div>
          <div className="flex flex-row col-span-2 justify-around lg:flex-col lg:col-span-1">

              <div className="flex-col">
              <div className="text-left lg:text-xl text-primary font-bold pl-4">
                Reach Out
              </div>
                <Link href="https://www.instagram.com/axiomtestprep" target="_blank">

                  <Button
                    className="justify-start hover:bg-transparent hover:text-muted-foreground"
                    variant="ghost"
                  >
                    <FontAwesomeIcon icon={faInstagram} width={18} className="hover:bg-text-200 delay-20 duration-100"/>
                  </Button>
                </Link>
                <Link href="https://www.tiktok.com/@axiomtestprep" target="_blank">
                  <Button
                    className="justify-start w-fit hover:bg-transparent hover:text-muted-foreground"
                    variant="ghost"
                  >
                    <FontAwesomeIcon icon={faTiktok} width={18} className="hover:bg-text-200 delay-20 duration-100"/>
                  </Button>
                </Link>
                <Link href={"mailto:contact@axiomtestprep.com"} target="_blank">
                  <Button
                    className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
                    variant="ghost"
                  >
                    <Icons.mail size={18}/>
                  </Button>
                </Link>
              </div>

            <div className="ml-28 lg:ml-0">
            <div className="text-left lg:text-xl text-primary font-bold ml-4 lg:mt-2">
              Join our Newsletter
            </div>
            <div className="flex flex-row ml-4">
              <Input placeholder="Email" className="rounded-r-none focus-visible:ring-0"/>
              <Button className="rounded-l-none"><Icons.send size={14}/></Button>
            </div>
          </div>
          </div>

        </div>
        <div className="text-xs text-muted-foreground ml-auto mr-auto pb-6">
          &copy;2024 Axiom Test Prep. All rights reserved.
        </div>
      </div>
    </main>
  );
}
