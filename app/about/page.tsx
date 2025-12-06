import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Our Story Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-5xl font-bold tracking-tight">Our story</h1>

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-xl font-medium">I've always wondered why getting healthy felt so complicated.</p>

                <p className="text-xl">
                  Growing up, I wanted to find a way to make it easier especially when it came to iron deficiency, which
                  affects so many.
                </p>

                <p className="text-xl pt-8">
                  Instead of tablets, we wanted to bring something fun, tasty yet compatible with body. So we thought,
                  why not use natural ingredients like fruit juices (in the natural form itself)...
                </p>

                <p className="text-xl font-bold">That's how Nutrextr was born.</p>

                <p className="text-xl pt-8">As a pharmacist, I made sure everything is scientifically backed.</p>
                <p className="text-xl font-medium">No gimmicks, just real health.</p>

                <p className="text-xl pt-8 font-medium">
                  And I'm Viswapriya, and this is my simple solution to iron deficiency.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
