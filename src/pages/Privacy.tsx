import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-6 py-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
            <BookOpen className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <span className="text-xl font-bold">MyBooks</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
              <p>
                Arctic Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how MyBooks handles your information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
              <p>MyBooks stores all data locally on your device, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Book titles, authors, and ISBN numbers you add to your library</li>
                <li>Book covers fetched from public APIs</li>
                <li>Your ratings and reading dates</li>
                <li>Reading statistics and milestones</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
              <p>
                All your book data remains on your device. We do not collect, store, or transmit your personal reading
                data to our servers. Your reading data is yours alone and stays private on your device.
              </p>
              <p className="mt-4">
                If you export your book data, it can be stored on a third-party file hosting service. These services
                have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Analytics</h2>
              <p>
                We use Google Analytics and Firebase Analytics to collect anonymous usage data to help us understand
                how users interact with MyBooks and improve the app experience. This data includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>App usage patterns and feature engagement</li>
                <li>Device type, operating system, and app version</li>
                <li>Crash reports and performance data</li>
                <li>General geographic location (country/region level)</li>
              </ul>
              <p className="mt-4">
                This analytics data is anonymized and cannot be used to personally identify you. You can opt out of
                analytics tracking via your device's system settings (Privacy & Security → Analytics & Improvements).
                For more information, see{" "}
                <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google's Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">In-App Purchases</h2>
              <p>
                MyBooks offers optional in-app purchases to unlock premium features. These purchases are processed
                through the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Apple App Store</strong> – Handles payment processing and subscription management for iOS users.
                  Apple processes your payment information according to their{" "}
                  <a href="https://www.apple.com/legal/privacy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong>Adapty</strong> – We use Adapty for subscription management and analytics. Adapty may collect
                  anonymized purchase data, device identifiers, and subscription status to validate your premium access.
                  This data is not used for advertising purposes. For more information, see{" "}
                  <a href="https://adapty.io/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    Adapty's Privacy Policy
                  </a>.
                </li>
              </ul>
              <p className="mt-4">
                We do not have access to your payment information (such as credit card numbers). All payment processing
                is handled securely by Apple and our payment partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Services</h2>
              <p>
                MyBooks may use third-party services to fetch book covers and information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Open Library API for book covers, metadata, and ISBN lookups</li>
                <li>Google Books API for book covers, metadata, and ISBN lookups</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Security</h2>
              <p>
                Since all data is stored locally on your device, the security of your information depends on your
                device's security measures. We recommend keeping your device secure with a passcode or biometric lock.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Children's Privacy</h2>
              <p>
                We do not knowingly collect personal information from children under the age of 13. If you are a
                parent or guardian and believe your child has provided us with personal information, please contact
                us so we can take appropriate action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy within the app and updating the "Last Updated" date.
              </p>
              <p className="mt-4 font-semibold">Last Updated: December 20, 2025</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                <a href="mailto:glennsvends1@gmail.com" className="text-primary hover:underline">
                  glennsvends1@gmail.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link to="/">
              <Button variant="outline" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
