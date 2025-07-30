"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Satellite,
  Leaf,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Mail,
  MapPin,
  Building,
  Factory,
  Waves,
  Mountain,
  Droplets,
  Sprout,
  AlertTriangle,
  TrendingUp,
  Microscope,
  Camera,
  Database,
} from "lucide-react"

export default function ViridiaTechProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "capabilities", "greenalytics", "team", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const stats = [
    { label: "Satellite Data Points", value: "1M+", icon: Satellite },
    { label: "Years of R&D", value: "5+", icon: Database },
    { label: "Countries", value: "2", icon: Globe },
    { label: "AI Models Deployed", value: "15+", icon: BarChart3 },
  ]

  const coreCapabilities = [
    {
      icon: Satellite,
      title: "Satellite Data Processing",
      description: "Advanced processing of multi-spectral satellite imagery with proprietary data fusion algorithms.",
    },
    {
      icon: BarChart3,
      title: "AI Analytics Engine",
      description: "Machine learning models trained on massive datasets for pattern recognition and prediction.",
    },
    {
      icon: Shield,
      title: "Real-time Monitoring",
      description: "Continuous monitoring systems with automated alert generation and anomaly detection.",
    },
    {
      icon: Zap,
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture designed to process petabytes of satellite data efficiently.",
    },
  ]

  const industryApplications = [
    {
      icon: Leaf,
      title: "Agriculture",
      description: "Precision farming through crop monitoring, yield prediction, and resource optimization.",
      product: "Greenalytics",
      status: "Live",
    },
    {
      icon: Waves,
      title: "Environmental Monitoring",
      description: "Track environmental changes, pollution levels, and ecosystem health.",
      product: "Coming Soon",
      status: "Development",
    },
    {
      icon: Mountain,
      title: "Natural Resources",
      description: "Monitor mining operations, forest management, and land use changes.",
      product: "Planned",
      status: "Research",
    },
    {
      icon: Factory,
      title: "Infrastructure",
      description: "Asset monitoring, construction progress tracking, and urban planning support.",
      product: "Planned",
      status: "Research",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="/images/viridia-logo.svg"
                alt="Viridia Tech"
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  e.currentTarget.nextElementSibling.style.display = "block"
                }}
              />
              <div className="hidden font-bold text-xl text-slate-800">VIRIDIA TECH</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Capabilities", "Greenalytics", "Team", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["About", "Capabilities", "Greenalytics", "Team", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-blue-700 border-blue-200">
              Satellite-Enabled Analytics Company
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              Intelligence.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                From Space.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Viridia Tech transforms satellite data into actionable intelligence across industries. Our proprietary AI
              and data fusion technology unlock insights that drive better decisions and optimize operations at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => scrollToSection("capabilities")}
              >
                Explore Our Technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("greenalytics")}>
                See Greenalytics in Action
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pioneering Satellite Intelligence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're building the future of data-driven decision making by making satellite intelligence accessible,
              actionable, and affordable across industries that need to monitor and optimize large-scale operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 mb-6">
                At Viridia Tech, we believe that satellite data holds the key to solving some of the world's most
                pressing challenges. From climate change to food security, from resource management to infrastructure
                monitoring - the view from space provides unparalleled insights.
              </p>
              <p className="text-lg text-slate-600">
                Our proprietary technology stack transforms raw satellite imagery into precise, actionable intelligence
                that empowers organizations to make better decisions, optimize resources, and drive sustainable growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Why Satellite Intelligence?</h4>
              <div className="space-y-4">
                {[
                  { label: "Global Coverage", value: "Monitor anywhere on Earth" },
                  { label: "Consistent Data", value: "Regular, reliable observations" },
                  { label: "Historical Archive", value: "Years of historical data" },
                  { label: "Cost Effective", value: "Scale without physical presence" },
                  { label: "Objective Insights", value: "Unbiased, data-driven analysis" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0"
                  >
                    <span className="font-medium text-slate-900">{item.label}</span>
                    <span className="text-sm text-slate-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industry Applications Preview - This section remains commented out as per previous instructions */}
          {/*
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Industries We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryApplications.map((industry, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden ${industry.status === "Live" ? "border-green-200 bg-green-50/30" : "border-slate-200"}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <industry.icon
                        className={`h-8 w-8 ${industry.status === "Live" ? "text-green-600" : "text-blue-600"}`}
                      />
                      <Badge
                        variant={industry.status === "Live" ? "default" : "secondary"}
                        className={industry.status === "Live" ? "bg-green-600" : ""}
                      >
                        {industry.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-3">{industry.description}</p>
                    <div className="text-sm font-medium text-slate-900">{industry.product}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section id="capabilities" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Technology Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proprietary technology stack combines cutting-edge satellite data processing with advanced AI to
              deliver unparalleled insights across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {coreCapabilities.map((capability, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <capability.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{capability.title}</h3>
                    <p className="text-slate-600">{capability.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Technical Differentiators */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8 lg:p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Technical Edge</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">30,000+</div>
                <div className="text-lg font-semibold mb-2">Acres of Labeled Data</div>
                <div className="text-blue-200 text-sm">Proprietary training datasets from real-world operations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3m</div>
                <div className="text-lg font-semibold mb-2">Daily Resolution</div>
                <div className="text-blue-200 text-sm">High-resolution imagery with cloud-penetrating data fusion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-lg font-semibold mb-2">Uptime Guarantee</div>
                <div className="text-blue-200 text-sm">Enterprise-grade reliability and scalability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Greenalytics Section */}
      <section id="greenalytics" className="py-20 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600">Our Flagship Product</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Greenalytics: Precision Agriculture Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our first vertical application of Viridia Tech's satellite intelligence platform, specifically designed
              for precision agriculture and sustainable farming practices.
            </p>
          </div>

          <Card className="overflow-hidden mb-12">
            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardTitle className="text-2xl">Transforming Agriculture with Satellite Intelligence</CardTitle>
              <CardDescription className="text-green-100">
                Comprehensive satellite and AI-driven analytics for precision agriculture
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="features">Features & Benefits</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing Tiers</TabsTrigger>
                  <TabsTrigger value="results">Proven Results</TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Irrigation Forecasting", desc: "10-15% water/energy savings", icon: Droplets },
                      { title: "Input Optimization", desc: "Up to $120 savings per acre", icon: Sprout },
                      {
                        title: "Early Warning System",
                        desc: "Detect issues before visible symptoms",
                        icon: AlertTriangle,
                      },
                      { title: "Yield Prediction", desc: "83% accuracy up to 2 months ahead", icon: TrendingUp },
                      { title: "Disease Monitoring", desc: "AI-powered pathogen detection", icon: Microscope },
                      { title: "Daily Imagery", desc: "3m resolution with cloud penetration", icon: Camera },
                    ].map((item, index) => (
                      <div key={index} className="p-4 border border-green-200 rounded-lg bg-green-50/50">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                          <item.icon className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="pricing" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Basic",
                        price: "$2/acre/year",
                        features: ["10m imagery", "Weekly reports", "Vegetation monitoring", "Basic alerts"],
                      },
                      {
                        name: "Complete",
                        price: "$10/acre/year",
                        features: ["3m daily imagery", "Evapotranspiration", "Advanced analytics", "Priority support"],
                        popular: true,
                      },
                      {
                        name: "Specialized",
                        price: "$16/acre/year",
                        features: ["Disease monitoring", "Yield prediction", "Soil carbon tracking", "Custom models"],
                      },
                    ].map((tier, index) => (
                      <Card key={index} className={`relative ${tier.popular ? "border-green-500 border-2" : ""}`}>
                        {tier.popular && (
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600">
                            Most Popular
                          </Badge>
                        )}
                        <CardHeader>
                          <CardTitle>{tier.name}</CardTitle>
                          <div className="text-2xl font-bold text-green-600">{tier.price}</div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {tier.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="results" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6 border-green-200">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="font-bold text-blue-600">P</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">PepsiCo Egypt</h4>
                          <p className="text-sm text-slate-600">Supply Chain Optimization</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2">83%</div>
                      <p className="text-slate-600">
                        Yield prediction accuracy 2 months before harvest, enabling better supply chain planning
                      </p>
                    </Card>

                    <Card className="p-6 border-green-200">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="font-bold text-green-600">E</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">El Boghdadeya Group</h4>
                          <p className="text-sm text-slate-600">Multi-farm Management</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2">15%</div>
                      <p className="text-slate-600">
                        Nitrogen savings through optimized fertilizer application and early issue detection
                      </p>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a href="https://greenalyticseg.com" target="_blank" rel="noopener noreferrer">
                Learn More About Greenalytics
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Total Market Opportunity Section */}
      <section id="market-opportunity" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 lg:p-12 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Total Market Opportunity</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$40B</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Global Satellite Analytics</div>
                <div className="text-slate-600 text-sm">Total addressable market across all industries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$950M</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">MENA AgriTech</div>
                <div className="text-slate-600 text-sm">Our current focus market with Greenalytics</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">$15B+</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Adjacent Markets</div>
                <div className="text-slate-600 text-sm">Environmental, infrastructure, and resource monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Expert Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our founding team combines deep domain expertise with cutting-edge technology and proven business
              execution capabilities across satellite technology and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Omar El Boghdady",
                role: "CEO & Co-Founder",
                education: "BSc Computer Science & Statistics, University of Toronto",
                experience: "5 years in agricultural sales, $1.2M revenue generated at EBG & HSBC Canada",
                image: "/images/omar-ceo.png",
              },
              {
                name: "Mohamed Elsawy",
                role: "CDO & Co-Founder",
                education: "BSc Computer Engineering, American University in Cairo",
                experience: "5 years in Data Science at IBM, Dell Technologies, Central Bank of Egypt, PwC",
                image: "/images/mohamed-cdo.jpeg",
              },
              {
                name: "Marwan El Toukhy",
                role: "CTO & Co-Founder",
                education: "BSc Computer Engineering, AUC & Virginia Tech",
                experience: "5 years in Silicon Valley hardware design and international sales at Efabless",
                image: "/images/marwan-cto.jpeg",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 mb-2">{member.education}</p>
                  <p className="text-sm text-slate-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Whether you're an investor, enterprise client, or potential partner, join us in revolutionizing how the
              world uses satellite intelligence to solve complex challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">For Investors</h3>
                <p className="text-blue-100 text-sm">
                  We're currently raising our seed round. For a full company profile with detailed traction and growth
                  projections, please reach out to us via email.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Building className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">For Enterprises</h3>
                <p className="text-blue-100 text-sm">
                  Discover how satellite intelligence can transform your operations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">For Partners</h3>
                <p className="text-blue-100 text-sm">Explore integration opportunities and strategic collaborations</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@greenalyticseg.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="/images/viridia-logo.svg"
                alt="Viridia Tech"
                className="h-8 w-auto brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  e.currentTarget.nextElementSibling.style.display = "block"
                }}
              />
              <div className="hidden font-bold text-lg">VIRIDIA TECH</div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">© 2024 Viridia Tech. All rights reserved. | Cairo, Egypt</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
