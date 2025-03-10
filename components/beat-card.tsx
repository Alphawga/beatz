"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AudioPlayer from "@/components/audio-player"
import { ShoppingCart } from "lucide-react"

interface BeatCardProps {
  id: string
  title: string
  genre: string
  duration: string
  price: number
  imageUrl: string
  audioUrl: string
}

const BeatCard = ({ id, title, genre, duration, price, imageUrl, audioUrl }: BeatCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="beat-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Cover art for ${title}`}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-3/4">
            <AudioPlayer audioUrl={audioUrl} isCompact={true} />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg mb-1 truncate">{title}</h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-muted-foreground">{genre}</span>
          <span className="text-xs bg-muted px-2 py-1 rounded-full">{duration}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold text-secondary">${price.toFixed(2)}</span>
          <Button size="sm" className="bg-secondary text-white hover:bg-secondary/90" asChild>
            <Link href={`/beats/${id}`} className="flex items-center gap-1">
              <ShoppingCart size={14} />
              <span>Buy Now</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BeatCard

