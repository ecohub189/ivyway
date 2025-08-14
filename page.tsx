import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, TrendingUp, Heart, BookOpen } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About IvyWay</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Empowering students and families to achieve their educational dreams through expert guidance and
              personalized support
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            IvyWay is dedicated to empowering K-8 students and their families by providing comprehensive educational
            consulting services that guide them toward academic success. We believe every student deserves access to
            exceptional educational opportunities, and we're committed to making that vision a reality.
          </p>
          <div className="bg-emerald-50 p-8 rounded-lg">
            <p className="text-lg text-emerald-800 font-medium italic">
              "We don't just help students get into great schools – we help them discover their potential and develop
              the skills they need to thrive in any academic environment."
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  IvyWay began as Project Engage, a grassroots initiative founded by educators who recognized the need
                  for personalized, expert guidance in the increasingly competitive landscape of private school
                  admissions and academic enrichment.
                </p>
                <p>
                  What started as a small tutoring program has evolved into a comprehensive educational consulting
                  service that has helped over 1,000 students achieve their academic goals. Our founders, all
                  experienced educators from top institutions, saw firsthand how the right guidance could transform a
                  student's educational trajectory.
                </p>
                <p>
                  Today, IvyWay stands as a trusted partner for families seeking excellence in education. We've
                  maintained our commitment to personalized attention while expanding our services to meet the diverse
                  needs of modern students and families.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/about-story-classroom.png" alt="Students in classroom" className="rounded-lg shadow-md" />
              <img
                src="/about-story-consultation.png"
                alt="Consultation session"
                className="rounded-lg shadow-md mt-8"
              />
              <img src="/about-story-success.png" alt="Student success" className="rounded-lg shadow-md -mt-8" />
              <img src="/about-story-team.png" alt="IvyWay team" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-emerald-100 text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-emerald-700 mx-auto mb-2" />
                <CardTitle className="text-emerald-700">Student-Centered Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Every decision we make is guided by what's best for our students. We believe in nurturing individual
                  strengths and addressing unique challenges with personalized solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-emerald-700 mx-auto mb-2" />
                <CardTitle className="text-emerald-700">Excellence in Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We maintain the highest standards in everything we do, from our curriculum development to our
                  instructor selection, ensuring exceptional educational experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-700 mx-auto mb-2" />
                <CardTitle className="text-emerald-700">Family Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We work closely with families as partners in the educational journey, providing transparent
                  communication and collaborative planning every step of the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What Sets Us Apart</h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-full p-2 mr-4 mt-1">
                <Award className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Proven Track Record</h3>
                <p className="text-slate-600">
                  With a 95% success rate in private school admissions and consistently high test score improvements,
                  our results speak for themselves. Our students regularly gain admission to their top-choice schools.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-full p-2 mr-4 mt-1">
                <BookOpen className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Comprehensive Services</h3>
                <p className="text-slate-600">
                  From private school consulting to enrichment classes, test preparation to summer program guidance, we
                  offer a complete suite of services under one roof, ensuring continuity and consistency.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-full p-2 mr-4 mt-1">
                <Users className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Expert Team</h3>
                <p className="text-slate-600">
                  Our instructors and consultants hold advanced degrees from top universities and bring real-world
                  experience from prestigious educational institutions, ensuring the highest quality guidance.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-full p-2 mr-4 mt-1">
                <TrendingUp className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Personalized Approach</h3>
                <p className="text-slate-600">
                  We recognize that every student is unique. Our personalized approach ensures that each student
                  receives tailored guidance that aligns with their individual strengths, interests, and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Success by the Numbers</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-emerald-700 mb-2">1000+</div>
              <div className="text-slate-600">Students Served</div>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-emerald-700 mb-2">95%</div>
              <div className="text-slate-600">Admission Success Rate</div>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-emerald-700 mb-2">250+</div>
              <div className="text-slate-600">Average Score Increase</div>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-emerald-700 mb-2">50+</div>
              <div className="text-slate-600">Partner Schools</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join the hundreds of families who have trusted IvyWay to guide their educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-emerald-600 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
