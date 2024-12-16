import { Heart } from 'lucide-react';

const projects = [
  { id: 1, title: 'EcoTech Solutions', description: 'Innovative green energy solutions for urban environments.' },
  { id: 2, title: 'MindfulAI', description: 'AI-powered mental health support and personalized therapy.' },
  { id: 3, title: 'FoodShare', description: 'Platform connecting restaurants with local food banks to reduce waste.' },
  { id: 4, title: 'SmartHome Hub', description: 'Centralized IoT control for all your smart home devices.' },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trending Startups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
              </div>
              <div className="p-4 border-t flex justify-between items-center">
                <button className="flex items-center text-gray-500 hover:text-gray-700 text-sm">
                  <Heart className="mr-2 h-4 w-4" /> 0
                </button>
                <button className="text-blue-500 hover:underline text-sm">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
