import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle2, Heart, Zap, Users, Leaf, Shield, Sparkles,Vegan } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                    Delicious Iron Jellies That{" "}
                    <span className="text-[#e60000] font-[family-name:var(--font-quicksand)]">Rebuild Your Health</span>
                  </h1>
                  <p className="text-xl font-semibold text-foreground leading-relaxed text-pretty max-w-2xl">
                    Natural iron supplement jellies made from beetroot, spinach & pomegranate.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                    No tablets. No tonics. Just delicious jellies that fight iron deficiency naturally.
                  </p>

                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact">
                      <PrimaryButton size="sm">
                      Join the Waitlist
                    </PrimaryButton>
                  </Link>
                  <Link href="/test">
                      <Button variant="outline" className="rounded-full border-2 border-[#e60000] text-[#e60000] px-8 py-6 text-xl h-auto hover:bg-red-50 shadow-none">
                        Take the Anemia Test
                      </Button>
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-xl border-2 border-[#e60000]">
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    Curious if you need more iron? Take a simple test to know your status.
                  </p>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#e60000]" />
                    <span className="text-sm font-semibold text-foreground">Free iron deficiency self-check</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/happy-woman-holding-red-jelly-supplement-in-bright.jpg"
                    alt="Nutrextr Iron Jellies"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Why We <span className="text-[#e60000]">Exist</span>
              </h2>
              <p className="text-lg font-semibold text-foreground max-w-2xl mx-auto leading-relaxed">
                Anemia is a silent invader. We're here to change that.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-2 border-[#e60000] bg-red-50">
                  <CardContent className="p-8 text-center space-y-2">
                    <div className="text-5xl font-bold text-[#e60000]">3 in 10</div>
                    <p className="text-lg font-medium text-foreground">Women in India need more iron</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-[#e60000] bg-red-50">
                  <CardContent className="p-8 text-center space-y-2">
                    <div className="text-5xl font-bold text-[#e60000]">4 in 10</div>
                    <p className="text-lg font-medium text-foreground">Children in India need more iron</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Silent Symptoms",
                    desc: "Most people don't realise they're anemic until it affects focus, mood, and energy.",
                  },
                  {
                    title: "Busy Lifestyles",
                    desc: "Busy lifestyles leave little time for nutritious meals.",
                  },
                  {
                    title: "Expensive Solutions",
                    desc: "Iron supplements are often expensive or unpleasant to consume.",
                  },
                ].map((item, idx) => (
                  <Card key={idx} className="border-2">
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center pt-8">
                <p className="text-lg font-medium text-foreground">
                  So a curious pharmacist created <span className="text-[#e60000] font-bold">Nutrextr</span> who
                  believes food can heal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Our <span className="text-[#e60000]">Solution</span>
              </h2>
              <p className="text-lg font-semibold text-foreground max-w-2xl mx-auto leading-relaxed">
                A daily consumable that's affordable, effective & delicious
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Your body deserves better than tablets and tonics.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  icon: Leaf,
                  title: "Natural Iron Sources",
                  desc: "Beetroot, spinach, and pomegranate",
                },
                {
                  icon: Vegan,
                  title: "100% Plant-Based",
                  desc: "Clean ingredients, no chemicals or preservatives",
                },
                {
                  icon: Heart,
                  title: "Sugar-Free Variants",
                  desc: "Available for health-conscious consumers",
                },
                {
                  icon: Shield,
                  title: "3-Month Shelf Life",
                  desc: "Fresh and effective for longer",
                },
                {
                  icon: Zap,
                  title: "Easy to Take",
                  desc: "No pills to swallow—just delicious jellies",
                },
                {
                  icon: CheckCircle2,
                  title: "Affordable",
                  desc: "Making iron supplementation accessible to all",
                },
              ].map((benefit, idx) => (
                <Card key={idx} className="border-2 hover:border-[#e60000] transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#e60000] flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Product Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative">
                <img
                  src="/images/gemini-generated-image-uzopyquzopyquzop-20-281-29.png"
                  alt="Nutrextr Iron Jellies in Pink Bucket"
                  className="rounded-2xl shadow-2xl"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                  Natural ingredients. Real benefits. <span className="text-[#e60000]">No nonsense.</span>
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Our jellies are crafted to deliver iron the way nature intended — gently, effectively, and without any
                  unpleasant aftertaste.
                </p>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-semibold">Perfect for:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Women with low hemoglobin",
                      "Children with picky eating habits",
                      "Students, professionals & athletes",
                      "Anyone dealing with fatigue or weakness",
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#e60000] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Real People. <span className="text-[#e60000]">Real Results.</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {[
                {
                  quote: "Pomegranate is my favorite! So tasty and healthy.",
                  name: "Sarah M.",
                },
                {
                  quote: "I've struggled with anemia for years — this feels like a game-changer.",
                  name: "Priya K.",
                },
                {
                  quote: "I hate vegetables normally, but these jellies are awesome!",
                  name: "Arjun, Age 12",
                },
                {
                  quote: "I trust products made with clean, honest ingredients — this one stands out.",
                  name: "Dr. Meera S.",
                },
              ].map((testimonial, idx) => (
                <Card key={idx} className="border-2">
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-semibold text-sm text-[#e60000]">— {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                How It <span className="text-[#e60000]">Works</span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Take 1-2 jellies daily",
                  desc: "After meals for best absorption",
                },
                {
                  step: "02",
                  title: "Stay consistent",
                  desc: "For 4-6 weeks to see results",
                },
                {
                  step: "03",
                  title: "Feel the difference",
                  desc: "Watch your energy, focus & stamina improve",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#e60000] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Team Section */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Vision */}
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Our <span className="text-[#e60000]">Vision</span>
                </h2>
                <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                  We're building India's most accessible nutrition brand — affordable, science-backed, and powered by
                  nature.
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  From community programs to vending machine franchises, we're creating an ecosystem that helps people
                  stay healthy, consistently.
                </p>
              </div>

              {/* Team */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
                  Meet the <span className="text-[#e60000]">Team</span>
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  A passionate team driven by science, empathy, and innovation.
                </p>

                <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
                  {[
                    { 
                      name: "Viswapriya V", 
                      role: "Founder & Research Lead",
                      image: "/images/directors/viswapriya.jpg"
                    },
                    { 
                      name: "Jayashree V", 
                      role: "Director",
                      image: "/images/directors/jayashree.jpg"
                    },
                    // { name: "Shantanu G", role: "Web Developer" },
                  ].map((member, idx) => (
                    <Card key={idx} className="border-2 hover:border-[#e60000] transition-colors">
                      <CardContent className="p-6 text-center space-y-2">
                        <div className="w-24 h-24 rounded-full bg-red-100 mx-auto mb-4 overflow-hidden border-2 border-red-100">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white text-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance font-[family-name:var(--font-quicksand)] text-black">
                Be the first to try India's cleanest iron jellies
              </h2>
              <p className="text-lg text-black/80 leading-relaxed text-pretty">
                Join the waitlist & take your free anemia self-check test today.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
                <Link href="/contact">
                    <PrimaryButton size="sm">
                    Join the Waitlist
                  </PrimaryButton>
                </Link>
                <Link href="/test">
                  <Button variant="outline" className="rounded-full border-2 border-black text-black px-8 sm:px-10 py-4 sm:py-5 text-xl sm:text-2xl h-auto hover:bg-gray-50 shadow-none font-bold">
                    Take the Test
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
