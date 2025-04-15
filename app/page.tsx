import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Upload, CheckCircle, Star, ArrowUpRight, Building, Phone, Mail } from "lucide-react"
import HeroAnimation from "@/components/hero-animation"
import TestimonialCarousel from "@/components/testimonial-carousel"
import UploadForm from "@/components/upload-form"
import ProcessStep from "@/components/process-step"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/images/pod-stopnicami-logo.png" 
              alt="pod-stopnicami Logo" 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <span className="text-lg font-medium text-slate-900">pod-stopnicami</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#about" className="text-slate-700 hover:text-blue-800 transition-colors">About</a>
            <a href="#process" className="text-slate-700 hover:text-blue-800 transition-colors">Process</a>
            <a href="#pricing" className="text-slate-700 hover:text-blue-800 transition-colors">Pricing</a>
            <a href="#results" className="text-slate-700 hover:text-blue-800 transition-colors">Results</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-800 transition-colors">Contact</a>
          </div>
          <Button className="bg-blue-800 hover:bg-blue-900 text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Rethinking Spaces.<br />
              <span className="text-blue-800">Rebuilding Peace.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-lg">
              We transform school environments to reduce violence through thoughtful design and modern technology integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 text-lg rounded-lg group">
                Start Your Free Preview
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Creating Safer School Environments</h2>
            <p className="text-lg text-slate-700">
              At pod-stopnicami, we believe that thoughtful design of physical spaces can significantly reduce conflict and promote peaceful interactions among students. Our approach combines architectural expertise with cutting-edge technology to create environments that naturally encourage positive behavior.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-50 border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>Spatial Redesign</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We analyze traffic flow, lighting, acoustics, and spatial arrangement to identify and eliminate conflict-prone areas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-50 border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>Technology Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Smart systems that monitor noise levels, provide calming visual cues, and create more structured transitions between activities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-50 border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Our interventions have reduced conflict incidents by an average of 47% in participating schools across Slovenia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How It Works</h2>
            <p className="text-lg text-slate-700">
              Our streamlined process makes it easy to transform your school spaces with minimal disruption to daily activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ProcessStep 
              number={1}
              title="Upload Your Space"
              description="Share photos of your school areas that need improvement."
              icon={<Upload className="h-6 w-6 text-blue-800" />}
            />
            
            <ProcessStep 
              number={2}
              title="AI & Expert Analysis"
              description="Our team combines AI technology with design expertise to analyze problem areas."
              icon={<Star className="h-6 w-6 text-blue-800" />}
            />
            
            <ProcessStep 
              number={3}
              title="Receive Your Redesign"
              description="Get a comprehensive proposal with visualizations and implementation plans."
              icon={<ArrowUpRight className="h-6 w-6 text-blue-800" />}
            />
          </div>
        </div>
      </section>

      {/* Interactive Upload Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">See The Potential</h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Upload a photo of your classroom or hallway to see how it could look after our redesign. Our AI will generate a new version with improved design without drastic architectural changes.
              </p>
            </div>
            
            <UploadForm />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Affordable Solutions</h2>
            <p className="text-lg text-slate-700">
              Choose the plan that fits your school's needs and budget. All options include our expertise and commitment to creating peaceful environments.
            </p>
          </div>
          
          <Tabs defaultValue="monthly" className="max-w-5xl mx-auto">
            <TabsList className="grid w-[400px] max-w-full grid-cols-2 mx-auto mb-8">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">Annual (Save 15%)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="monthly" className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-slate-50 rounded-t-lg pb-6">
                  <CardTitle className="text-xl">Free Preview</CardTitle>
                  <CardDescription className="text-slate-600">Try before you commit</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">€0</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">1 space analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">AI visualization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Basic recommendations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-800 hover:bg-blue-900">Get Started</Button>
                </CardFooter>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute top-0 left-0 right-0 bg-blue-800 text-white text-center py-1 text-sm font-medium rounded-t-lg">
                  Most Popular
                </div>
                <CardHeader className="bg-slate-50 rounded-t-lg pb-6 pt-8">
                  <CardTitle className="text-xl">Design Proposal</CardTitle>
                  <CardDescription className="text-slate-600">Comprehensive solution</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">€499</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">5 space analyses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Detailed AI visualizations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Implementation roadmap</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">2 consultation sessions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-800 hover:bg-blue-900">Choose Plan</Button>
                </CardFooter>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-slate-50 rounded-t-lg pb-6">
                  <CardTitle className="text-xl">Full Consulting</CardTitle>
                  <CardDescription className="text-slate-600">End-to-end implementation</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">€1,499</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Unlimited space analyses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Premium visualizations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Full implementation support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Weekly consultation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Technology integration</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-800 hover:bg-blue-900">Choose Plan</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="annual" className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-slate-50 rounded-t-lg pb-6">
                  <CardTitle className="text-xl">Free Preview</CardTitle>
                  <CardDescription className="text-slate-600">Try before you commit</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">€0</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">1 space analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">AI visualization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Basic recommendations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-800 hover:bg-blue-900">Get Started</Button>
                </CardFooter>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute top-0 left-0 right-0 bg-blue-800 text-white text-center py-1 text-sm font-medium rounded-t-lg">
                  Most Popular
                </div>
                <CardHeader className="bg-slate-50 rounded-t-lg pb-6 pt-8">
                  <CardTitle className="text-xl">Design Proposal</CardTitle>
                  <CardDescription className="text-slate-600">Comprehensive solution</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">€424</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">5 space analyses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Detailed AI visualizations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Implementation roadmap</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">2 consultation sessions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-800 hover:bg-blue-900">Choose Plan</Button>
                </CardFooter>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-slate-50 rounded-t-lg pb-6">
                  <CardTitle className="text-xl">Full Consulting</CardTitle>
                  <CardDescription className="text-slate-600">End-to-end implementation</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">€1,274</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Unlimited space analyses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Premium visualizations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Full implementation support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Weekly consultation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-slate-700">Technology integration</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-800 hover:bg-blue-900">Choose Plan</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials / Results */}
      <section id="results" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What School Leaders Say</h2>
            <p className="text-lg text-slate-700">
              Hear from principals and administrators who have transformed their schools with our help.
            </p>
          </div>
          
          <TestimonialCarousel />
          
          <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="p-6 bg-slate-50 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-blue-800 mb-2">47%</div>
              <p className="text-slate-700">Average reduction in conflict incidents</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-blue-800 mb-2">32</div>
              <p className="text-slate-700">Schools transformed across Slovenia</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-blue-800 mb-2">94%</div>
              <p className="text-slate-700">Client satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-slate-700 mb-8">
                Ready to transform your school environment? Contact us today to discuss how we can help create a more peaceful learning space.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Building className="h-6 w-6 text-blue-800 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">Address</h3>
                    <p className="text-slate-700">Slovenska cesta 15, Ljubljana, Slovenia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-800 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">Email</h3>
                    <p className="text-slate-700">info@pod-stopnicami.si</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-800 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">Phone</h3>
                    <p className="text-slate-700">+386 1 234 5678</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902  4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902


\
