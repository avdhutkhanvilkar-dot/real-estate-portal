import { Filter as FilterIcon } from "lucide-react"

function Filter({ type, setType }) {
  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-md border border-gray-100">
        <FilterIcon className="w-5 h-5 text-indigo-500" />
        <span className="text-sm font-medium text-gray-600">Filter:</span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer transition-all duration-200 hover:bg-gray-100"
        >
          <option value="All">All Properties</option>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
