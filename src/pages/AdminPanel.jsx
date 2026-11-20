import { Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import {
  Plus,
  LogOut,
  Edit,
  Trash2,
  Building2,
  MapPin,
  DollarSign,
  Home,
} from "lucide-react"

function AdminPanel() {
  const [properties, setProperties] = useState([])
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [type, setType] = useState("")
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("adminProperties")) || []
    setProperties(data)
  }, [])

  if (localStorage.getItem("admin") !== "true") {
    return <Navigate to="/admin-login" />
  }

  const addProperty = () => {
    if (!title || !location || !price || !type) {
      alert("Please fill all fields")
      return
    }

    if (editId) {
      const updated = properties.map((item) =>
        item.id === editId ? { ...item, title, location, price, type } : item
      )
      setProperties(updated)
      localStorage.setItem("adminProperties", JSON.stringify(updated))
      setEditId(null)
    } else {
      const newProperty = { id: Date.now(), title, location, price, type }
      const updated = [...properties, newProperty]
      setProperties(updated)
      localStorage.setItem("adminProperties", JSON.stringify(updated))
    }

    setTitle("")
    setLocation("")
    setPrice("")
    setType("")
  }

  const editProperty = (property) => {
    setEditId(property.id)
    setTitle(property.title)
    setLocation(property.location)
    setPrice(property.price)
    setType(property.type)
  }

  const deleteProperty = (id) => {
    const updated = properties.filter((item) => item.id !== id)
    setProperties(updated)
    localStorage.setItem("adminProperties", JSON.stringify(updated))
  }

  const logout = () => {
    localStorage.removeItem("admin")
    window.location = "/admin-login"
  }

  return (
    <div className="flex-1 bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-500 mt-1">Manage your properties</p>
          </div>
          <Button variant="destructive" onClick={logout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {editId ? "Edit Property" : "Add New Property"}
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Property Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="pl-11"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-11"
                />
              </div>

              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="pl-11"
                />
              </div>

              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Property Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="pl-11"
                />
              </div>
            </div>

            <Button onClick={addProperty} className="gap-2">
              <Plus className="w-4 h-4" />
              {editId ? "Update Property" : "Add Property"}
            </Button>
          </CardContent>
        </Card>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Properties ({properties.length})
        </h2>

        {properties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card key={property.id}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{property.title}</h3>
                    <Badge variant="secondary">{property.type}</Badge>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                    {property.location}
                  </div>

                  <div className="text-lg font-bold text-indigo-600 mb-4">
                    {property.price}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => editProperty(property)}
                      className="gap-1 text-green-600 border-green-200 hover:bg-green-50"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteProperty(property.id)}
                      className="gap-1 text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No properties added yet</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default AdminPanel
