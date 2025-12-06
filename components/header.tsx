import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo.svg" alt="Nutrextr logo" className="h-50 w-50" />
          {/* <span className="text-2xl font-bold text-[#e60000] font-[family-name:var(--font-quicksand)]">Nutrextr</span> */}
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-[#e60000]">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-[#e60000]">
            About
          </Link>
          <Link href="/test" className="text-sm font-medium transition-colors hover:text-[#e60000]">
            Test
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-[#e60000]">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm font-medium transition-colors hover:text-[#e60000]">
            Privacy
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <Button className="bg-[#e60000] hover:bg-[#cc0000] text-white">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
