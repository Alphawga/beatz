"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Play, 
  Pause, 
  Download, 
  Share2, 
  Heart, 
  Clock, 
  Music, 
  Tag, 
  Calendar, 
  ArrowLeft,
  ShoppingCart
} from "lucide-react"
import BeatCard from "@/components/beat-card"

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

export default function BeatPage() {
  const params = useParams()
  const beatId = params.id as string
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentBeat, setCurrentBeat] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  useAnimateOnScroll()
  
  // Fetch beat data
  useEffect(() => {
    // In a real app, you would fetch from an API
    // For now, we'll use the sample data
    const beat = sampleBeats.find(b => b.id === beatId)
    setCurrentBeat(beat || sampleBeats[0])
    setLoading(false)
  }, [beatId])
  
  if (loading) {
    return (
      <div className="container-custom py-40 text-center">
        <p className="text-lg">Loading beat details...</p>
      </div>
    )
  }
  
  if (!currentBeat) {
    return (
      <div className="container-custom py-40 text-center">
        <h2 className="font-bold mb-4">Beat Not Found</h2>
        <p className="text-muted-foreground mb-8">The beat you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/beats">Browse All Beats</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      {/* Beat Header Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-muted to-background">
        <div className="container-custom">
          <div className="mb-8 animate-on-scroll">
            <Button asChild variant="ghost" size="sm" className="mb-6">
              <Link href="/beats" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Beats
              </Link>
            </Button>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 relative animate-on-scroll">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl border border-border">
                  <Image
                    src={"/beat1.jpg"}
                    alt={currentBeat.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="lg" 
                      className="rounded-full w-16 h-16 bg-secondary text-white hover:bg-secondary/90"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? (
                        <Pause className="h-8 w-8" />
                      ) : (
                        <Play className="h-8 w-8 ml-1" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 animate-on-scroll">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    {currentBeat.genre}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {currentBeat.bpm} BPM
                  </span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                    {currentBeat.key}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentBeat.title}</h1>
                
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{currentBeat.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{currentBeat.releaseDate}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8">
                  {currentBeat.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Now - ${currentBeat.price}
                  </Button>
                  
                  <Button size="lg" variant="outline" className="group">
                    <Play className="h-4 w-4 mr-2" />
                    {isPlaying ? "Pause Preview" : "Play Preview"}
                  </Button>
                  
                  <Button size="icon" variant="ghost">
                    <Heart className="h-5 w-5" />
                  </Button>
                  
                  <Button size="icon" variant="ghost">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Beat Details Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <Tabs defaultValue="licenses" className="animate-on-scroll">
            <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
              <TabsTrigger value="licenses">Licenses</TabsTrigger>
              <TabsTrigger value="details">Beat Details</TabsTrigger>
              <TabsTrigger value="similar">Similar Beats</TabsTrigger>
            </TabsList>
            
            <TabsContent value="licenses" className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-6">Available Licenses</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="pricing-card">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold mb-2">Basic License</h4>
                    <p className="text-2xl font-bold text-secondary">${currentBeat.price}</p>
                    <p className="text-sm text-muted-foreground">MP3 Format</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Non-commercial use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>MP3 file (320kbps)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Up to 10,000 streams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Credit required</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                    Add to Cart
                  </Button>
                </div>
                
                <div className="pricing-card relative">
                  <div className="absolute -top-4 right-4 bg-secondary text-white px-3 py-1 text-xs font-medium rounded-full">
                    Popular
                  </div>
                  
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold mb-2">Premium License</h4>
                    <p className="text-2xl font-bold text-secondary">${currentBeat.price * 3}</p>
                    <p className="text-sm text-muted-foreground">WAV Format</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Commercial use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>WAV file (high quality)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Unlimited streams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Trackout stems included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Credit appreciated but not required</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                    Add to Cart
                  </Button>
                </div>
                
                <div className="pricing-card">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold mb-2">Exclusive License</h4>
                    <p className="text-2xl font-bold text-secondary">${currentBeat.price * 10}</p>
                    <p className="text-sm text-muted-foreground">Full Ownership</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Full ownership rights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>WAV + MP3 files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>All trackout stems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Beat removed from store</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>No credit required</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-6">Beat Specifications</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Description</h4>
                    <p className="text-muted-foreground">{currentBeat.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Mood</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentBeat.moods.map((mood: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                          {mood}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Music className="h-4 w-4 text-secondary" />
                      <h4 className="font-medium">Genre</h4>
                    </div>
                    <p>{currentBeat.genre}</p>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="h-4 w-4 text-secondary" />
                      <h4 className="font-medium">Key</h4>
                    </div>
                    <p>{currentBeat.key}</p>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-secondary" />
                      <h4 className="font-medium">BPM</h4>
                    </div>
                    <p>{currentBeat.bpm}</p>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <h4 className="font-medium">Released</h4>
                    </div>
                    <p>{currentBeat.releaseDate}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="similar" className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-6">Similar Beats You Might Like</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similarBeats.map((beat, index) => (
                  <div key={beat.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                    <BeatCard {...beat} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Perfect Sound</h2>
            <p className="text-lg mb-8">
              Browse our collection of premium beats and discover more tracks like this one.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/beats">Explore All Beats</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data for the current beat
const sampleBeats = [
  {
    id: "beat-1",
    title: "Midnight Vibes",
    genre: "Chill & Ambient",
    duration: "3:42",
    price: 12,
    bpm: 95,
    key: "A Minor",
    releaseDate: "June 15, 2023",
    imageUrl: "/placeholder.svg?height=400&width=400",
    audioUrl: "https://example.com/audio/midnight-vibes.mp3",
    description: "A smooth, atmospheric beat with deep bass and ethereal synths. Perfect for reflective lyrics and emotional storytelling.",
    moods: ["Relaxed", "Introspective", "Dreamy", "Atmospheric"]
  },
  {
    id: "beat-2",
    title: "Electric Dreams",
    genre: "Electronic & Dance",
    duration: "2:58",
    price: 15,
    bpm: 128,
    key: "F Major",
    releaseDate: "July 22, 2023",
    imageUrl: "/placeholder.svg?height=400&width=400",
    audioUrl: "https://example.com/audio/electric-dreams.mp3",
    description: "Energetic electronic beat with pulsing synths and driving percussion. Ideal for upbeat dance tracks and high-energy performances.",
    moods: ["Energetic", "Uplifting", "Euphoric", "Dynamic"]
  },
  {
    id: "beat-3",
    title: "Sunny Grooves",
    genre: "Pop & Upbeat",
    duration: "3:15",
    price: 10,
    bpm: 110,
    key: "D Major",
    releaseDate: "May 8, 2023",
    imageUrl: "/placeholder.svg?height=400&width=400",
    audioUrl: "https://example.com/audio/sunny-grooves.mp3",
    description: "Bright and cheerful pop beat with catchy melodies and uplifting chord progressions. Perfect for summer hits and positive vibes.",
    moods: ["Happy", "Bright", "Cheerful", "Summery"]
  }
]

// Similar beats based on genre
const similarBeats = [
  {
    id: "beat-4",
    title: "Urban Jungle",
    genre: "Hip-Hop & Trap",
    duration: "3:25",
    price: 18,
    imageUrl: "/placeholder.svg?height=400&width=400",
    audioUrl: "https://example.com/audio/urban-jungle.mp3",
  },
  {
    id: "beat-5",
    title: "Neon Lights",
    genre: "Electronic & Dance",
    duration: "2:48",
    price: 14,
    imageUrl: "/placeholder.svg?height=400&width=400",
    audioUrl: "https://example.com/audio/neon-lights.mp3",
  },
  {
    id: "beat-6",
    title: "Sunset Boulevard",
    genre: "Chill & Ambient",
    duration: "3:10",
    price: 12,
    imageUrl: "/placeholder.svg?height=400&width=400",
    audioUrl: "https://example.com/audio/sunset-boulevard.mp3",
  }
] 