import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: December 2025</p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Here's how we protect your data:</h2>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Information We Collect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect personal information like your name, email address, and contact details when you interact
                    with our website or make a purchase. We also collect non-personal information such as browsing
                    activity on our site to improve your experience.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">How We Use Your Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use your information to process orders, provide customer support, and keep you informed about
                    Nutrextr products and updates. We may also use your information for marketing purposes, but only
                    with your consent.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">How We Protect Your Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement various security measures to protect your personal data, including encryption and
                    secure data storage. We strive to ensure your information is safe with us.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Sharing Your Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell or rent your personal information to third parties. However, we may share your
                    details with trusted partners who assist us in running our business, like delivery services or
                    payment processors.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses cookies to improve your browsing experience. Cookies are small files that help us
                    remember your preferences and understand how you interact with our site.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Your Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, modify, or delete your personal data at any time. You can contact us
                    for assistance in updating or removing your information from our records.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Changes to This Privacy Policy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update our privacy policy occasionally. Any changes will be posted on this page, and the date
                    at the top will reflect the most recent update.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Contact Us</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions or concerns about our privacy policy or how we handle your personal data,
                    feel free to reach out to us via email at{" "}
                    <a href="mailto:info@nutrextr.com" className="text-[#e60000] font-medium hover:underline">
                      info@nutrextr.com
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
