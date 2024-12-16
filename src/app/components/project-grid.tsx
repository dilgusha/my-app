import { Heart, MessageSquare, Users } from 'lucide-react'
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with Next.js and Stripe integration.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Web Development",
    likes: 128,
    comments: 24,
    lookingForCollaborators: true,
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Health & Fitness App",
    description: "Mobile application for tracking workouts and nutrition with AI recommendations.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Mobile Apps",
    likes: 85,
    comments: 16,
    lookingForCollaborators: false,
    technologies: ["React Native", "TensorFlow", "Firebase"],
  },
  {
    id: 3,
    title: "Design System",
    description: "A comprehensive design system for scalable web applications.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Design",
    likes: 256,
    comments: 42,
    lookingForCollaborators: true,
    technologies: ["Figma", "Storybook", "CSS"],
  },
]

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col border border-gray-300 rounded-lg shadow-lg">
          <div className="p-0">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="object-cover rounded-t-lg h-48"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <span className="inline-block px-3 py-1 text-white bg-[#256D85] rounded-full text-sm">
                  {project.category}
                </span>
              </div>
              {project.lookingForCollaborators && (
                <span className="inline-flex items-center px-3 py-1 border border-[#002B5B] text-[#002B5B] rounded-full text-xs">
                  <Users className="w-3 h-3 mr-1" />
                  Collaborators Wanted
                </span>
              )}
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="inline-block px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t p-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                <Heart className="w-4 h-4" />
                {project.likes}
              </button>
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                <MessageSquare className="w-4 h-4" />
                {project.comments}
              </button>
            </div>
            <button className="ml-auto py-2 px-4 text-white bg-[#256D85] rounded-lg hover:bg-[#1e5c6b]">
              View Project
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
