import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Heart, MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

function PropertyCard({ property }) {
  const [fav, setFav] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    const exists = favorites.find((item) => item.id === property.id)
    if (exists) setFav(true)
  }, [property.id])

  const toggleFavorite = (e) => {
    e.preventDefault()
    let favorites = JSON.parse(localStorage.getItem("favorites")) || []

    if (fav) {
      favorites = favorites.filter((item) => item.id !== property.id)
      setFav(false)
    } else {
      favorites.push(property)
      setFav(true)
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))
  }

  return (
    <Link to={`/property/${property.id}`} className="block group">
      <Card className="overflow-hidden cursor-pointer">
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button
            onClick={toggleFavorite}
            className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              fav
                ? "bg-red-500 text-white scale-110"
                : "bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-red-50 hover:text-red-500"
            }`}
          >
            <Heart className={`w-5 h-5 ${fav ? "fill-current" : ""}`} />
          </button>
          <Badge className="absolute top-4 left-4 bg-indigo-600">
            {property.type}
          </Badge>
        </div>

        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
            {property.title}
          </h3>

          <div className="flex items-center gap-2 text-gray-500 mb-3">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span className="text-sm">{property.location}</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span className="text-xl font-bold text-indigo-600">
              {property.price}
            </span>
            <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 gap-1">
              View Details
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default PropertyCard
