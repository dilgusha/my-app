// import { Button } from '@/components/ui/button'

import Button from "./ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover Innovative Startups or Share Yours with the World
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with entrepreneurs, innovators, and creators in a thriving community.
        </p>
        <div className="space-x-4">
          <Button size="lg">
            Explore Projects
          </Button>
          <Button size="lg" variant="outline">
            Get Started for Free
          </Button>
        </div>
      </div>
    </section>
  )
}

