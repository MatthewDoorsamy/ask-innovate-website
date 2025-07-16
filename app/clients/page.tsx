export default function ClientsPage() {
  const clients = [
    {
      name: "TechStart Solutions",
      description:
        "Helped this innovative tech startup establish their brand presence and achieve 300% growth in their first year through comprehensive digital marketing strategies.",
      image: "/placeholder.svg?height=200&width=300",
      industry: "Technology",
    },
    {
      name: "Green Earth Organics",
      description:
        "Developed sustainable marketing campaigns that increased brand awareness by 250% while maintaining their eco-friendly values and attracting conscious consumers.",
      image: "/placeholder.svg?height=200&width=300",
      industry: "Organic Food",
    },
    {
      name: "Urban Fitness Hub",
      description:
        "Created engaging social media campaigns and promotional strategies that boosted membership by 180% and established them as the leading fitness center in their area.",
      image: "/placeholder.svg?height=200&width=300",
      industry: "Fitness & Wellness",
    },
    {
      name: "Artisan Craft Co.",
      description:
        "Transformed their traditional business model with digital marketing solutions, resulting in 400% increase in online sales and expanded market reach.",
      image: "/placeholder.svg?height=200&width=300",
      industry: "Handmade Crafts",
    },
    {
      name: "Professional Services Group",
      description:
        "Implemented integrated marketing communications that enhanced their professional image and generated 220% more qualified leads within six months.",
      image: "/placeholder.svg?height=200&width=300",
      industry: "Professional Services",
    },
    {
      name: "Local Restaurant Chain",
      description:
        "Developed location-based marketing strategies and promotional campaigns that increased foot traffic by 160% across all locations during challenging times.",
      image: "/placeholder.svg?height=200&width=300",
      industry: "Food & Beverage",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Our Clients</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Discover how we've helped businesses across various industries achieve remarkable growth through innovative
            marketing solutions
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <img
                    src={client.image || "/placeholder.svg"}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                    <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{client.industry}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">250%</div>
              <div className="text-gray-600">Average Growth</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Campaigns Launched</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar remarkable results
          </p>
          <a
            href="/quote"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Success Story
          </a>
        </div>
      </section>
    </div>
  )
}
