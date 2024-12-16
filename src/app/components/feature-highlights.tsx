import { Users, Search, MessageSquare, Star } from 'lucide-react'

const features = [
  {
    title: "Project Galleries",
    description: "Browse through various categories of projects including web development, mobile applications, and design prototypes.",
    icon: Search,
  },
  {
    title: "User Profiles",
    description: "Create your personalized profile to showcase your projects, skills, and connect with other creators.",
    icon: Users,
  },
  {
    title: "Collaboration",
    description: "Find projects looking for collaborators and join forces with other creators on exciting ventures.",
    icon: MessageSquare,
  },
  {
    title: "Feedback & Ratings",
    description: "Engage with the community through comments, ratings, and constructive feedback.",
    icon: Star,
  },
]

export function FeatureHighlights() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#002B5B]">
        Platform Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="border-2 border-[#8FE3CF] p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <feature.icon className="w-10 h-10 text-[#256D85] mb-2 mx-auto" />
              <h3 className="text-[#002B5B] font-semibold text-xl">{feature.title}</h3>
            </div>
            <p className="text-[#555] mt-4">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
