"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import BeatCard from "@/components/beat-card"
import { ArrowRight, Search, Calendar, Filter, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

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

export default function NewReleasesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 50])
  const [sortBy, setSortBy] = useState("newest")
  const [filteredBeats, setFilteredBeats] = useState<any[]>([])
  const [activeFilters, setActiveFilters] = useState(0)
  
  useAnimateOnScroll()
  
  // Apply filters
  useEffect(() => {
    let filtered = [...newReleases]
    
    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(beat => 
        beat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        beat.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    // Genre filter
    if (selectedGenre !== "all") {
      filtered = filtered.filter(beat => beat.genre === selectedGenre)
    }
    
    // Price filter
    filtered = filtered.filter(beat => 
      beat.price >= priceRange[0] && beat.price <= priceRange[1]
    )
    
    // Sort
    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime())
    } else if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    }
    
    setFilteredBeats(filtered)
    
    // Count active filters
    let count = 0
    if (searchQuery) count++
    if (selectedGenre !== "all") count++
    if (priceRange[0] > 0 || priceRange[1] < 50) count++
    setActiveFilters(count)
    
  }, [searchQuery, selectedGenre, priceRange, sortBy])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedGenre("all")
    setPriceRange([0, 50])
    setSortBy("newest")
  }

  return (
    <div>
      {/* Header Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-muted to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-secondary" />
              <h2 className="text-sm font-medium uppercase tracking-wider text-secondary">Fresh Beats</h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">New Releases</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover our latest beats, updated weekly to keep your sound fresh and innovative.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto flex items-center gap-2">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search beats..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Filter className="h-4 w-4" />
                    {activeFilters > 0 && (
                      <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        {activeFilters}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Beats</SheetTitle>
                    <SheetDescription>
                      Narrow down your search with these filters
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="py-6 space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Genre</h3>
                      <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select genre" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Genres</SelectItem>
                          <SelectItem value="Hip-Hop & Trap">Hip-Hop & Trap</SelectItem>
                          <SelectItem value="Pop & Upbeat">Pop & Upbeat</SelectItem>
                          <SelectItem value="Electronic & Dance">Electronic & Dance</SelectItem>
                          <SelectItem value="Chill & Ambient">Chill & Ambient</SelectItem>
                          <SelectItem value="Urban & Afrobeat">Urban & Afrobeat</SelectItem>
                          <SelectItem value="Cinematic & Instrumental">Cinematic & Instrumental</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-medium">Price Range</h3>
                        <span className="text-sm text-muted-foreground">
                          ${priceRange[0]} - ${priceRange[1]}
                        </span>
                      </div>
                      <Slider
                        defaultValue={[0, 50]}
                        max={50}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="my-4"
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={clearFilters}>
                        Clear Filters
                      </Button>
                      <SheetTrigger asChild>
                        <Button>Apply Filters</Button>
                      </SheetTrigger>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="w-full md:w-auto flex items-center gap-2">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground hidden md:inline">Sort by:</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Active filters */}
          {activeFilters > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              
              {selectedGenre !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedGenre}
                  <button 
                    className="ml-1 hover:text-primary" 
                    onClick={() => setSelectedGenre("all")}
                  >
                    ×
                  </button>
                </Badge>
              )}
              
              {(priceRange[0] > 0 || priceRange[1] < 50) && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  ${priceRange[0]} - ${priceRange[1]}
                  <button 
                    className="ml-1 hover:text-primary" 
                    onClick={() => setPriceRange([0, 50])}
                  >
                    ×
                  </button>
                </Badge>
              )}
              
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  "{searchQuery}"
                  <button 
                    className="ml-1 hover:text-primary" 
                    onClick={() => setSearchQuery("")}
                  >
                    ×
                  </button>
                </Badge>
              )}
              
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                Clear all
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Beats Grid Section */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredBeats.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBeats.map((beat, index) => (
                  <div key={beat.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                    <BeatCard {...beat} />
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">Showing {filteredBeats.length} of {newReleases.length} beats</p>
                <Button variant="outline" size="lg">
                  Load More Beats
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">No beats found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any beats matching your current filters.
              </p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </section>

      {/* Release Schedule Section */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Our Release Schedule</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We drop new beats every week. Subscribe to get notified when fresh beats are available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50 p-6 animate-on-scroll">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Weekly Drops</h3>
              <p className="text-center text-muted-foreground">
                Every Monday we release 5-10 new beats across various genres.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50 p-6 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary mb-4 mx-auto">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Monthly Collections</h3>
              <p className="text-center text-muted-foreground">
                On the first Friday of each month, we drop themed beat collections.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50 p-6 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Seasonal Specials</h3>
              <p className="text-center text-muted-foreground">
                Special themed releases for holidays and seasonal events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss a Beat</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter to get notified when new beats drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data for new releases
const newReleases = [
  {
    id: "beat-1",
    title: "Midnight Vibes",
    genre: "Chill & Ambient",
    duration: "3:42",
    price: 12,
    releaseDate: "2023-06-15",
    imageUrl: "/beat1.jpg",
    audioUrl: "https://example.com/audio/midnight-vibes.mp3",
  },
  {
    id: "beat-2",
    title: "Electric Dreams",
    genre: "Electronic & Dance",
    duration: "2:58",
    price: 15,
    releaseDate: "2023-07-22",
    imageUrl: "/beat2.jpg",
    audioUrl: "https://example.com/audio/electric-dreams.mp3",
  },
  {
    id: "beat-3",
    title: "Sunny Grooves",
    genre: "Pop & Upbeat",
    duration: "3:15",
    price: 10,
    releaseDate: "2023-05-08",
    imageUrl: "/beat3.jpg",
    audioUrl: "https://example.com/audio/sunny-grooves.mp3",
  },
  {
    id: "beat-4",
    title: "Urban Jungle",
    genre: "Hip-Hop & Trap",
    duration: "3:25",
    price: 18,
    releaseDate: "2023-08-05",
    imageUrl: "/beat4.jpg",
    audioUrl: "https://example.com/audio/urban-jungle.mp3",
  },
  {
    id: "beat-5",
    title: "Neon Lights",
    genre: "Electronic & Dance",
    duration: "2:48",
    price: 14,
    releaseDate: "2023-08-12",
    imageUrl: "/beat5.jpg",
    audioUrl: "https://example.com/audio/neon-lights.mp3",
  },
  {
    id: "beat-6",
    title: "Sunset Boulevard",
    genre: "Chill & Ambient",
    duration: "3:10",
    price: 12,
    releaseDate: "2023-08-18",
    imageUrl: "/beat6.jpg",
    audioUrl: "https://example.com/audio/sunset-boulevard.mp3",
  },
  {
    id: "beat-7",
    title: "City Rhythm",
    genre: "Urban & Afrobeat",
    duration: "3:35",
    price: 16,
    releaseDate: "2023-08-25",
    imageUrl: "/beat7.jpg",
    audioUrl: "https://example.com/audio/city-rhythm.mp3",
  },
  {
    id: "beat-8",
    title: "Cosmic Journey",
    genre: "Cinematic & Instrumental",
    duration: "4:15",
    price: 20,
    releaseDate: "2023-09-01",
    imageUrl: "/beat8.jpg",
    audioUrl: "https://example.com/audio/cosmic-journey.mp3",
  },
  {
    id: "beat-9",
    title: "Summer Nights",
    genre: "Pop & Upbeat",
    duration: "3:05",
    price: 12,
    releaseDate: "2023-09-08",
    imageUrl: "/beat9.jpg",
    audioUrl: "https://example.com/audio/summer-nights.mp3",
  },
  {
    id: "beat-10",
    title: "Trap Kingdom",
    genre: "Hip-Hop & Trap",
    duration: "3:22",
    price: 15,
    releaseDate: "2023-09-15",
    imageUrl: "/beat10.jpg",
    audioUrl: "https://example.com/audio/trap-kingdom.mp3",
  },
  {
    id: "beat-11",
    title: "Ambient Dreams",
    genre: "Chill & Ambient",
    duration: "4:30",
    price: 14,
    releaseDate: "2023-09-22",
    imageUrl: "/beat1.jpg",
    audioUrl: "https://example.com/audio/ambient-dreams.mp3",
  },
  {
    id: "beat-12",
    title: "Future Bass",
    genre: "Electronic & Dance",
    duration: "3:18",
    price: 16,
    releaseDate: "2023-09-29",
    imageUrl: "/beat2.jpg",
    audioUrl: "https://example.com/audio/future-bass.mp3",
  }
] 