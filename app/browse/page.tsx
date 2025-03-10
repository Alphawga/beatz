import Image from "next/image"
import { Search, Filter, Music, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrowseBeats() {
  return (
    <div className="pt-24">
      <section className="container-custom py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Browse Beats</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover thousands of premium beats from Africa's top producers. Filter by genre, mood, tempo, and more to
            find your perfect sound.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for beats, producers, or keywords..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                Filter
              </Button>
              <Button variant="outline">Genre</Button>
              <Button variant="outline">Tempo</Button>
              <Button variant="outline">Key</Button>
              <Button variant="outline">Mood</Button>
            </div>
          </div>
        </div>

        {/* Featured Collections */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold">{collection.title}</h3>
                      <p className="text-sm text-gray-200">{collection.count} beats</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Beats */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">All Beats</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1">
                <option>Newest</option>
                <option>Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {beats.map((beat, index) => (
              <div key={index} className="card group">
                <div className="relative aspect-square bg-gradient-to-br from-primary/60 to-accent/60 overflow-hidden">
                  <Image
                    src={beat.image || "/placeholder.svg"}
                    alt={beat.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <Button className="rounded-full w-14 h-14 flex items-center justify-center">
                      <Music size={24} />
                    </Button>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs py-1 px-2 rounded">
                    {beat.bpm} BPM
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg truncate">{beat.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{beat.producer}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-primary">{beat.price}</span>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                      Preview <ArrowRight size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Data
const collections = [
  {
    title: "Latest Afrobeats",
    count: 24,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Amapiano Essentials",
    count: 18,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Highlife Classics",
    count: 15,
    image: "/placeholder.svg?height=300&width=500",
  },
]

const beats = [
  {
    title: "Lagos Nights",
    producer: "AfriqueBeats",
    price: "₦5,000",
    bpm: 105,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Sunset Groove",
    producer: "BeatMaster",
    price: "₦4,500",
    bpm: 98,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Desert Rhythm",
    producer: "SoundSage",
    price: "₦6,200",
    bpm: 110,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Urban Flow",
    producer: "CityBeats",
    price: "₦3,800",
    bpm: 120,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Tribal Fusion",
    producer: "AfriqueBeats",
    price: "₦5,500",
    bpm: 95,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Midnight Magic",
    producer: "NightOwl",
    price: "₦4,200",
    bpm: 102,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Savanna Dreams",
    producer: "WildRhythm",
    price: "₦4,800",
    bpm: 92,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Electric Djembe",
    producer: "FusionMaster",
    price: "₦5,300",
    bpm: 115,
    image: "/placeholder.svg?height=300&width=300",
  },
]

