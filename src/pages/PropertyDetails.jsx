import { useParams } from "react-router-dom"
import { useState } from "react"
import properties from "../data/properties"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  User,
  Phone,
  X,
  Send,
} from "lucide-react"

function PropertyDetails() {
  const { id } = useParams()
  const property = properties.find((item) => item.id === Number(id))
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  if (!property) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🏠</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-700">Property Not Found</h2>
          <p className="text-gray-500 mt-2">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const sendMessage = () => {
    if (!name || !email || !phone || !message) {
      alert("Please fill all fields")
      return
    }
    alert("Message Sent Successfully!")
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    setShowForm(false)
  }

  return (
    <div className="flex-1 bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-80 md:h-full object-cover"
              />
            </div>

            <CardContent className="md:w-1/2 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge>{property.type}</Badge>
                <Badge variant="secondary">Featured</Badge>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <span>{property.location}</span>
              </div>

              <div className="text-3xl font-bold text-indigo-600 mb-6">
                {property.price}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <Bed className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{property.bedrooms}</div>
                  <div className="text-xs text-gray-500">Bedrooms</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <Bath className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{property.bathrooms}</div>
                  <div className="text-xs text-gray-500">Bathrooms</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <Maximize className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{property.area}</div>
                  <div className="text-xs text-gray-500">Area</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Owner Details</h3>
                <div className="flex items-center gap-3 text-gray-600">
                  <User className="w-5 h-5 text-indigo-500" />
                  <span>{property.owner}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 mt-2">
                  <Phone className="w-5 h-5 text-indigo-500" />
                  <span>{property.phone}</span>
                </div>
              </div>

              <Button onClick={() => setShowForm(true)} className="w-full" size="lg">
                Contact Owner
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Contact Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Contact Owner</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex min-h-[100px] w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500/20"
                />
                <Button onClick={sendMessage} className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default PropertyDetails
