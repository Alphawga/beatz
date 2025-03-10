import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Genres() {
  return (
    <div className="pt-24">
      <section className="container-custom py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Explore Genres</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover the rich diversity of African music through our extensive collection of genres. From traditional
            rhythms to modern fusions, find the perfect sound for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genresList.map((genre) => (
            <Link key={genre.id} href={`/genres/${genre.id}`} className="group">
              <div className="card overflow-hidden h-64 relative">
                <Image
                  src={genre.image || "/placeholder.svg"}
                  alt={genre.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-white text-2xl font-bold mb-2">{genre.name}</h2>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-300 text-sm">{genre.beatCount} beats</p>
                    <span className="bg-white/20 rounded-full p-2 group-hover:bg-primary transition-colors">
                      <ChevronRight className="text-white" size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Featured Genre Mixes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {genreMixes.map((mix, index) => (
              <div
                key={index}
                className="bg-white dark:bg-card-bg rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image src={mix.image || "/placeholder.svg"} alt={mix.title} fill className="object-cover" />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-semibold mb-2">{mix.title}</h3>
                  <p className="text-gray-600 mb-4">{mix.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {mix.tags.map((tag, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Data
const genresList = [
  {
    id: "afrobeat",
    name: "Afrobeat",
    beatCount: 245,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "amapiano",
    name: "Amapiano",
    beatCount: 178,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "highlife",
    name: "Highlife",
    beatCount: 120,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "afro-house",
    name: "Afro House",
    beatCount: 156,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "dancehall",
    name: "Dancehall",
    beatCount: 187,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "traditional",
    name: "Traditional",
    beatCount: 94,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "afro-pop",
    name: "Afro Pop",
    beatCount: 215,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "afro-trap",
    name: "Afro Trap",
    beatCount: 132,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "afro-fusion",
    name: "Afro Fusion",
    beatCount: 108,
    image: "/placeholder.svg?height=400&width=600",
  },
]

const genreMixes = [
  {
    title: "Afrobeat x Amapiano Fusion",
    description:
      "Experience the beautiful blend of Nigerian Afrobeat rhythms with South African Amapiano vibes in this unique collection.",
    tags: ["Fusion", "Cross-Genre", "Modern"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Traditional Meets Electronic",
    description: "Ancient African instruments and rhythms reimagined with modern electronic production techniques.",
    tags: ["Traditional", "Electronic", "Experimental"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

