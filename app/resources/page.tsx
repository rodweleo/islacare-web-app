import { FileText, Video, Download, ExternalLink } from 'lucide-react'

export default function Resources() {
    return (
        <main>
            <div className="bg-[#2B5693] text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Educational materials and support resources for your mental health journey.
                    </p>
                </div>
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="col-span-full mb-8">
                            <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
                            <p className="text-gray-600">
                                Access our collection of carefully curated resources designed to support your mental health journey.
                            </p>
                        </div>

                        {[
                            {
                                icon: FileText,
                                title: "Mental Health Guide",
                                description: "A comprehensive guide to understanding mental health from an Islamic perspective.",
                                link: "#"
                            },
                            {
                                icon: Video,
                                title: "Wellness Webinars",
                                description: "Watch our recorded webinar series on various mental health topics.",
                                link: "#"
                            },
                            {
                                icon: Download,
                                title: "Self-Care Toolkit",
                                description: "Download our practical self-care toolkit with daily exercises and activities.",
                                link: "#"
                            }
                        ].map((resource, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-[#2B5693] rounded-lg flex items-center justify-center mb-4">
                                    <resource.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                <a
                                    href={resource.link}
                                    className="text-[#2B5693] font-medium hover:underline inline-flex items-center"
                                >
                                    Access Resource
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12">Educational Articles</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Understanding Anxiety in Islam",
                                category: "Mental Health",
                                date: "October 15, 2023",
                                excerpt: "Learn about anxiety from both Islamic and psychological perspectives..."
                            },
                            {
                                title: "Self-Care Practices for Muslim Women",
                                category: "Wellness",
                                date: "October 10, 2023",
                                excerpt: "Discover essential self-care practices that align with Islamic values..."
                            },
                            {
                                title: "Building Resilience Through Faith",
                                category: "Spiritual Growth",
                                date: "October 5, 2023",
                                excerpt: "Explore how faith can be a source of strength and resilience..."
                            },
                            {
                                title: "Managing Family Relationships",
                                category: "Relationships",
                                date: "October 1, 2023",
                                excerpt: "Tips and guidance for maintaining healthy family relationships..."
                            }
                        ].map((article, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-sm text-[#2B5693] mb-2">{article.category}</div>
                                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">{article.date}</span>
                                    <a href="#" className="text-[#2B5693] font-medium hover:underline">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need Additional Support?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our team is here to help you find the resources you need for your mental health journey.
                    </p>
                    <button className="bg-[#2B5693] text-white px-8 py-3 rounded-md hover:bg-[#1e3d6a] transition-colors">
                        Contact Us
                    </button>
                </div>
            </section>
        </main>
    )
}

