import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface GenreCardProps {
  id: string
  name: string
  imageUrl: string
  count: number
}

const GenreCard = ({ id, name, imageUrl, count }: GenreCardProps) => {
  return (
    <Link href={`/genres/${id}`} className="genre-card block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${name} genre`}
          fill
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-heading font-semibold text-xl mb-1">{name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">{count} beats</span>
            <div className="bg-white/20 rounded-full p-1.5 transition-colors duration-300 hover:bg-secondary">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GenreCard

