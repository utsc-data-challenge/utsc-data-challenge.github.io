"use client"
import { useRouter } from "next/navigation"
import type React from "react"
import Image from "next/image"
import { useState } from "react"

import {
  Trophy,
  Users,
  Heart,
  Star,
  Award,
  Camera,
  Share2,
  ChevronRight,
  Sparkles,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  const router = useRouter()
  const [showShareModal, setShowShareModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const shareLink = "utsc-data-challenge.github.io"

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = event.target.value
    router.push(`/${year}`)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#003A79] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Image 
                  src="/Logo.png" 
                  alt="UTSC Logo" 
                  width={24} 
                  height={24}
                  onError={(e) => {
                    console.error('Error loading logo:', e);
                    e.currentTarget.src = '/public/placeholder.svg';
                  }}
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">UTSC</h1>
                <p className="text-blue-200 text-sm">SDG Data Challenge</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection("introduction")} className="hover:text-blue-200 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("winners")} className="hover:text-blue-200 transition-colors">
                Winners
              </button>
              <button onClick={() => scrollToSection("gallery")} className="hover:text-blue-200 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection("team")} className="hover:text-blue-200 transition-colors">
                Volunteers
              </button>
              <button onClick={() => scrollToSection("sponsors")} className="hover:text-blue-200 transition-colors">
                Sponsors
              </button>
              
            </nav>
            <div className="flex space-x-2">
              <select
                className="bg-white text-[#003A79] px-3 py-1 rounded text-sm"
                value="2025"
                onChange={handleYearChange}
              >
                <option value="2025">2025</option>
              </select>
              <Button className="bg-white text-[#003A79] hover:bg-blue-50" onClick={() => setShowShareModal(true)}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xs text-center relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowShareModal(false)}>&times;</button>
            <h2 className="text-lg font-bold mb-4 text-[#003A79]">Share this event</h2>
            <div className="bg-gray-100 rounded px-3 py-2 mb-4 text-sm break-all select-all">{shareLink}</div>
            <Button onClick={handleCopy} className="w-full mb-2">
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003A79] to-[#0060AC] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6 gap-4 flex-wrap">
            <div className="bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
              <Image src="/sdg.png" alt="Sustainable Development Goals" width={120} height={80} style={{objectFit: 'contain'}} />
            </div>
            <div className="bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
              <Image src="/uoft.png" alt="University of Toronto Scarborough" width={180} height={80} style={{objectFit: 'contain'}} />
            </div>
            <div className="bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
              <Image src="/utsc60.png" alt="UTSC 60th Anniversary" width={90} height={90} style={{objectFit: 'contain'}} />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">UTSC SDG Data Challenge 2025</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Celebrating 16 interdisciplinary teams and 57 students who analyzed UN Sustainable Development Goals data to
            address global challenges and create evidence-based solutions for a sustainable future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold">57</div>
              <div className="text-blue-200">Students Participated</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold">16</div>
              <div className="text-blue-200">Interdisciplinary Teams</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold">3</div>
              <div className="text-blue-200">UofT Campuses</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold">17</div>
              <div className="text-blue-200">UN SDGs Analyzed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto overflow-hidden mb-8">
            <div className="h-96 bg-gradient-to-br from-[#003A79] to-[#0060AC] flex items-center justify-center relative overflow-hidden">
              <Image src="/Group.png" alt="Group Photo of All 57 Participants" fill style={{objectFit: 'cover'}} />
            </div>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003A79] mb-4">About the Challenge</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bringing together diverse minds to tackle global sustainability challenges through data analysis
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The UTSC SDG Data Challenge brought together <strong>16 interdisciplinary teams</strong>, comprising{" "}
                  <strong>57 students</strong> from across the University of Toronto&apos;s three campuses: St. George,
                  Mississauga, and Scarborough. Each team was intentionally composed of students from different academic
                  years and disciplines. While half of the participants were enrolled in Statistics and Data Science,
                  the other half represented a wide range of fields, including Computer Science, Life Sciences, and
                  Political Science.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Throughout the challenge, students analyzed data related to the{" "}
                  <strong>United Nations Sustainable Development Goals (SDGs)</strong>. The initiative aimed to enhance
                  their data analytics skills while empowering them to craft informed, evidence-based arguments
                  addressing global challenges. Participants explored SDG progress since 2015, identified gaps in
                  achieving the 2030 targets, and told compelling stories through data analysis and visualization.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The organizers emphasized that the <strong>diversity of participants</strong> was instrumental in
                  fostering comprehensive and innovative approaches to analyzing SDG progress—a central goal of the
                  competition. The event highlighted the importance of sustainability and a just future, as students
                  from diverse academic backgrounds collaborated to address global challenges. Participants had the
                  flexibility to define their own research questions, focusing on any of the 17 SDGs or their
                  combinations at global or national levels, and were encouraged to incorporate external data to provide
                  a more nuanced context for their analyses.
                </p>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#003A79]">
                    <Target className="mr-2 h-5 w-5" />
                    Focus Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• UN Sustainable Development Goals</li>
                    <li>• SDG progress since 2015</li>
                    <li>• 2030 target achievement gaps</li>
                    <li>• Global and national level analysis</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#003A79]">
                    <Users className="mr-2 h-5 w-5" />
                    Disciplines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Statistics & Data Science</li>
                    <li>• Computer Science</li>
                    <li>• Life Sciences</li>
                    <li>• Political Science</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#003A79]">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Skills Developed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Data analytics</li>
                    <li>• Evidence-based arguments</li>
                    <li>• Data visualization</li>
                    <li>• Interdisciplinary collaboration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Winners Section */}
      <section id="winners" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003A79] mb-4">🏆 Award Winners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              After two days of intensive work, we are thrilled to announce the award-winning teams and their members
            </p>
          </div>

          {/* Main Winners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
            <Card className="text-center border-4 border-blue-400 relative overflow-hidden transform hover:scale-105 transition-transform">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3 font-bold text-xl">
                🥇 BEST IN SHOW
              </div>
              <CardHeader className="pt-16">
                <Trophy className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-[#003A79]"> Analysis of GDP and GHG Emissions </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold"> <b>Sustainable Solutions Squad:</b> Yousef Ibrahim, <br></br> Veer Kapadia, Kole Robertson, Min Chau Nguyen</p>
                  
                </div>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/Team1.png" alt="Best in Show Winners" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-4 border-blue-400 relative overflow-hidden transform hover:scale-105 transition-transform">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3 font-bold text-xl">
                🔍 BEST INSIGHT
              </div>
              <CardHeader className="pt-16">
                <Star className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-[#003A79]">Maternal Analytics & Monitoring Alliance (MAMA)</CardTitle>
            
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold"> <b>Spherical:</b> Joshua Antonio Crisologo, Karissa Cruz, <br></br> Aaron Fossi Mbah, Sasha Kodytuakku </p>
                  
                </div>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/Team2.png" alt="Best Insight Winners" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-4 border-blue-400 relative overflow-hidden transform hover:scale-105 transition-transform">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3 font-bold text-xl">
                📊 BEST VISUALIZATION
              </div>
              <CardHeader className="pt-16">
                <Camera className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-[#003A79]">Sudan Under Strain: Setbacks in Child Health
                Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold"> <b>Racoons: </b> Andy Feng, Yingke He, Jesse Xu, Kevin You </p>
                </div>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/Team3.png" alt="Best Visualization Winners" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-4 border-blue-400 relative overflow-hidden transform hover:scale-105 transition-transform">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3 font-bold text-xl">
                👥 PARTICIPANTS CHOICE
              </div>
              <CardHeader className="pt-16">
                <Heart className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-[#003A79]">How to Decrease Indonesia&apos;s 2030 Tobacco Consumption Rate While Sustaining Its Economic Growth</CardTitle>
                <CardDescription className="text-lg font-semibold"></CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-sm"> <b>Kecap Manis:</b> Muhammad Enrizky Brillian, Frans Budiman, <br></br>Bomin Kim, Christopher Nathanael</p>
                </div>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/Team4.png" alt="Participants Choice Winners" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#003A79] text-center mb-12">
            <Camera className="inline-block mr-3 h-10 w-10" />
            Photo Gallery
          </h2>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

              {/* Student Work */}
              <Card className="overflow-hidden border-4 border-blue-400">
                <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3">
                  <CardTitle className="text-center font-bold"> Participants at Work </CardTitle>
                </CardHeader>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/student_work_1.png" alt="Students Working 1" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </Card>

              {/* Student Work */}
              <Card className="overflow-hidden border-4 border-blue-400">
                <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3">
                  <CardTitle className="text-center font-bold"> Participants at Work </CardTitle>
                </CardHeader>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/student_work_3.png" alt="Students Working 2" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </Card>


              {/* Final Presentations */}
              <Card className="overflow-hidden border-4 border-blue-400">
                <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3">
                  <CardTitle className="text-center font-bold"> Final Presentations </CardTitle>
                </CardHeader>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/class.png" alt="Classroom" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </Card>


              {/* Judges' Panel */}
              <Card className="overflow-hidden border-4 border-blue-400">
                <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3">
                  <CardTitle className="text-center font-bold"> Judging Panel </CardTitle>
                </CardHeader>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/panel.png" alt="Judges Panel" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </Card>

              {/* Team Presenting */}
              <Card className="overflow-hidden border-4 border-blue-400">
                <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3">
                  <CardTitle className="text-center font-bold"> Team Presenting </CardTitle>
                </CardHeader>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/group_pres_1.png" alt="Group Pres 1" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </Card>
              

              {/* Team Presenting */}
              <Card className="overflow-hidden border-4 border-blue-400">
                <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3">
                  <CardTitle className="text-center font-bold"> Team Presenting </CardTitle>
                </CardHeader>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/group_pres_4.png" alt="Group Pres 2" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </Card>
              
              {/* Organizers & Volunteers */}
              <Card className="overflow-hidden border-4 border-blue-400">
                <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3">
                  <CardTitle className="text-center font-bold"> Organizers & Volunteers </CardTitle>
                </CardHeader>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/orgvol.png" alt="Group Pres 1" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </Card>
              

              {/* Group Photo */}
              <Card className="overflow-hidden border-4 border-blue-400">
                <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3">
                  <CardTitle className="text-center font-bold"> Group Photo </CardTitle>
                </CardHeader>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <Image src="/group_photo.png" alt="Group Pres 2" fill style={{objectFit: 'cover'}} className="absolute inset-0" />
                </div>
              </Card>
              

            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Mentors, Judges, Volunteers */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#003A79] text-center mb-12">Mentors, Judges, and Volunteers</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The challenge included mentorship from experts who provided valuable guidance and support to the teams.
            In particular, we want to acknowledge <b>David Kwasny</b> and <b>Elizabeth O'Brien</b> from UTSC Library for 
            delivering an insightful pre-event workshop on analyzing open SDG data with Power BI.
            We also had ten dedicated mentors—mostly graduate students—who played a key role throughout the event. 
          </p>

          <div className="max-w-3xl mx-auto overflow-hidden mb-8">
            <div className="h-80 bg-gradient-to-br from-[#0060AC] to-[#003A79] flex items-center justify-center relative overflow-hidden">
              <Image 
                src="/Volunteers.png" 
                alt="Volunteers" 
                fill 
                style={{objectFit: 'cover'}}
                
                priority
                quality={75}
                loading="eager"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mentors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#003A79] flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Mentors
                </CardTitle>
                <CardDescription>10 dedicated graduate student mentors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Michal Cowan</li>
                  <li>• Nnenna Asidianya</li>
                  <li>• Yi Chen</li>
                  <li>• Md Islam</li>
                  <li>• Qiaona Zong</li>
                  <li>• Jiayue Huang</li>
                  <li>• Yunrong Liu</li>
                  <li>• Kevin Li</li>
                  <li>• Issey Sone</li>
                  <li>• Shaofeng Kang</li>
                </ul>
              </CardContent>
            </Card>

            {/* Judges */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#003A79] flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Judges
                </CardTitle>
                <CardDescription>Diverse panel of expert faculty</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    • <strong>Ethan Fosse</strong> - Assistant Professor, Sociology
                  </li>
                  <li>
                    • <strong>Renan Levine</strong> - Associate Professor, Political Science
                  </li>
                  <li>
                    • <strong>Nicholas Spence</strong> - Assistant Professor, Health & Society
                  </li>
                  <li>
                    • <strong>Tanzina Mohsin</strong> - Associate Professor, Physical & Environmental Sciences
                  </li>
                  <li>
                    • <strong>Cendri Hutcherson</strong> - Associate Professor, Psychology
                  </li>
                  <li>
                    • <strong>Valerie Shiu</strong> - SDG@UofT Representative
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Volunteers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#003A79] flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Volunteers
                </CardTitle>
                <CardDescription>9 outstanding volunteer supporters</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    • <strong>Issey Sone</strong> (Lead)
                  </li>
                  <li>• Aseel Magzoub</li>
                  <li>• Jingchao Zhu</li>
                  <li>• Dorothy Nediak</li>
                  <li>• Stephen Yu</li>
                  <li>• Sophie Liu</li>
                  <li>• Kevin Li</li>
                  <li>• Shawn Jiang</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  This event would not have been possible without their time, effort, and dedication.
                </p>
              </CardContent>
            </Card>
          </div>
         
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#003A79] text-center mb-12">
            <Heart className="inline-block mr-3 h-10 w-10 text-red-500" />
            Sponsors
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We gratefully acknowledge the generous support of the following sponsors, whose contributions made this
            event possible
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-l-4 border-l-[#003A79]">
            <a href="https://www.utsc.utoronto.ca/cms/">
            <CardContent className="p-6">
                <h3 className="font-semibold text-[#003A79] mb-2">
                  Department of Computer & Mathematical Sciences, UTSC
                </h3>
                <div className="bg-white rounded-xl p-3 shadow flex items-center justify-center mt-4">
                  
                  <Image src="/Sponsor1.png" alt="Sponsor 1" width={180} height={100} style={{objectFit: 'contain'}} />
            
                </div>
              </CardContent>
              </a>
              </Card>

            <Card className="text-center border-l-4 border-l-[#0060AC]">
            <a href="https://www.utsc.utoronto.ca/sociology/">
            <CardContent className="p-6">
                <h3 className="font-semibold text-[#003A79] mb-2">Department of Sociology, UTSC</h3>
                <div className="bg-white rounded-xl p-3 shadow flex items-center justify-center mt-4">
                  <Image src="/Sponsor2.png" alt="Sponsor 2" width={180} height={100} style={{objectFit: 'contain'}} />
                </div>
              </CardContent>
              </a>
            </Card>

            <Card className="text-center border-l-4 border-l-[#003A79]">
            <a href="https://utsc.library.utoronto.ca/">
            <CardContent className="p-6">
                <h3 className="font-semibold text-[#003A79] mb-2">UTSC Library</h3>
                <div className="bg-white rounded-xl p-3 shadow flex items-center justify-center mt-4">
                  <Image src="/Sponsor3.png" alt="Sponsor 3" width={180} height={100} style={{objectFit: 'contain'}} />
                </div>
              </CardContent></a>
            </Card>

            <Card className="text-center border-l-4 border-l-[#0060AC]">
            <a href="https://www.utsc.utoronto.ca/polisci/">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#003A79] mb-2">Department of Political Science, UTSC</h3>
                <div className="bg-white rounded-xl p-3 shadow flex items-center justify-center mt-4">
                  <Image src="/Sponsor4.png" alt="Sponsor 4" width={180} height={100} style={{objectFit: 'contain'}} />
                </div>
              </CardContent></a>
            </Card>

            <Card className="text-center border-l-4 border-l-[#003A79]">
              <a href="https://sdg.utoronto.ca/">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#003A79] mb-2">SDGs @UofT </h3>
                <div className="bg-white rounded-xl p-3 shadow flex items-center justify-center mt-4">
                  <Image src="/Sponsor5.png" alt="Sponsor 5" width={180} height={100} style={{objectFit: 'contain'}} />
                </div>
              </CardContent></a>
            </Card>

            <Card className="text-center border-l-4 border-l-[#0060AC]">
              <a href="https://datasciences.utoronto.ca/">
                <CardContent className="p-6">
                <h3 className="font-semibold text-[#003A79] mb-2">
                  Data Sciences Institute
                </h3>
                <div className="bg-white rounded-xl p-3 shadow flex items-center justify-center mt-4">
                  <Image src="/Sponsor6.png" alt="Sponsor 6" width={180} height={100} style={{objectFit: 'contain'}} />
                </div>
                </CardContent></a>
            </Card>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#003A79] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <Separator className="my-8 bg-blue-800" />
          <p className="text-blue-200">
            &copy; 2025 University of Toronto Scarborough. All rights reserved. 
          </p>
        </div>
      </footer>
    </div>
  )
}
