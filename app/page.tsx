"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import BeatCard from "@/components/beat-card"
import GenreCard from "@/components/genre-card"
import { ArrowRight, Music, Headphones, Download, CheckCircle } from "lucide-react"

// Animation helper function
const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom

        // Check if element is in viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add("animate-fade-in")
        }
      })
    }

    // Run once on load
    animateElements()

    // Add scroll event listener
    window.addEventListener("scroll", animateElements)

    // Clean up
    return () => window.removeEventListener("scroll", animateElements)
  }, [])
}

export default function Home() {
  useAnimateOnScroll()

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-muted to-background">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left animate-on-scroll">
              <h1 className="font-bold mb-6 leading-tight">
                Unleash Your Creativity with Innovative Beats & Soundscapes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Explore fresh, professional beats designed to elevate your music across all genres.
              </p>
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                <Link href="/beats">Browse Beats Now</Link>
              </Button>
            </div>

            <div className="lg:w-1/2 relative animate-on-scroll">
              <div className="relative h-[400px] w-full">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
                <div className="absolute -top-6 -left-6 h-24 w-24 bg-primary/10 rounded-full animate-float"></div>
                <div
                  className="absolute -bottom-8 -right-8 h-32 w-32 bg-secondary/10 rounded-full animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white dark:bg-card rounded-xl shadow-xl overflow-hidden border border-border">
                  <Image
                    src="/music-producer-working-on-beats.jpg"
                    alt="Music producer working on beats"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div
                  className="absolute top-10 right-10 bg-white dark:bg-card p-3 rounded-lg shadow-lg border border-border animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Music className="h-5 w-5 text-secondary" />
                </div>
                <div
                  className="absolute bottom-20 left-10 bg-white dark:bg-card p-3 rounded-lg shadow-lg border border-border animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <div
                  className="absolute top-1/2 right-0 bg-white dark:bg-card p-3 rounded-lg shadow-lg border border-border animate-float"
                  style={{ animationDelay: "2.5s" }}
                >
                  <Download className="h-5 w-5 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Beats Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Featured Beats to Ignite Your Creative Flow</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium beats, perfect for your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredBeats.map((beat, index) => (
              <div key={beat.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <BeatCard {...beat} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/beats" className="flex items-center gap-2">
                View All Beats
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0 animate-on-scroll">
              <h2 className="font-bold mb-2">Stay Inspired with Our Latest Beats</h2>
              <p className="text-muted-foreground max-w-xl">
                Regularly updated beats designed for musicians, producers, and content creators.
              </p>
            </div>
            <Button asChild className="bg-secondary text-white hover:bg-secondary/90 animate-on-scroll">
              <Link href="/new-releases" className="flex items-center gap-2">
                Explore New Beats
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newReleases.map((beat, index) => (
              <div key={beat.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <BeatCard {...beat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Beats Crafted for Every Genre & Style</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse collection of beats across multiple genres to find your perfect sound.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genres.map((genre, index) => (
              <div key={genre.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <GenreCard {...genre} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/genres" className="flex items-center gap-2">
                Discover Your Genre
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Simple & Clear Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing options to fit your creative needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="pricing-card animate-on-scroll">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Single Beats</h3>
                <p className="text-3xl font-bold text-secondary">$7.99</p>
                <p className="text-sm text-muted-foreground">per beat</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>High-quality MP3 files</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Instant download</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Basic license included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Use for non-commercial projects</span>
                </li>
              </ul>

              <Button asChild className="w-full bg-secondary text-white hover:bg-secondary/90">
                <Link href="/beats">Browse Beats</Link>
              </Button>
            </div>

            <div className="pricing-card relative animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="absolute -top-4 right-4 bg-secondary text-white px-3 py-1 text-xs font-medium rounded-full">
                Popular
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Premium License</h3>
                <p className="text-3xl font-bold text-secondary">$24.99</p>
                <p className="text-sm text-muted-foreground">per beat</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>High-quality WAV files</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Instant download</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Premium license included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Commercial use allowed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Trackout stems included</span>
                </li>
              </ul>

              <Button asChild className="w-full bg-secondary text-white hover:bg-secondary/90">
                <Link href="/pricing">Get Premium</Link>
              </Button>
            </div>

            <div className="pricing-card animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Beat Bundles</h3>
                <p className="text-3xl font-bold text-secondary">$49.99</p>
                <p className="text-sm text-muted-foreground">5 beats pack</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>High-quality WAV files</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Instant download</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Premium license included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Commercial use allowed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Save over 50% on individual prices</span>
                </li>
              </ul>

              <Button asChild className="w-full bg-secondary text-white hover:bg-secondary/90">
                <Link href="/pricing">View Bundles</Link>
              </Button>
            </div>
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Pricing & Bundles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our beats, licensing, and more.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion
              type="single"
              collapsible
              className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="px-6 border-b border-border last:border-b-0"
                >
                  <AccordionTrigger className="text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Music?</h2>
            <p className="text-lg mb-8">
              Browse our collection of premium beats and find the perfect sound for your next project.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/beats">Browse Beats Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredBeats = [
  {
    id: "beat-1",
    title: "Midnight Vibes",
    genre: "Chill & Ambient",
    duration: "00:08",
    price: 12,
    imageUrl: "/beat1.jpg",
    audioUrl: "https://example.com/audio/midnight-vibes.mp3",
  },
  {
    id: "beat-2",
    title: "Electric Dreams",
    genre: "Electronic & Dance",
    duration: "00:12",
    price: 15,
    imageUrl: "/beat2.jpg",
    audioUrl: "https://example.com/audio/electric-dreams.mp3",
  },
  {
    id: "beat-3",
    title: "Sunny Grooves",
    genre: "Pop & Upbeat",
    duration: "00:10",
    price: 10,
    imageUrl: "/beat3.jpg",
    audioUrl: "https://example.com/audio/sunny-grooves.mp3",
  },
  {
    id: "beat-4",
    title: "Urban Jungle",
    genre: "Hip-Hop & Trap",
    duration: "00:15",
    price: 18,
    imageUrl: "/beat4.jpg",
    audioUrl: "https://example.com/audio/urban-jungle.mp3",
  },
]

const newReleases = [
  {
    id: "beat-5",
    title: "Neon Lights",
    genre: "Electronic & Dance",
    duration: "00:11",
    price: 14,
    imageUrl: "/beat5.jpg",
    audioUrl: "https://example.com/audio/neon-lights.mp3",
  },
  {
    id: "beat-6",
    title: "Sunset Boulevard",
    genre: "Chill & Ambient",
    duration: "00:09",
    price: 12,
    imageUrl: "/beat6.jpg",
    audioUrl: "https://example.com/audio/sunset-boulevard.mp3",
  },
  {
    id: "beat-7",
    title: "City Rhythm",
    genre: "Urban & Afrobeat",
    duration: "00:14",
    price: 16,
    imageUrl: "/beat7.jpg",
    audioUrl: "https://example.com/audio/city-rhythm.mp3",
  },
]

const genres = [
  {
    id: "hip-hop-trap",
    name: "Hip-Hop & Trap",
    imageUrl: "/beat8.jpg",
    count: 48,
  },
  {
    id: "pop-upbeat",
    name: "Pop & Upbeat",
    imageUrl: "/beat9.jpg",
    count: 36,
  },
  {
    id: "electronic-dance",
    name: "Electronic & Dance",
    imageUrl: "/beat10.jpg",
    count: 42,
  },
  {
    id: "chill-ambient",
    name: "Chill & Ambient",
    imageUrl: "/beat1.jpg",
    count: 29,
  },
  {
    id: "urban-afrobeat",
    name: "Urban & Afrobeat",
    imageUrl: "/beat2.jpg",
    count: 31,
  },
  {
    id: "cinematic-instrumental",
    name: "Cinematic & Instrumental",
    imageUrl: "/beat3.jpg",
    count: 24,
  },
]

const faqs = [
  {
    question: "What types of licenses do you offer?",
    answer:
      "We offer three main license types: Basic (for non-commercial use), Premium (for commercial projects with limited distribution), and Exclusive (full ownership rights). Each license comes with different usage rights and deliverables.",
  },
  {
    question: "How do I download my purchased beats?",
    answer:
      "After completing your purchase, you'll receive an email with download links. You can also access all your purchased beats in your account dashboard under 'My Purchases' where you can download them anytime.",
  },
  {
    question: "Can I use your beats on YouTube or streaming platforms?",
    answer:
      "Yes, you can use our beats on YouTube and streaming platforms like Spotify, Apple Music, etc. The specific rights depend on your license type. Basic licenses allow for non-monetized content, while Premium and Exclusive licenses allow for monetization and commercial use with varying distribution limits.",
  },
  {
    question: "Do you offer custom beat production?",
    answer:
      "Yes, we offer custom beat production services tailored to your specific needs. Contact us through the 'Custom Beats' form on our website with your requirements, and our team will get back to you with a quote and timeline.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and selected cryptocurrency payments. All transactions are secure and processed through industry-standard payment gateways.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Due to the digital nature of our products, we generally don't offer refunds once beats have been downloaded. However, if you encounter technical issues or receive corrupted files, please contact our support team within 7 days of purchase.",
  },
]

