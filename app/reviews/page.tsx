import Image from "next/image"
import { Star, ThumbsUp, MessageSquare, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Reviews() {
  return (
    <div className="pt-24">
      <section className="container-custom py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Reviews & Feedback</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover what our community has to say about AfriqueBeats. Read reviews, share your experience, and join the
            conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Customer Reviews</h2>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                Filter
              </Button>
            </div>

            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={`${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                    </div>
                  </div>

                  {review.beatReviewed && (
                    <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mb-4">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden">
                        <Image
                          src={review.beatReviewed.image || "/placeholder.svg"}
                          alt={review.beatReviewed.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{review.beatReviewed.title}</p>
                        <p className="text-xs text-gray-500">{review.beatReviewed.producer}</p>
                      </div>
                    </div>
                  )}

                  <p className="mb-4">{review.text}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-1 hover:text-accent">
                        <ThumbsUp size={16} />
                        <span>{review.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-accent">
                        <MessageSquare size={16} />
                        <span>{review.comments}</span>
                      </button>
                    </div>
                    <button className="hover:text-accent">Reply</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More Reviews</Button>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Overall Rating</h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-bold text-primary">4.8</div>
                <div>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${i < 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Based on 318 reviews</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { stars: 5, percentage: 85 },
                  { stars: 4, percentage: 10 },
                  { stars: 3, percentage: 3 },
                  { stars: 2, percentage: 1 },
                  { stars: 1, percentage: 1 },
                ].map((item) => (
                  <div key={item.stars} className="flex items-center gap-2">
                    <div className="flex w-24">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${i < item.stars ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                    </div>
                    <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                    <div className="w-8 text-right text-sm text-gray-500">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
              <p className="text-sm text-gray-600 mb-6">
                Share your experience with AfriqueBeats and help others discover amazing African beats.
              </p>

              <Button className="w-full">Write a Review</Button>
            </div>

            <div className="bg-gradient-to-br from-primary to-accent rounded-xl shadow-md p-6 mt-6 text-white">
              <h2 className="text-xl font-semibold mb-3">Join Our Community</h2>
              <p className="text-sm mb-6">
                Connect with thousands of artists and producers. Share experiences and get inspired.
              </p>
              <Button variant="secondary" className="w-full bg-white text-accent hover:bg-gray-100">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Data
const reviews = [
  {
    name: "David Okafor",
    avatar: "/placeholder.svg?height=100&width=100",
    date: "August 15, 2025",
    rating: 5,
    text: "AfriqueBeats has completely transformed my music production workflow. The quality of the beats available is outstanding, and the analytics tools give me incredible insights into what works with my audience. I've been using the platform for six months now, and it has become an essential part of my creative process.",
    likes: 24,
    comments: 3,
    beatReviewed: {
      title: "Lagos Nights",
      producer: "BeatMaster",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    name: "Amara Konte",
    avatar: "/placeholder.svg?height=100&width=100",
    date: "August 10, 2025",
    rating: 5,
    text: "Finding authentic African sounds used to be a challenge until I discovered AfriqueBeats. The platform offers an incredible variety of beats that truly represent our diverse musical heritage. The Premium plan is worth every penny for the high-quality downloads and licensing options.",
    likes: 18,
    comments: 2,
    beatReviewed: null,
  },
  {
    name: "Kwame Mensah",
    avatar: "/placeholder.svg?height=100&width=100",
    date: "August 5, 2025",
    rating: 4,
    text: "The diversity of beats available on AfriqueBeats is impressive. From traditional rhythms to modern fusions, it's a treasure trove for any music professional. My only suggestion would be to add more tutorials on how to integrate these beats into different production workflows. Other than that, it's a fantastic platform!",
    likes: 12,
    comments: 1,
    beatReviewed: {
      title: "Accra Groove",
      producer: "GhanaSound",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
]

