import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center ">
                <img src="/logo.svg" alt="Nutrextr logo" className="h-50 w-50" />
              {/* <h3 className="text-2xl font-bold text-[#e60000] font-[family-name:var(--font-quicksand)]">Nutrextr</h3> */}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Iron-rich jellies for healthy hemoglobin levels. Convenient, effective, and delicious.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#e60000] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#e60000] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-[#e60000] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/go.nutrextr?igsh=aDZ6MDh3d3ZpMThk&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#e60000] transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/nutrextr/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#e60000] transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nutrextr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
