import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/tinkoro-logo.png" alt="Tinkoro Studio Logo" width={60} height={60} className="rounded-lg" />
            <div>
              <h1 className="text-xl font-bold text-amber-900">TINKORO</h1>
              <p className="text-sm text-amber-700">STUDIO</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-amber-800 hover:text-rose-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-amber-800 hover:text-rose-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-amber-800 hover:text-rose-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image src="/tinkoro-logo.png" alt="Tinkoro Studio" width={200} height={200} className="mx-auto mb-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-amber-900 mb-6">
            <span className="text-rose-300">TINKORO</span>
            <br />
            <span className="text-amber-800">STUDIO</span>
          </h1>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where creativity meets craftsmanship. We bring small wonders to life through miniatures, robots, and
            electronic art pieces.
          </p>
          <Button
            size="lg"
            className="bg-rose-300 hover:bg-rose-400 text-amber-900 px-8 py-3 rounded-full text-lg font-medium"
          >
            Explore Our Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-amber-900 mb-12">About Our Studio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/50 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-300 rounded-full"></div>
                </div>
                <h3 className="text-xl font-medium text-amber-900 mb-3">Miniatures</h3>
                <p className="text-amber-700">
                  Detailed miniature worlds and figures crafted with precision and artistic flair.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-rose-300 rounded-full"></div>
                </div>
                <h3 className="text-xl font-medium text-amber-900 mb-3">Small Robots</h3>
                <p className="text-amber-700">Charming robotic companions that blend technology with personality.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-amber-300 rounded-full"></div>
                </div>
                <h3 className="text-xl font-medium text-amber-900 mb-3">Electronics</h3>
                <p className="text-amber-700">Interactive electronic art pieces that spark curiosity and wonder.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-amber-900 text-center mb-12">Our Creations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="bg-white/50 border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-green-100 to-rose-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🤖</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-rose-300 rounded-full"></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-amber-900 mb-2">Project {item}</h3>
                  <p className="text-amber-700 text-sm">Coming soon...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light text-amber-900 mb-8">Get In Touch</h2>
          <p className="text-xl text-amber-700 mb-12">
            Ready to bring your creative vision to life? We'd love to hear from you.
          </p>

          <Card className="bg-white/50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <Mail className="w-5 h-5 text-rose-400" />
                  <span className="text-amber-800">hello@tinkorostudio.com</span>
                </div>

                <div className="flex justify-center space-x-6">
                  <Button variant="ghost" size="sm" className="text-amber-800 hover:text-rose-400">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-amber-800 hover:text-rose-400">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Image src="/tinkoro-logo.png" alt="Tinkoro Studio" width={40} height={40} className="rounded-lg" />
          <div>
            <p className="text-rose-300 font-medium">TINKORO</p>
            <p className="text-amber-800 text-sm">STUDIO</p>
          </div>
        </div>
        <p className="text-amber-700 text-sm">© 2024 Tinkoro Studio. Crafting small wonders with big dreams.</p>
      </footer>
    </div>
  )
}
