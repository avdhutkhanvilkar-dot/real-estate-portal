import { Search } from "lucide-react"
import { Input } from "./ui/input"

function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="relative w-full max-w-2xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search by city, property name, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-12 pr-4 py-3 text-base shadow-lg"
        />
      </div>
    </div>
  )
}

export default SearchBar
