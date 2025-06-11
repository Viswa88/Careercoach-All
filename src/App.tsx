import React, { useState } from 'react';
import { 
  ArrowRight, 
  Users, 
  Award, 
  Briefcase, 
  CheckCircle, 
  Star, 
  TrendingUp,
  Globe,
  Shield,
  Server,
  GitBranch,
  Monitor,
  Cloud,
  Zap,
  GraduationCap,
  Building,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Cpu,
  Hammer,
  Lightbulb,
  Cog,
  Calculator,
  Microscope,
  Rocket,
  Factory,
  Car,
  Home,
  Wifi,
  Battery,
  Settings,
  Target,
  BookOpen,
  Trophy,
  Users2,
  ChevronRight
} from 'lucide-react';

const engineeringStreams = [
  {
    id: 'civil',
    name: 'Civil Engineering',
    icon: Building,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50',
    description: 'Infrastructure, Construction & Urban Planning',
    modules: [
      { name: 'AutoCAD & Design', icon: Calculator, description: 'Technical drawing and computer-aided design' },
      { name: 'Project Management', icon: Target, description: 'Construction project planning and execution' },
      { name: 'Structural Analysis', icon: Building, description: 'Building design and structural engineering' },
      { name: 'Construction Tech', icon: Hammer, description: 'Modern construction methods and materials' },
      { name: 'Urban Planning', icon: Globe, description: 'City planning and infrastructure development' },
      { name: 'Environmental Eng', icon: Shield, description: 'Sustainable construction and green building' }
    ],
    careers: ['Site Engineer', 'Project Manager', 'Structural Engineer', 'Urban Planner', 'Construction Manager'],
    avgSalary: '$75K',
    placement: '92%'
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    icon: Zap,
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50',
    description: 'Power Systems, Electronics & Automation',
    modules: [
      { name: 'Power Systems', icon: Battery, description: 'Electrical power generation and distribution' },
      { name: 'Control Systems', icon: Settings, description: 'Automation and process control' },
      { name: 'Electronics Design', icon: Cpu, description: 'Circuit design and embedded systems' },
      { name: 'Renewable Energy', icon: Lightbulb, description: 'Solar, wind and sustainable energy systems' },
      { name: 'Industrial Automation', icon: Factory, description: 'PLC programming and industrial control' },
      { name: 'Smart Grid Tech', icon: Wifi, description: 'Modern electrical grid and IoT integration' }
    ],
    careers: ['Power Engineer', 'Control Systems Engineer', 'Electronics Designer', 'Automation Engineer', 'Energy Consultant'],
    avgSalary: '$82K',
    placement: '94%'
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    icon: Cog,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    description: 'Manufacturing, Design & Thermal Systems',
    modules: [
      { name: 'CAD/CAM Design', icon: Monitor, description: 'Computer-aided design and manufacturing' },
      { name: 'Manufacturing Tech', icon: Factory, description: 'Modern manufacturing processes and automation' },
      { name: 'Thermal Systems', icon: Zap, description: 'Heat transfer and energy systems' },
      { name: 'Robotics & Automation', icon: Cpu, description: 'Industrial robotics and automated systems' },
      { name: 'Automotive Tech', icon: Car, description: 'Vehicle design and automotive engineering' },
      { name: 'Quality Control', icon: CheckCircle, description: 'Quality assurance and testing methods' }
    ],
    careers: ['Design Engineer', 'Manufacturing Engineer', 'Automotive Engineer', 'Robotics Engineer', 'Quality Engineer'],
    avgSalary: '$78K',
    placement: '91%'
  },
  {
    id: 'computer',
    name: 'Computer Science',
    icon: Monitor,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    description: 'Software Development & Technology',
    modules: [
      { name: 'Full Stack Development', icon: Globe, description: 'Web and mobile application development' },
      { name: 'Data Science & AI', icon: Microscope, description: 'Machine learning and artificial intelligence' },
      { name: 'Cloud Computing', icon: Cloud, description: 'AWS, Azure, and cloud architecture' },
      { name: 'Cybersecurity', icon: Shield, description: 'Information security and ethical hacking' },
      { name: 'DevOps & Automation', icon: GitBranch, description: 'CI/CD and infrastructure automation' },
      { name: 'Mobile Development', icon: Monitor, description: 'iOS and Android app development' }
    ],
    careers: ['Software Engineer', 'Data Scientist', 'Cloud Architect', 'Security Analyst', 'DevOps Engineer'],
    avgSalary: '$95K',
    placement: '96%'
  },
  {
    id: 'electronics',
    name: 'Electronics & Communication',
    icon: Wifi,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50',
    description: 'Communication Systems & Embedded Tech',
    modules: [
      { name: 'Embedded Systems', icon: Cpu, description: 'Microcontroller and IoT development' },
      { name: 'Communication Systems', icon: Wifi, description: 'Wireless and network communication' },
      { name: 'Signal Processing', icon: Monitor, description: 'Digital signal processing and analysis' },
      { name: 'VLSI Design', icon: Microscope, description: 'Chip design and semiconductor technology' },
      { name: '5G & Telecom', icon: Globe, description: 'Next-generation communication networks' },
      { name: 'IoT Development', icon: Settings, description: 'Internet of Things and smart devices' }
    ],
    careers: ['Embedded Engineer', 'Telecom Engineer', 'VLSI Designer', 'IoT Developer', 'RF Engineer'],
    avgSalary: '$85K',
    placement: '93%'
  },
  {
    id: 'aerospace',
    name: 'Aerospace Engineering',
    icon: Rocket,
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-50 to-pink-50',
    description: 'Aviation, Space & Defense Technology',
    modules: [
      { name: 'Aircraft Design', icon: Rocket, description: 'Aerodynamics and aircraft engineering' },
      { name: 'Space Technology', icon: Globe, description: 'Satellite and space mission design' },
      { name: 'Propulsion Systems', icon: Zap, description: 'Jet engines and rocket propulsion' },
      { name: 'Flight Dynamics', icon: Monitor, description: 'Flight control and navigation systems' },
      { name: 'Materials Science', icon: Shield, description: 'Advanced aerospace materials' },
      { name: 'Defense Systems', icon: Target, description: 'Military and defense applications' }
    ],
    careers: ['Aerospace Engineer', 'Flight Test Engineer', 'Propulsion Engineer', 'Systems Engineer', 'Defense Analyst'],
    avgSalary: '$92K',
    placement: '89%'
  }
];

