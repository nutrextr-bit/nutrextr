import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-2">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Nutrextr logo"
            className="h-28 w-auto"
          />
        </Link>

        {/* Center: Nav (position stays fixed) */}
        <nav className="hidden md:flex items-center space-x-7">
          <Link href="/" className="text-sm font-medium hover:text-[#e60000]">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#e60000]">
            About
          </Link>
          <Link href="/test" className="text-sm font-medium hover:text-[#e60000]">
            Test
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#e60000]">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm font-medium hover:text-[#e60000]">
            Privacy
          </Link>
        </nav>

        {/* Right: Empty spacer to preserve layout */}
        <div className="w-[120px]" />
      </div>
    </header>
  )
}
