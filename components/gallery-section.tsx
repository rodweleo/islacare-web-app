export default function GallerySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#2B5693] mb-2">GALLERY</p>
          <h2 className="text-4xl font-bold text-gray-900">Explore Our Therapy Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Individual reflection session",
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "One-on-one therapy consultation",
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Group therapy session",
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Personal counseling session",
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Therapy documentation and notes",
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Virtual therapy session",
            },
          ].map((image, index) => (
            <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