const stats = [
  { value: '94%', label: 'Average Placement Rate', icon: Briefcase },
  { value: '200+', label: 'Industry Partners', icon: Building },
  { value: '15000+', label: 'Successful Engineers', icon: GraduationCap },
  { value: '$83K', label: 'Average Starting Salary', icon: TrendingUp }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Civil Engineer at L&T Construction',
    stream: 'Civil Engineering',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    quote: 'The practical training in AutoCAD and project management helped me land my dream job right after graduation.',
    salary: '₹8.5 LPA'
  },
  {
    name: 'Rahul Patel',
    role: 'Software Engineer at Microsoft',
    stream: 'Computer Science',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    quote: 'The full-stack development program gave me the skills to work on cutting-edge cloud technologies.',
    salary: '₹18 LPA'
  },
  {
    name: 'Anita Kumar',
    role: 'Automation Engineer at Siemens',
    stream: 'Electrical Engineering',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    quote: 'The industrial automation training was exactly what I needed to excel in my current role.',
    salary: '₹12 LPA'
  }
];

function App() {
  const [selectedStream, setSelectedStream] = useState('civil');
  const [activeTab, setActiveTab] = useState('students');

  const currentStream = engineeringStreams.find(stream => stream.id === selectedStream);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Engineering Career Coach</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#programs" className="text-gray-600 hover:text-gray-900 transition-colors">Programs</a>
              <a href="#colleges" className="text-gray-600 hover:text-gray-900 transition-colors">For Colleges</a>
              <a href="#employers" className="text-gray-600 hover:text-gray-900 transition-colors">For Employers</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">ENGINEERING</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                CAREER COACH
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-light">
              Complete Career Guidance for All B.Tech Streams
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Civil • Electrical • Mechanical • Computer Science • Electronics • Aerospace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Explore Your Stream</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View All Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Streams Selection */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Engineering Stream</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized career guidance and training programs tailored for each engineering discipline
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {engineeringStreams.map((stream) => (
              <button
                key={stream.id}
                onClick={() => setSelectedStream(stream.id)}
                className={`group p-6 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-xl hover:-translate-y-2 ${
                  selectedStream === stream.id
                    ? `border-transparent bg-gradient-to-r ${stream.color} text-white shadow-lg`
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    selectedStream === stream.id
                      ? 'bg-white bg-opacity-20'
                      : `bg-gradient-to-r ${stream.bgColor}`
                  }`}>
                    <stream.icon className={`w-6 h-6 transition-colors duration-300 ${
                      selectedStream === stream.id ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      selectedStream === stream.id ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stream.name}
                    </h3>
                  </div>
                </div>
                <p className={`text-sm transition-colors duration-300 ${
                  selectedStream === stream.id ? 'text-white text-opacity-90' : 'text-gray-600'
                }`}>
                  {stream.description}
                </p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-opacity-20">
                  <span className={`text-sm font-medium ${
                    selectedStream === stream.id ? 'text-white' : 'text-gray-500'
                  }`}>
                    Avg. Salary: {stream.avgSalary}
                  </span>
                  <span className={`text-sm font-medium ${
                    selectedStream === stream.id ? 'text-white' : 'text-green-600'
                  }`}>
                    {stream.placement} Placement
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Stream Details */}
          {currentStream && (
            <div className={`bg-gradient-to-r ${currentStream.bgColor} rounded-2xl p-8 md:p-12`}>
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${currentStream.color} rounded-full mb-6`}>
                  <currentStream.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentStream.name} Program</h3>
                <p className="text-xl text-gray-600 mb-8">{currentStream.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentStream.modules.map((module, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${currentStream.color} rounded-lg flex items-center justify-center`}>
                        <module.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{module.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Career Opportunities</h4>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {currentStream.careers.map((career, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className={`w-12 h-12 bg-gradient-to-r ${currentStream.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">{career}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real engineers, real success stories from our programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.stream}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-green-600 font-semibold">{testimonial.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Designed For Every Engineer</h2>
            <p className="text-xl text-gray-600">Tailored programs for different career stages and goals</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('students')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'students'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <GraduationCap className="w-5 h-5 inline mr-2" />
                Students & Fresh Graduates
              </button>
              <button
                onClick={() => setActiveTab('professionals')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'professionals'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Briefcase className="w-5 h-5 inline mr-2" />
                Working Engineers
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12">
            {activeTab === 'students' ? (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Launch Your Engineering Career</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="text-left space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Industry-Ready Skills</h4>
                        <p className="text-gray-600">Bridge the gap between academics and industry requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Hands-on Projects</h4>
                        <p className="text-gray-600">Build impressive portfolio with real-world engineering projects</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Placement Assistance</h4>
                        <p className="text-gray-600">94% placement rate with top engineering companies</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Expert Mentorship</h4>
                        <p className="text-gray-600">Learn from senior engineers and industry professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Flexible Learning</h4>
                        <p className="text-gray-600">Weekend and evening batches for working students</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Professional Certification</h4>
                        <p className="text-gray-600">Industry-recognized certificates to boost your resume</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Advance Your Engineering Career</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="text-left space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Skills Upgrade</h4>
                        <p className="text-gray-600">Stay current with latest technologies and methodologies</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Career Transition</h4>
                        <p className="text-gray-600">Switch to high-growth engineering domains</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Leadership Development</h4>
                        <p className="text-gray-600">Develop technical leadership and management skills</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Salary Growth</h4>
                        <p className="text-gray-600">Average 50-70% salary increase post-training</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Weekend Classes</h4>
                        <p className="text-gray-600">Learn while you work - no career interruption</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Professional Network</h4>
                        <p className="text-gray-600">Connect with senior engineers and industry leaders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* For Colleges Section */}
      <section id="colleges" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner With Engineering Colleges</h2>
              <p className="text-xl text-gray-600 mb-8">
                Enhance your engineering curriculum with industry-relevant training across all B.Tech streams.
              </p>
              
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Stream Curriculum</h3>
                    <p className="text-gray-600">Comprehensive programs for Civil, Electrical, Mechanical, Computer Science, Electronics, and Aerospace engineering.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Faculty Development</h3>
                    <p className="text-gray-600">Train your faculty on latest industry practices and emerging technologies in each engineering domain.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                    <p className="text-gray-600">Boost your college ranking with industry-aligned curriculum and higher placement rates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partnership Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">94% average placement rate across all streams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Higher starting salaries for graduates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Industry-aligned curriculum for all B.Tech streams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Access to 200+ hiring partners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Regular curriculum updates with industry trends</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Marketing and branding support</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto">
                  <span>Schedule Partnership Meeting</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section id="employers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hire Skilled Engineers Across All Domains</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access a diverse pool of industry-trained engineers from Civil, Electrical, Mechanical, Computer Science, Electronics, and Aerospace domains.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Domain Expertise</h3>
              <p className="text-gray-600">Engineers trained across all major B.Tech streams with specialized industry skills.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Immediate Impact</h3>
              <p className="text-gray-600">Pre-trained engineers ready to contribute from day one with practical experience.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Diverse Talent Pool</h3>
              <p className="text-gray-600">15,000+ engineers across all domains with proven track record of success.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Engineering Talent by Domain</h3>
              <p className="text-xl text-gray-600">Choose from our specialized talent pools</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineeringStreams.map((stream, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${stream.color} rounded-lg flex items-center justify-center`}>
                      <stream.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{stream.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{stream.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-600 font-medium">{stream.placement} Placed</span>
                    <span className="text-blue-600 font-medium">Avg: {stream.avgSalary}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
                <span>Start Hiring Engineers</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Engineering Careers?</h2>
            <p className="text-xl text-gray-300">Connect with us to explore programs across all engineering streams</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 98765 43210</p>
              <p className="text-gray-300">Mon-Sat 9AM-7PM IST</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">info@engineeringcareercoach.com</p>
              <p className="text-gray-300">partnerships@engineeringcareercoach.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">456 Engineering Hub</p>
              <p className="text-gray-300">Bangalore, Karnataka 560001</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Engineering Career Coach</span>
            </div>
            <p className="mb-4">Empowering engineers across all B.Tech streams with industry-ready skills</p>
            <div className="flex justify-center space-x-6 mb-4 text-sm">
              <span>Civil Engineering</span>
              <span>•</span>
              <span>Electrical Engineering</span>
              <span>•</span>
              <span>Mechanical Engineering</span>
              <span>•</span>
              <span>Computer Science</span>
              <span>•</span>
              <span>Electronics & Communication</span>
              <span>•</span>
              <span>Aerospace Engineering</span>
            </div>
            <p className="text-sm text-gray-400">© 2025 Engineering Career Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;