import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Shield, Lock, User } from "lucide-react"

function AdminLogin() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("admin", "true")
      navigate("/admin")
    } else {
      alert("Invalid Username or Password")
    }
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-500 text-sm mt-1">Enter your credentials to access admin panel</p>
          </div>

          <div className="space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-11"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-11"
              />
            </div>

            <Button onClick={login} className="w-full" size="lg">
              Sign In
            </Button>
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">
            Demo: admin / 1234
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminLogin
