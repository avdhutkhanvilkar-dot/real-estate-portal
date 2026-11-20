import { useState } from "react"
import PropertyCard from "../components/PropertyCard"
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"
import properties from "../data/properties"
import { Button } from "../components/ui/button"
import { Building2, TrendingUp, Users, Award } from "lucide-react"

function Home() {
  const [search, setSearch] = useState("")
  const [type, setType] = useState("All")

  const filteredProperties = properties.filter((property) => {
    const searchMatch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase())

    const typeMatch = type === "All" || property.type === type

    return searchMatch && typeMatch
  })

  const stats = [
    { icon: Building2, label: "Properties", value: "2,500+" },
    { icon: Users, label: "Happy Clients", value: "1,200+" },
    { icon: TrendingUp, label: "Sold", value: "800+" },
    { icon: Award, label: "Awards", value: "15+" },
  ]

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl px-12 py-10 border border-white/20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Find Your Dream Home
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl">
              Buy, Rent & Sell Properties Easily with DreamNest
            </p>
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 shadow-xl">
              Explore Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-7 h-7 text-indigo-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Search & Filter */}
      <SearchBar search={search} setSearch={setSearch} />
      <Filter type={type} setType={setType} />

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600">No Properties Found</h3>
              <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
