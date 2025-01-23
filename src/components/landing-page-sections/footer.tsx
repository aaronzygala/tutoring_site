import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import { Input } from "../ui/input";


export function Footer() {
  return (
    <main>
      <div className="w-screen flex flex-col bg-foreground text-background">
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
              <div className="text-left lg:text-xl text-primary font-bold pl-3">
              Connect with Us
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
                <Link href="https://www.linkedin.com/company/axiom-test-prep" target="_blank">
                  <Button
                    className="justify-start w-fit hover:bg-transparent hover:text-muted-foreground"
                    variant="ghost"
                  >
                    <FontAwesomeIcon icon={faLinkedin} width={18} className="hover:bg-text-200 delay-20 duration-100"/>
                  </Button>
                </Link>
              </div>

            <div className="ml-28 lg:ml-0">
            <div className="text-left lg:text-xl text-primary font-bold ml-4 lg:mt-2">
              Contact Us
            </div>
            <div className="flex flex-col ml-4 mt-4 space-y-3">
                <div className="flex">
                  <Icons.mail className="text-white mt-auto mb-auto" size={18}/>
                  <span className="mt-auto mb-auto ml-2 text-sm">
                    contact@axiomtestprep.com
                  </span>
                </div>
                <div className="flex">
                  <Icons.phone className="text-white mt-auto mb-auto" size={18}/>
                  <span className="mt-auto mb-auto ml-2 text-sm">
                    +1 (555)-555-5555
                  </span>
                </div>
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
