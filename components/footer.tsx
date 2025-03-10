import Link from "next/link"
import { Music, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <Music className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold font-heading">BeatzPal</span>
            </Link>
            <p className="text-muted-foreground">
              Explore fresh, professional beats designed to elevate your music across all genres.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/beats" className="text-muted-foreground hover:text-secondary transition-colors">
                  Beats Library
                </Link>
              </li>
              <li>
                <Link href="/new-releases" className="text-muted-foreground hover:text-secondary transition-colors">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="/genres" className="text-muted-foreground hover:text-secondary transition-colors">
                  Genres
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-secondary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-secondary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>Monk & Hennessey Solutions Limited</p>
              <p>Lusaka, Zambia</p>
              <p className="mt-2">Email: info@beatzpal.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} BeatzPal | Monk & Hennessey Solutions Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

