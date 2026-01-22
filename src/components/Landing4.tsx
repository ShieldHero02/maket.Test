import { ArrowRight, Mail, Phone, MapPin, Menu, X, Award, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Landing4() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-amber-200 dark:border-amber-900/30 transition-colors">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-wider text-gray-900 dark:text-white">
              VISTA<span className="font-bold text-amber-600 dark:text-amber-500">HR</span>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#work" className="text-sm tracking-wide text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 transition">WORK</a>
              <a href="#services" className="text-sm tracking-wide text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 transition">SERVICES</a>
              <a href="#about" className="text-sm tracking-wide text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 transition">ABOUT</a>
              <a href="#contact" className="text-sm tracking-wide text-amber-700 dark:text-amber-500 font-medium hover:text-amber-600 dark:hover:text-amber-400 transition">CONTACT</a>
            </div>
            <button
              className="md:hidden text-gray-900 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pt-6 pb-4 space-y-4">
              <a href="#work" className="block text-sm tracking-wide text-gray-600 dark:text-gray-400 py-2">WORK</a>
              <a href="#services" className="block text-sm tracking-wide text-gray-600 dark:text-gray-400 py-2">SERVICES</a>
              <a href="#about" className="block text-sm tracking-wide text-gray-600 dark:text-gray-400 py-2">ABOUT</a>
              <a href="#contact" className="block text-sm tracking-wide text-amber-700 dark:text-amber-500 font-medium py-2">CONTACT</a>
            </div>
          )}
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white leading-tight">
                  We build
                  <br />
                  <span className="font-bold italic text-amber-600 dark:text-amber-500">exceptional</span>
                  <br />
                  teams
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                  Strategic talent acquisition for forward-thinking companies. We connect visionaries with the people who bring their ideas to life.
                </p>
              </div>
              <button className="group inline-flex items-center space-x-3 text-amber-700 dark:text-amber-500 border-b-2 border-amber-600 dark:border-amber-500 pb-2 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500 dark:hover:border-amber-400 transition">
                <span className="text-sm tracking-wider font-medium">EXPLORE OUR WORK</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <div className="absolute inset-0 border-4 border-amber-600/20 dark:border-amber-500/20"></div>
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-amber-50/30 dark:bg-amber-950/10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-6xl font-light text-amber-700 dark:text-amber-500">800+</div>
              <div className="text-sm tracking-wider text-gray-600 dark:text-gray-400">PLACEMENTS</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-light text-amber-700 dark:text-amber-500">98%</div>
              <div className="text-sm tracking-wider text-gray-600 dark:text-gray-400">RETENTION RATE</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-light text-amber-700 dark:text-amber-500">20+</div>
              <div className="text-sm tracking-wider text-gray-600 dark:text-gray-400">YEARS EXPERIENCE</div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-white mb-20">
            Featured <span className="italic font-medium text-amber-600 dark:text-amber-500">Projects</span>
          </h2>
          <div className="space-y-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="h-[400px] lg:h-[500px] overflow-hidden border-2 border-amber-200 dark:border-amber-900/30">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Tech startup team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6 lg:pl-12">
                <div className="space-y-2">
                  <div className="text-sm tracking-wider text-amber-600 dark:text-amber-500">01 / TECH STARTUP</div>
                  <h3 className="text-3xl font-light text-gray-900 dark:text-white">Building a world-class engineering team</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Recruited 45 senior engineers and technical leaders for a fast-growing fintech startup. Achieved 95% offer acceptance rate and zero turnover in first year.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs tracking-wider px-4 py-2 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20">ENGINEERING</span>
                  <span className="text-xs tracking-wider px-4 py-2 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20">LEADERSHIP</span>
                  <span className="text-xs tracking-wider px-4 py-2 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20">FINTECH</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:pr-12 order-2 lg:order-1">
                <div className="space-y-2">
                  <div className="text-sm tracking-wider text-amber-600 dark:text-amber-500">02 / HEALTHCARE</div>
                  <h3 className="text-3xl font-light text-gray-900 dark:text-white">Transforming patient care through talent</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Partnered with a healthcare innovator to build their clinical operations team from the ground up. 30+ specialized hires in 6 months.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs tracking-wider px-4 py-2 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20">HEALTHCARE</span>
                  <span className="text-xs tracking-wider px-4 py-2 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20">OPERATIONS</span>
                  <span className="text-xs tracking-wider px-4 py-2 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20">CLINICAL</span>
                </div>
              </div>
              <div className="h-[400px] lg:h-[500px] overflow-hidden order-1 lg:order-2 border-2 border-amber-200 dark:border-amber-900/30">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Healthcare professionals"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="h-[400px] lg:h-[500px] overflow-hidden border-2 border-amber-200 dark:border-amber-900/30">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Creative team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6 lg:pl-12">
                <div className="space-y-2">
                  <div className="text-sm tracking-wider text-amber-600 dark:text-amber-500">03 / CREATIVE AGENCY</div>
                  <h3 className="text-3xl font-light text-gray-900 dark:text-white">Assembling creative excellence</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Curated a diverse creative team for a leading digital agency. Focus on cultural fit and portfolio excellence resulted in award-winning campaigns.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs tracking-wider px-4 py-2 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20">CREATIVE</span>
                  <span className="text-xs tracking-wider px-4 py-2 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20">DESIGN</span>
                  <span className="text-xs tracking-wider px-4 py-2 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20">MARKETING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 lg:px-12 bg-amber-50/30 dark:bg-amber-950/10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-white mb-20">
            Our <span className="italic font-medium text-amber-600 dark:text-amber-500">Approach</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6 group">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-amber-600 dark:border-amber-500 group-hover:bg-amber-600 dark:group-hover:bg-amber-500 transition-colors">
                <Award className="w-8 h-8 text-amber-600 dark:text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 dark:text-white">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We prioritize quality over quantity. Every candidate is thoroughly vetted and culturally aligned with your organization's values and goals.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-amber-600 dark:border-amber-500 group-hover:bg-amber-600 dark:group-hover:bg-amber-500 transition-colors">
                <Users className="w-8 h-8 text-amber-600 dark:text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 dark:text-white">Strategic Partnership</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We become an extension of your team, understanding your business deeply to find candidates who will drive your vision forward.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-amber-600 dark:border-amber-500 group-hover:bg-amber-600 dark:group-hover:bg-amber-500 transition-colors">
                <TrendingUp className="w-8 h-8 text-amber-600 dark:text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 dark:text-white">Long-term Success</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our commitment extends beyond placement. We ensure successful integration and provide ongoing support for sustained growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-tight">
            Let's build something
            <br />
            <span className="italic font-medium text-amber-600 dark:text-amber-500">extraordinary together</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Every great company starts with great people. We'd love to help you find yours.
          </p>
          <button className="group inline-flex items-center space-x-3 text-amber-700 dark:text-amber-500 border-b-2 border-amber-600 dark:border-amber-500 pb-2 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500 dark:hover:border-amber-400 transition">
            <span className="text-sm tracking-wider font-medium">START A CONVERSATION</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      <section id="about" className="py-20 px-6 lg:px-12 bg-amber-50/30 dark:bg-amber-950/10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-gray-900 dark:text-white">Who We Are</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  VistaHR is a boutique talent acquisition firm specializing in executive and strategic hires. Founded in 2004, we've built our reputation on discretion, quality, and results.
                </p>
                <p>
                  Our team combines deep industry expertise with a human-centered approach. We believe that the right hire can transform a business, and we're committed to making those connections.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-sm tracking-wider text-amber-600 dark:text-amber-500">INDUSTRIES</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm px-4 py-2 bg-white dark:bg-black border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">Technology</span>
                  <span className="text-sm px-4 py-2 bg-white dark:bg-black border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">Healthcare</span>
                  <span className="text-sm px-4 py-2 bg-white dark:bg-black border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">Finance</span>
                  <span className="text-sm px-4 py-2 bg-white dark:bg-black border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">Creative</span>
                  <span className="text-sm px-4 py-2 bg-white dark:bg-black border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">Manufacturing</span>
                  <span className="text-sm px-4 py-2 bg-white dark:bg-black border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">Retail</span>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm tracking-wider text-amber-600 dark:text-amber-500">SERVICES</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm px-4 py-2 bg-white dark:bg-black border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">Executive Search</span>
                  <span className="text-sm px-4 py-2 bg-white dark:bg-black border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">Team Building</span>
                  <span className="text-sm px-4 py-2 bg-white dark:bg-black border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">Leadership Assessment</span>
                  <span className="text-sm px-4 py-2 bg-white dark:bg-black border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">Culture Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-white">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <Mail className="w-6 h-6 text-amber-600 dark:text-amber-500 mt-1" />
                  <div>
                    <div className="text-sm tracking-wider text-amber-600 dark:text-amber-500 mb-1">EMAIL</div>
                    <a href="mailto:hello@vistahr.com" className="text-lg text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-500 transition">
                      hello@vistahr.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Phone className="w-6 h-6 text-amber-600 dark:text-amber-500 mt-1" />
                  <div>
                    <div className="text-sm tracking-wider text-amber-600 dark:text-amber-500 mb-1">PHONE</div>
                    <a href="tel:+380445551234" className="text-lg text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-500 transition">
                      +380 44 555 1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-500 mt-1" />
                  <div>
                    <div className="text-sm tracking-wider text-amber-600 dark:text-amber-500 mb-1">OFFICE</div>
                    <div className="text-lg text-gray-900 dark:text-white">
                      Kyiv, Pechersk District
                      <br />
                      Business Center Horizon
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] lg:h-[500px] border-4 border-amber-200 dark:border-amber-900/30 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-amber-200 dark:border-amber-900/30 py-12 px-6 lg:px-12 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-light tracking-wider text-gray-900 dark:text-white">
              VISTA<span className="font-bold text-amber-600 dark:text-amber-500">HR</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 VistaHR. All rights reserved.
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-sm tracking-wide text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 transition">
                LINKEDIN
              </a>
              <a href="#" className="text-sm tracking-wide text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 transition">
                TWITTER
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
