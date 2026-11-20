import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowLeft } from "lucide-react"

function NotFound() {
  return (
    <div className="flex-1 bg-gray-50 flex items-center justify-center py-20 px-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
