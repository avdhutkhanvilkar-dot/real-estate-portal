import { useEffect, useState } from "react"
import PropertyCard from "../components/PropertyCard"
import { Heart, HeartOff } from "lucide-react"

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || []
    setFavorites(data)
  }, [])

  return (
    <div className="flex-1 bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-red-500 fill-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Favorite Properties</h1>
          <p className="text-gray-500 mt-2">Your saved properties collection</p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartOff className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600">No Favorites Yet</h3>
            <p className="text-gray-400 mt-2">Start exploring and save properties you love</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorites
