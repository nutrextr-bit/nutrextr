"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "How do I know if I need more iron?",
      a: "We recommend taking our simple iron status test to see if you're in need of more iron in your diet. Still it is recommended to take a physician's consultation.",
    },
    {
      q: "When will Nutrextr launch?",
      a: "Currently in prototype stage, launching soon. Join our waitlist to be notified when we launch!",
    },
    {
      q: "Are these jellies safe?",
      a: "Yes! We are working with certified nutrition experts and labs to ensure safety and efficacy.",
    },
    {
      q: "How can I be part of testing?",
      a: "Sign up for early access above. We'll contact selected members for our testing program.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Contact us</h1>
                  <div className="space-y-2">
                    <p className="text-lg text-foreground">Have questions or just want to say hello?</p>
                    <p className="text-lg text-foreground font-medium">
                      We personally address every email, so you can trust we'll get back to you.
                    </p>
                  </div>
                </div>
                <a href="mailto:info@nutrextr.com">
                  <Button
                    size="lg"
                    className="bg-[#e60000] hover:bg-[#cc0000] text-white px-12 h-14 rounded-full text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    Mail us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12">FAQs</h2>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-200">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full py-6 flex items-center justify-between text-left hover:text-[#e60000] transition-colors group"
                    >
                      <span className="text-xl font-medium pr-8 flex items-center gap-3">
                        {openFaqIndex === idx ? (
                          <ChevronDown className="w-6 h-6 flex-shrink-0" />
                        ) : (
                          <ChevronUp className="w-6 h-6 flex-shrink-0" />
                        )}
                        {faq.q}
                      </span>
                    </button>
                    {openFaqIndex === idx && (
                      <div className="pb-6">
                        <div className="bg-[#d64545] text-white p-6 rounded-[40px] max-w-3xl">
                          <p className="text-lg leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Registered Office Address Section */}
      <section className="relative bg-black text-white py-16">
        <div
          className="absolute top-0 left-0 right-0 h-24 bg-white"
          style={{
            clipPath: "ellipse(75% 100% at 50% 0%)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Registered Office Address</h2>
            <div className="space-y-2 text-white/90 leading-relaxed">
              <p className="font-semibold">Nutrextr Private Limited</p>
              <p>C/o. IITM Research Park, 1FA, I Floor Kanagam Road, TTTI</p>
              <p>Taramani, Chennai City Corporation, Chennai- 600113, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
