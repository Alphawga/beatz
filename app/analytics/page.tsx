"use client"

import { useState } from "react"
import Image from "next/image"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Calendar, Filter, Download, TrendingUp, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Analytics() {
  const [dateRange, setDateRange] = useState("This Month")

  return (
    <div className="pt-24">
      <section className="container-custom py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Analytics Dashboard</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Gain valuable insights into beat performance, listener trends, and engagement metrics. Leverage our detailed
            analytics tools to refine your music production and marketing strategies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={16} />
              {dateRange}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
          </div>
          <Button className="flex items-center gap-2">
            <Download size={16} />
            Export Report
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {overviewStats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 font-medium">{stat.title}</h3>
                <div className={`p-2 rounded-full ${stat.iconBg}`}>{stat.icon}</div>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold">{stat.value}</p>
                <div
                  className={`flex items-center gap-1 text-sm ${stat.change > 0 ? "text-green-500" : "text-red-500"}`}
                >
                  <TrendingUp size={14} className={stat.change < 0 ? "rotate-180" : ""} />
                  <span>{Math.abs(stat.change)}%</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">vs previous period</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Beat Downloads by Genre</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={genreData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="downloads" fill="#CDA434" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Listener Demographics</h3>
            <div className="h-80 flex justify-center items-center">
              <div className="w-full max-w-sm">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={demographicData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {demographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performing Beats */}
        <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6 mb-10">
          <h3 className="text-xl font-semibold mb-6">Top Performing Beats</h3>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Beat Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Genre</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-500">Downloads</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-500">Plays</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-500">Conversion</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-500">Rating</th>
                </tr>
              </thead>
              <tbody>
                {topBeats.map((beat, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 rounded-md overflow-hidden">
                          <Image src={beat.image || "/placeholder.svg"} alt={beat.name} fill className="object-cover" />
                        </div>
                        <span className="font-medium">{beat.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{beat.genre}</td>
                    <td className="py-3 px-4 text-center">{beat.downloads.toLocaleString()}</td>
                    <td className="py-3 px-4 text-center">{beat.plays.toLocaleString()}</td>
                    <td className="py-3 px-4 text-center">{beat.conversion}%</td>
                    <td className="py-3 px-4">
                      <div className="flex justify-center">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={`${i < beat.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-6">Regional Distribution</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-8 space-y-4">
                {regions.map((region, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-36 text-sm">{region.name}</div>
                    <div className="flex-grow h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full"
                        style={{
                          width: `${region.percentage}%`,
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      ></div>
                    </div>
                    <div className="w-12 text-right text-sm ml-3">{region.percentage}%</div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-primary/10 rounded-lg">
                <h4 className="font-medium mb-2">Insight</h4>
                <p className="text-sm text-gray-600">
                  West Africa continues to lead in beat consumption, with Nigeria and Ghana being the top markets.
                  Consider focusing more content on these regions for maximum engagement.
                </p>
              </div>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="African map distribution"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Component for Star icons
const Star = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

// Data
const COLORS = ["#CDA434", "#008080", "#D86D3F", "#7B61FF", "#50C878"]

const overviewStats = [
  {
    title: "Total Downloads",
    value: "8,547",
    change: 12.5,
    icon: <Download size={20} className="text-primary" />,
    iconBg: "bg-primary/10",
  },
  {
    title: "Active Users",
    value: "3,249",
    change: 8.2,
    icon: <Users size={20} className="text-accent" />,
    iconBg: "bg-accent/10",
  },
  {
    title: "Beat Plays",
    value: "25.4K",
    change: 15.8,
    icon: <TrendingUp size={20} className="text-green-500" />,
    iconBg: "bg-green-500/10",
  },
  {
    title: "Avg. Session",
    value: "18:42",
    change: -3.2,
    icon: <Clock size={20} className="text-purple-500" />,
    iconBg: "bg-purple-500/10",
  },
]

const genreData = [
  { name: "Afrobeat", downloads: 2430 },
  { name: "Amapiano", downloads: 1840 },
  { name: "Highlife", downloads: 1200 },
  { name: "Dancehall", downloads: 980 },
  { name: "Afro-House", downloads: 840 },
  { name: "Traditional", downloads: 620 },
]

const demographicData = [
  { name: "18-24", value: 25 },
  { name: "25-34", value: 35 },
  { name: "35-44", value: 20 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 5 },
]

const topBeats = [
  {
    name: "Lagos Nights",
    genre: "Afrobeat",
    downloads: 1245,
    plays: 8762,
    conversion: 14.2,
    rating: 4.8,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Accra Groove",
    genre: "Highlife",
    downloads: 987,
    plays: 6543,
    conversion: 15.1,
    rating: 4.7,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Soweto Rhythm",
    genre: "Amapiano",
    downloads: 876,
    plays: 5421,
    conversion: 16.2,
    rating: 4.9,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Tribal Fusion",
    genre: "Afro Fusion",
    downloads: 743,
    plays: 4932,
    conversion: 15.1,
    rating: 4.6,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Desert Rhythm",
    genre: "Traditional",
    downloads: 621,
    plays: 3845,
    conversion: 16.1,
    rating: 4.5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

const regions = [
  { name: "West Africa", percentage: 45 },
  { name: "East Africa", percentage: 23 },
  { name: "Southern Africa", percentage: 18 },
  { name: "North Africa", percentage: 9 },
  { name: "Central Africa", percentage: 5 },
]

