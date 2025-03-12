"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Music, 
  Headphones, 
  Download, 
  Users, 
  Award, 
  Clock, 
  Heart, 
  MessageSquare,
  ArrowRight,
  CheckCircle
} from "lucide-react"

// Animation helper function (same as in home page)
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

export default function AboutPage() {
  useAnimateOnScroll()

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-muted to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Passionate about music, dedicated to helping artists create their best work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
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
                    src="/beat1.jpg"
                    alt="Music studio with producers"
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
                  <Heart className="h-5 w-5 text-secondary" />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-secondary"></div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-secondary">Our Mission</h2>
              </div>
              <h3 className="text-3xl font-bold mb-6">Empowering Artists Through Sound</h3>
              <p className="text-muted-foreground mb-6">
                Founded in 2018, BeatHub was born from a simple idea: to create a platform where musicians, producers, and content creators could find high-quality beats that inspire creativity and elevate their projects.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team of passionate producers and audio engineers work tirelessly to craft unique soundscapes across all genres, ensuring that every artist can find their perfect sound. We believe that great music starts with great beats, and we're dedicated to providing the foundation for your next masterpiece.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Community Focused</h4>
                    <p className="text-sm text-muted-foreground">Supporting artists at every level</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Quality First</h4>
                    <p className="text-sm text-muted-foreground">Professional grade production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="text-4xl font-bold text-secondary mb-2">5+</div>
              <div className="text-lg font-medium mb-1">Years Experience</div>
              <p className="text-sm text-muted-foreground">Creating professional beats</p>
            </div>
            <div className="text-center animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-secondary mb-2">1,200+</div>
              <div className="text-lg font-medium mb-1">Beats Created</div>
              <p className="text-sm text-muted-foreground">Across all genres</p>
            </div>
            <div className="text-center animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-secondary mb-2">15k+</div>
              <div className="text-lg font-medium mb-1">Happy Customers</div>
              <p className="text-sm text-muted-foreground">From around the world</p>
            </div>
            <div className="text-center animate-on-scroll" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-secondary mb-2">6</div>
              <div className="text-lg font-medium mb-1">Genres Covered</div>
              <p className="text-sm text-muted-foreground">Something for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Meet Our Creative Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented producers and audio engineers behind our beats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="bg-white dark:bg-card rounded-xl shadow-sm border border-border/50 overflow-hidden animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-muted text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at BeatHub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50 animate-on-scroll">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Musical Excellence</h3>
              <p className="text-muted-foreground">
                We're committed to creating beats of the highest quality, with meticulous attention to detail in every aspect of production.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Artist Support</h3>
              <p className="text-muted-foreground">
                We believe in empowering artists at every stage of their journey, providing resources and beats that help them grow.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Open Communication</h3>
              <p className="text-muted-foreground">
                We value transparent communication with our customers and welcome feedback to continuously improve our offerings.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Consistency</h3>
              <p className="text-muted-foreground">
                We're dedicated to regularly releasing new, high-quality beats to keep our library fresh and inspiring.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push the boundaries of sound design and production techniques to create unique, forward-thinking beats.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50 animate-on-scroll" style={{ animationDelay: "0.5s" }}>
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Passion for Music</h3>
              <p className="text-muted-foreground">
                Above all, we're driven by our love for music and the joy of helping artists bring their creative visions to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from artists who have used our beats in their projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{testimonial.title}</p>
                    <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill={i < testimonial.rating ? "currentColor" : "none"} 
                          stroke={i < testimonial.rating ? "none" : "currentColor"} 
                          className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500" : "text-muted-foreground"}`}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Common Questions About BeatHub</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn more about our company and how we work.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="company" className="animate-on-scroll">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="company">Company</TabsTrigger>
                <TabsTrigger value="process">Our Process</TabsTrigger>
                <TabsTrigger value="work">Work With Us</TabsTrigger>
              </TabsList>
              
              <TabsContent value="company" className="space-y-4">
                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="font-bold mb-2">When was BeatHub founded?</h3>
                  <p className="text-muted-foreground">
                    BeatHub was founded in 2018 by a group of music producers and audio engineers who wanted to create a platform for high-quality beats across all genres.
                  </p>
                </div>
                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="font-bold mb-2">Where is BeatHub based?</h3>
                  <p className="text-muted-foreground">
                    Our headquarters are in Los Angeles, California, but our team of producers works remotely from around the world, bringing diverse musical influences to our catalog.
                  </p>
                </div>
                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="font-bold mb-2">What makes BeatHub different?</h3>
                  <p className="text-muted-foreground">
                    We focus on quality over quantity, with each beat going through a rigorous production and quality assurance process. We also offer clear licensing terms and exceptional customer support.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="process" className="space-y-4">
                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="font-bold mb-2">How are your beats created?</h3>
                  <p className="text-muted-foreground">
                    Our beats are created by professional producers using industry-standard equipment and software. Each beat goes through a multi-stage process including composition, sound design, mixing, and mastering.
                  </p>
                </div>
                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="font-bold mb-2">How often do you release new beats?</h3>
                  <p className="text-muted-foreground">
                    We release new beats weekly, with larger collections dropping at the beginning of each month. We also create seasonal and themed collections throughout the year.
                  </p>
                </div>
                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="font-bold mb-2">Do you create custom beats?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer custom beat production services for artists looking for a specific sound. Contact us through our custom beats form to discuss your project requirements.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="work" className="space-y-4">
                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="font-bold mb-2">Do you hire producers?</h3>
                  <p className="text-muted-foreground">
                    We're always looking for talented producers to join our team. If you're interested, please send your portfolio and examples of your work to our careers email.
                  </p>
                </div>
                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="font-bold mb-2">Can I become an affiliate?</h3>
                  <p className="text-muted-foreground">
                    Yes, we have an affiliate program for content creators, music educators, and industry professionals. You can earn commission by referring customers to our platform.
                  </p>
                </div>
                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="font-bold mb-2">Do you offer internships?</h3>
                  <p className="text-muted-foreground">
                    We offer internships in music production, marketing, and business development for students and early-career professionals looking to gain experience in the music industry.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-lg mb-8">
              Browse our collection of premium beats and find the perfect sound for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/beats">Browse Our Beats</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const teamMembers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Founder & Lead Producer",
    bio: "With over 10 years of experience in music production, Alex founded BeatHub to share his passion for creating innovative beats across multiple genres.",
    imageUrl: "/team-member1.jpg",
    specialties: ["Hip-Hop", "Trap", "R&B"]
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Senior Producer",
    bio: "Sophia brings her classical music background and electronic production skills to create unique, genre-bending beats that push creative boundaries.",
    imageUrl: "/team-member2.jpg",
    specialties: ["Electronic", "Pop", "Cinematic"]
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Audio Engineer",
    bio: "Marcus ensures every beat meets our high-quality standards through expert mixing and mastering, bringing clarity and punch to our productions.",
    imageUrl: "/team-member3.jpg",
    specialties: ["Mixing", "Mastering", "Sound Design"]
  },
  {
    id: 4,
    name: "Olivia Patel",
    role: "Producer & Marketing Lead",
    bio: "Olivia creates infectious pop and dance beats while also leading our marketing efforts to connect artists with their perfect sound.",
    imageUrl: "/team-member4.jpg",
    specialties: ["Pop", "Dance", "Marketing"]
  },
  {
    id: 5,
    name: "David Kim",
    role: "Producer & Customer Support",
    bio: "David specializes in chill and ambient productions while also ensuring our customers receive exceptional support and guidance.",
    imageUrl: "/team-member5.jpg",
    specialties: ["Ambient", "Chill", "Customer Support"]
  },
  {
    id: 6,
    name: "Zoe Williams",
    role: "Producer & Content Creator",
    bio: "Zoe creates urban and afrobeat productions while also developing educational content to help artists make the most of our beats.",
    imageUrl: "/team-member6.jpg",
    specialties: ["Afrobeat", "Urban", "Education"]
  }
]

const testimonials = [
  {
    name: "James Wilson",
    title: "Independent Artist",
    quote: "BeatHub's beats have completely transformed my music. The quality and creativity in their productions have helped me stand out in a crowded industry.",
    rating: 5,
    imageUrl: "/testimonial1.jpg"
  },
  {
    name: "Elena Rodriguez",
    title: "Content Creator",
    quote: "I use BeatHub for all my YouTube content. Their beats are perfect for my videos, and the licensing terms are clear and fair.",
    rating: 5,
    imageUrl: "/testimonial2.jpg"
  },
  {
    name: "Michael Thompson",
    title: "Music Producer",
    quote: "As a producer myself, I appreciate the quality and attention to detail in BeatHub's work. Their beats provide great inspiration for my own projects.",
    rating: 4,
    imageUrl: "/testimonial3.jpg"
  },
  {
    name: "Sarah Johnson",
    title: "Indie Film Director",
    quote: "BeatHub's cinematic beats have added so much emotion and depth to my short films. Their music tells a story all on its own.",
    rating: 5,
    imageUrl: "/testimonial4.jpg"
  }
] 