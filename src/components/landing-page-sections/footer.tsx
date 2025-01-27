import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-background text-foreground ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {/* Programs Section */}
          <div className="text-center">
            <h3 className="text-primary font-bold text-sm lg:text-lg mb-4">Programs</h3>
            <nav className="flex flex-col">
              <Link href="/tutoring">
                <Button 
                  variant="ghost" 
                  className="w-full text-xs md:text-sm hover:bg-transparent hover:text-muted-foreground"
                >
                  SAT Private Tutoring
                </Button>
              </Link>
              <Link href="/tutoring">
                <Button 
                  variant="ghost" 
                  className="w-full text-xs md:text-sm hover:bg-transparent hover:text-muted-foreground"
                >
                  ACT Private Tutoring
                </Button>
              </Link>
              <Link href="/tutoring">
                <Button 
                  variant="ghost" 
                  className="w-full text-xs md:text-sm hover:bg-transparent hover:text-muted-foreground"
                >
                  CLT Private Tutoring
                </Button>
              </Link>
            </nav>
          </div>

          {/* Legal Section
          <div className="text-center">
            <h3 className="text-primary font-bold text-sm lg:text-lg mb-4  ">Legal</h3>
            <nav className="flex flex-col">
              <Button 
                variant="ghost" 
                className="w-full text-xs md:text-sm hover:bg-transparent hover:text-muted-foreground"
              >
                Privacy Policy
              </Button>
              <Button 
                variant="ghost" 
                className="w-full text-xs md:text-sm hover:bg-transparent hover:text-muted-foreground"
              >
                Terms of Service
              </Button>
              <Button 
                variant="ghost" 
                className="w-full text-xs md:text-sm hover:bg-transparent hover:text-muted-foreground"
              >
                Responsible Disclosure
              </Button>
            </nav>
          </div> */}

          {/* Connect & Contact Section */}
            {/* Social Media Links */}
            <div className="h-full text-center">
              <h3 className="text-primary font-bold text-sm lg:text-lg mb-4">Connect with Us</h3>
              <div className="flex">
                <Link href="https://www.instagram.com/axiomtestprep" target="_blank">
                  <Button variant="ghost" className="hover:bg-transparent">
                    <FontAwesomeIcon icon={faInstagram} width={18} className="hover:text-primary" />
                  </Button>
                </Link>
                <Link href="https://www.tiktok.com/@axiomtestprep" target="_blank">
                  <Button variant="ghost" className="hover:bg-transparent">
                    <FontAwesomeIcon icon={faTiktok} width={18} className="hover:text-primary" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/company/axiom-test-prep" target="_blank">
                  <Button variant="ghost" className="hover:bg-transparent">
                    <FontAwesomeIcon icon={faLinkedin} width={18} className="hover:text-primary" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="h-full text-center items-center">
              <h3 className="text-primary font-bold text-sm lg:text-lg mb-4">Contact Us</h3>
              <div className="">
                <div className="">
                  <span className="text-xs lg:text-sm">info@axiomtestprep.com</span>
                </div>
                <div className="">
                  <span className="text-xs lg:text-sm">+1 (786)-474-6936</span>
                </div>
              </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground mt-8">
          &copy;2025 Axiom Test Prep. All rights reserved.
        </div>
      </div>
    </footer>
  );
}