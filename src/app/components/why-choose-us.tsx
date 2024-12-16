import { Lightbulb, Users, Eye, MessageCircle } from 'lucide-react'

const features = [
  { icon: Lightbulb, title: 'Showcase Your Ideas', description: 'Present your innovative projects to a global audience.' },
  { icon: Users, title: 'Connect with Investors', description: 'Network with potential investors and collaborators.' },
  { icon: Eye, title: 'Gain Visibility and Support', description: 'Increase exposure for your startup and receive valuable feedback.' },
  { icon: MessageCircle, title: 'Engage with a Community', description: 'Join a thriving ecosystem of entrepreneurs and innovators.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose StartupHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="mx-auto h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

