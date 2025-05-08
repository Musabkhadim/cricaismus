export default function BlogCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="skeleton aspect-[16/9]"></div>
      <div className="p-5">
        <div className="flex space-x-4 mb-3">
          <div className="skeleton h-4 w-24"></div>
          <div className="skeleton h-4 w-24"></div>
        </div>
        <div className="skeleton h-6 w-full mb-2"></div>
        <div className="skeleton h-4 w-full mb-1"></div>
        <div className="skeleton h-4 w-full mb-1"></div>
        <div className="skeleton h-4 w-3/4 mb-4"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="skeleton h-8 w-8 rounded-full mr-2"></div>
            <div className="skeleton h-4 w-24"></div>
          </div>
          <div className="skeleton h-8 w-24 rounded-md"></div>
        </div>
      </div>
    </div>
  )
}
