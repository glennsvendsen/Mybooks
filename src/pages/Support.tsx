import { Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
const Support = () => {
  return <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Help & Support</h1>
          <p className="text-lg text-muted-foreground mb-12">
            We're here to help you get the most out of MyBooks
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mb-2" strokeWidth={1.5} />
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:glennsvends1@gmail.com">
                  <Button variant="outline" className="w-full">
                    glennsvends1@gmail.com
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-primary mb-2" strokeWidth={1.5} />
                <CardTitle>FAQs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Find answers to commonly asked questions about MyBooks.
                </p>
                <Button variant="outline" className="w-full">
                  View FAQs
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">How do I add a book to my library?</h3>
                  <p className="text-muted-foreground">
                    Tap the add button, then scan the book's ISBN barcode, search by title or author (including Norwegian books via the 
                    National Library of Norway), or take a photo of the cover.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Is my data synced across devices?</h3>
                  <p className="text-muted-foreground">
                    Currently, MyBooks stores all data locally on your device. However, you can export your book data 
                    and save it for backup or transfer to another device. 
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Is MyBooks free?</h3>
                  <p className="text-muted-foreground">
                    MyBooks offers a 10-day free trial with full access to all features. After the trial, you can keep using the 
                    core features for free, or subscribe to the optional MyBooks Premium for statistics and book recommendations. There are no ads.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">What features are included in Premium?</h3>
                  <p className="text-muted-foreground">
                    MyBooks Premium is an optional subscription that unlocks statistics (monthly chart, streaks and milestones) and book 
                    recommendations based on the authors and series you love.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">What if a book cover doesn't load?</h3>
                  <p className="text-muted-foreground">
                    MyBooks fetches covers from public APIs. If a cover doesn't load automatically, you can manually upload 
                    a photo of the book cover from your device by selecting a photo from your library or taking a new photo with your camera.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">How do I delete a book?</h3>
                  <p className="text-muted-foreground">
                    Swipe left on any book in your library or wishlist to reveal the delete option.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Can I export my book data?</h3>
                  <p className="text-muted-foreground">
                    Yes! You can export your entire book collection as a backup file. This is useful for keeping a backup 
                    or transferring your library to another device.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Still Need Help?</h2>
              <p className="text-muted-foreground mb-4">
                If you couldn't find the answer you're looking for, please don't hesitate to reach out to our support team.
              </p>
              <a href="mailto:glennsvends1@gmail.com">
                <Button size="lg">
                  Contact Support
                </Button>
              </a>
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
    </div>;
};
export default Support;