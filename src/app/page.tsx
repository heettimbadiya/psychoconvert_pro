"use client"
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import AOSProvider from '@/components/AOSProvider'

type IndustryKey = 'manufacturing' | 'realestate' | 'consulting' | 'b2b'

const INDUSTRY_STATS: Record<IndustryKey, { leads: number; rate: string; customers: number; lost: string }> = {
  manufacturing: { leads: 150, rate: '3.2%', customers: 5, lost: '$47,500' },
  realestate: { leads: 200, rate: '4.1%', customers: 8, lost: '$62,000' },
  consulting: { leads: 100, rate: '2.8%', customers: 3, lost: '$35,000' },
  b2b: { leads: 250, rate: '3.5%', customers: 9, lost: '$78,000' },
}

export default function HomePage() {
  const [mobileOpen] = useState(false)
  const [industry, setIndustry] = useState<IndustryKey>('manufacturing')
  const stats = INDUSTRY_STATS[industry]

  const [slots, setSlots] = useState(12)
  useEffect(() => {
    const id = setInterval(() => setSlots((s) => (s > 3 ? s - 1 : s)), 30000)
    return () => clearInterval(id)
  }, [])

  const [formStep, setFormStep] = useState(1)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const canSubmit = useMemo(() => Boolean(selectedTime), [selectedTime])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Thank you! Your consultation has been booked. You will receive a confirmation email shortly with all the details.')
    setSlots((s) => Math.max(0, s - 1))
  }

  return (
    <main>
      <AOSProvider />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-primary-200 z-50" data-aos="fade-down" data-aos-duration="700" data-aos-once="false">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center" data-aos="fade-right" data-aos-delay="100" data-aos-once="false">
              <svg className="w-8 h-8 text-accent mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-xl font-bold text-primary">PsychoConvert Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solution" className="text-primary hover:text-accent transition-smooth" data-aos="fade-down" data-aos-delay="150" data-aos-once="false">Solution</a>
              <a href="#process" className="text-primary hover:text-accent transition-smooth" data-aos="fade-down" data-aos-delay="200" data-aos-once="false">Process</a>
              <a href="#industries" className="text-primary hover:text-accent transition-smooth" data-aos="fade-down" data-aos-delay="250" data-aos-once="false">Industries</a>
              <a href="#testimonials" className="text-primary hover:text-accent transition-smooth" data-aos="fade-down" data-aos-delay="300" data-aos-once="false">Results</a>
              <a href="#demo" className="btn-primary" data-aos="zoom-in" data-aos-delay="350" data-aos-once="false">Book Demo</a>
            </div>
            <button className="md:hidden p-2" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="parallax-hero flex items-center justify-center relative overflow-hidden" data-aos-once="false">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">
          <div className="mb-8">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6" data-aos="zoom-in" data-aos-delay="100" data-aos-once="false">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 urgency-pulse"></span>
              Only {slots} consultation slots remaining this month
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="150" data-aos-once="false">
              What If You Could Close <span className="text-accent">10%–25%</span>
              <br />Instead of Just <span className="text-warning">2%–5%</span>?
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="250" data-aos-once="false">
              Psychology-Based System Influences All 3 Parts of Customer's Brain for Maximum Impact
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto" data-aos="zoom-in" data-aos-delay="300" data-aos-once="false">
              <div className="text-white mb-2">Your Potential Monthly Revenue Increase:</div>
              <div className="text-4xl font-bold text-accent">$47,500</div>
              <div className="text-sm text-primary-200">Based on average B2B service industry data</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#demo" className="btn-primary text-lg px-8 py-4 shadow-cta-hover" data-aos="zoom-in" data-aos-delay="350" data-aos-once="false">Book Free Strategy Session</a>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-smooth backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="450" data-aos-once="false" onClick={() => alert('Demo video would play here.')}>Watch 3-Minute Demo</button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce" aria-hidden>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Problem Identification */}
      <section className="py-20 bg-surface" data-aos-once="false">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-once="false">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">The Painful Reality Most Businesses Face</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              You're generating leads, but they're slipping through your fingers. Here's what's really happening:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-once="false">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-primary mb-6">Industry Selector</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {(['manufacturing','realestate','consulting','b2b'] as IndustryKey[]).map((k) => (
                    <button
                      key={k}
                      onClick={() => setIndustry(k)}
                      className={`${industry === k ? 'bg-accent text-white' : 'bg-primary-200 text-primary'} px-4 py-3 rounded-lg font-medium`}
                    >
                      {k === 'manufacturing' && 'Manufacturing'}
                      {k === 'realestate' && 'Real Estate'}
                      {k === 'consulting' && 'Consulting'}
                      {k === 'b2b' && 'B2B Services'}
                    </button>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Monthly Leads:</span>
                    <span className="font-bold text-primary">{stats.leads}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Current Closing Rate:</span>
                    <span className="font-bold text-warning">{stats.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Customers Won:</span>
                    <span className="font-bold text-primary">{stats.customers}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="text-secondary">Lost Revenue Monthly:</span>
                      <span className="font-bold text-warning text-2xl">{stats.lost}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8" data-aos="fade-left" data-aos-once="false">
              {[
                ['Leads Go Cold Too Quickly', 'Without systematic follow-up, 80% of leads lose interest within 24-48 hours of initial contact.'],
                ['Generic Messaging Fails', "One-size-fits-all approaches don't trigger the psychological responses needed for decision-making."],
                ['No Systematic Nurturing', "Manual follow-ups are inconsistent and don't address the emotional and logical triggers customers need."],
              ].map(([title, desc], idx) => (
                <div key={title} className="flex items-start space-x-4" data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-delay={100 * (idx + 1)} data-aos-once="false">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${idx === 0 ? 'bg-warning/10' : idx === 1 ? 'bg-accent/10' : 'bg-trust/10'}`}>
                    {idx === 0 && (
                      <svg className="w-6 h-6 text-warning" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    )}
                    {idx === 1 && (
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    )}
                    {idx === 2 && (
                      <svg className="w-6 h-6 text-trust" fill="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
                    <p className="text-secondary">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20 bg-white" data-aos-once="false">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-once="false">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">The 3-Brain Psychology System</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Our system influences all three parts of your customer's brain simultaneously for maximum conversion impact.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              ['Reptilian Brain','Instant Response Mechanisms','from-accent-50 to-accent-100','bg-accent','text-accent'],
              ['Limbic Brain','Emotional Connection Builders','from-trust-50 to-trust-100','bg-trust','text-trust'],
              ['Neocortex','Logical Decision Drivers','from-success-50 to-success-100','bg-success','text-success'],
            ].map(([title, sub, grad, circle, text], idx) => (
              <div key={String(title)} className={`brain-section bg-gradient-to-br ${grad} rounded-2xl p-8 text-center cursor-pointer`} data-aos="zoom-in" data-aos-delay={150 * (idx + 1)} data-aos-once="false">
                <div className={`w-20 h-20 ${String(circle)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {idx === 0 && (
                    // Star for Reptilian
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  )}
                  {idx === 1 && (
                    // Heart for Limbic
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21s-6.716-4.35-9.193-6.827C.33 11.696.33 8.304 2.807 5.827 5.284 3.35 8.676 3.35 11.153 5.827L12 6.674l.847-.847c2.477-2.477 5.869-2.477 8.346 0 2.477 2.477 2.477 5.869 0 8.346C18.716 16.65 12 21 12 21z"/></svg>
                  )}
                  {idx === 2 && (
                    // Check for Neocortex
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{String(title)}</h3>
                <p className="text-secondary mb-4">{String(sub)}</p>
                <div className="bg-white rounded-lg p-4 text-left">
                  <div className="text-sm text-secondary mb-2">Before:</div>
                  <p className={`text-sm text-primary mb-3`}>"We offer quality services..."</p>
                  <div className="text-sm text-secondary mb-2">After:</div>
                  <p className={`text-sm ${String(text)} font-medium`}>"Improved message example..."</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Step Process */}
        <section id="process" className="py-20 bg-surface" data-aos-once="false">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Our 8-Step Conversion System
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto">
                        Each step is designed to systematically move prospects through the psychological journey from interest to purchase.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            id: 1,
                            title: 'Attractive Landing Page',
                            description:
                                'Psychology-optimized design that captures attention and builds instant credibility.',
                            color: 'bg-accent',
                        },
                        {
                            id: 2,
                            title: 'Psychological Selling',
                            description:
                                'Messaging that triggers all three brain systems for maximum persuasion.',
                            color: 'bg-accent',
                        },
                        {
                            id: 3,
                            title: 'Lead Generation',
                            description: 'Multi-channel approach to attract high-quality prospects consistently.',
                            color: 'bg-accent',
                        },
                        {
                            id: 4,
                            title: 'Interest Activation',
                            description: 'Immediate engagement sequences that prevent leads from going cold.',
                            color: 'bg-accent',
                        },
                        {
                            id: 5,
                            title: 'Psychological Triggers',
                            description: 'Instant response mechanisms that create urgency and desire.',
                            color: 'bg-trust',
                        },
                        {
                            id: 6,
                            title: 'Emotional Nurturing',
                            description: 'Systematic campaigns that build trust and emotional connection.',
                            color: 'bg-trust',
                        },
                        {
                            id: 7,
                            title: 'Consistent Follow-ups',
                            description: 'Automated sequences that maintain engagement without being pushy.',
                            color: 'bg-success',
                        },
                        {
                            id: 8,
                            title: 'Payment Success',
                            description: 'Optimized checkout and onboarding for maximum completion rates.',
                            color: 'bg-success',
                        },
                    ].map((step, idx) => (
                        <div
                            key={step.id}
                            className="process-step scroll-reveal bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-lg transition-smooth"
                            data-aos={idx % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left'}
                            data-aos-delay={100 * (idx + 1)}
                            data-aos-once="false"
                        >
                            <div
                                className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                            >
                                <span className="text-2xl font-bold text-white">{step.id}</span>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                            <p className="text-secondary text-sm mb-4">{step.description}</p>
                            <span className="text-accent font-medium text-sm hover:underline cursor-pointer">
                View Case Study →
              </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>


        {/* Industries Served - detailed cards with provided images and content */}
      <section id="industries" className="py-20 bg-white" data-aos-once="false">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-once="false">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Industries We Transform</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">Our psychology-based system works across all industries. Here's how we've helped businesses like yours.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="industry-card bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 hover:shadow-lg transition-smooth cursor-pointer" data-aos="zoom-in" data-aos-delay="100" data-aos-once="false">
              <img src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Manufacturing" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" onError={(e) => { const t=e.target as HTMLImageElement; t.src='https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop'; t.onerror=null }} />
              <h3 className="text-2xl font-bold text-primary mb-3">Manufacturing</h3>
              <p className="text-secondary mb-4">B2B equipment and industrial solutions</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Avg. Improvement:</span>
                  <span className="text-sm font-bold text-success">+340%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Typical Range:</span>
                  <span className="text-sm font-bold text-primary">3% → 15%</span>
                </div>
              </div>
            </div>

            <div className="industry-card bg-gradient-to-br from-trust-50 to-trust-100 rounded-2xl p-8 hover:shadow-lg transition-smooth cursor-pointer" data-aos="zoom-in" data-aos-delay="200" data-aos-once="false">
              <img src="https://images.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_960_720.jpg" alt="Real Estate" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" onError={(e) => { const t=e.target as HTMLImageElement; t.src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2940&auto=format&fit=crop'; t.onerror=null }} />
              <h3 className="text-2xl font-bold text-primary mb-3">Real Estate</h3>
              <p className="text-secondary mb-4">Residential and commercial properties</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Avg. Improvement:</span>
                  <span className="text-sm font-bold text-success">+280%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Typical Range:</span>
                  <span className="text-sm font-bold text-primary">4% → 18%</span>
                </div>
              </div>
            </div>

            <div className="industry-card bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 hover:shadow-lg transition-smooth cursor-pointer" data-aos="zoom-in" data-aos-delay="300" data-aos-once="false">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" alt="Consulting" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" onError={(e) => { const t=e.target as HTMLImageElement; t.src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'; t.onerror=null }} />
              <h3 className="text-2xl font-bold text-primary mb-3">Professional Services</h3>
              <p className="text-secondary mb-4">Consulting and advisory services</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Avg. Improvement:</span>
                  <span className="text-sm font-bold text-success">+420%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Typical Range:</span>
                  <span className="text-sm font-bold text-primary">2% → 12%</span>
                </div>
              </div>
            </div>

            <div className="industry-card bg-gradient-to-br from-success-50 to-success-100 rounded-2xl p-8 hover:shadow-lg transition-smooth cursor-pointer" data-aos="zoom-in" data-aos-delay="400" data-aos-once="false">
              <img src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Education" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" onError={(e) => { const t=e.target as HTMLImageElement; t.src='https://images.pixabay.com/photo/2016/10/16/16/33/dual-screen-1745705_960_720.png'; t.onerror=null }} />
              <h3 className="text-2xl font-bold text-primary mb-3">Educational Institutes</h3>
              <p className="text-secondary mb-4">Training and certification programs</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Avg. Improvement:</span>
                  <span className="text-sm font-bold text-success">+380%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Typical Range:</span>
                  <span className="text-sm font-bold text-primary">3% → 16%</span>
                </div>
              </div>
            </div>

            <div className="industry-card bg-gradient-to-br from-warning-50 to-warning-100 rounded-2xl p-8 hover:shadow-lg transition-smooth cursor-pointer" data-aos="zoom-in" data-aos-delay="500" data-aos-once="false">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop" alt="Coaching" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" onError={(e) => { const t=e.target as HTMLImageElement; t.src='https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'; t.onerror=null }} />
              <h3 className="text-2xl font-bold text-primary mb-3">Coaches & Consultants</h3>
              <p className="text-secondary mb-4">Personal and business coaching</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Avg. Improvement:</span>
                  <span className="text-sm font-bold text-success">+450%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Typical Range:</span>
                  <span className="text-sm font-bold text-primary">2% → 14%</span>
                </div>
              </div>
            </div>

            <div className="industry-card bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 hover:shadow-lg transition-smooth cursor-pointer" data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <img src="https://images.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg" alt="Travel" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" onError={(e) => { const t=e.target as HTMLImageElement; t.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2940&auto=format&fit=crop'; t.onerror=null }} />
              <h3 className="text-2xl font-bold text-primary mb-3">Travel Industry</h3>
              <p className="text-secondary mb-4">Tours, packages, and experiences</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Avg. Improvement:</span>
                  <span className="text-sm font-bold text-success">+320%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Typical Range:</span>
                  <span className="text-sm font-bold text-primary">4% → 17%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface" id={"testimonials"}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-secondary">Common concerns about psychology-based automation and conversion optimization.</p>
          </div>
          <div className="space-y-6">
            {[
              ['Is psychology-based marketing ethical?','Absolutely. Our approach focuses on understanding customer needs and decision-making processes to provide better solutions, not manipulation.'],
              ['How quickly will I see results?','Most clients see initial improvements within 2-4 weeks of implementation. Significant increases typically occur within 60-90 days.'],
              ['Will automation make my business feel impersonal?','The opposite is true. Our system creates more personalized experiences based on individual behavior.'],
              ['What if my industry is too specialized?','Psychology principles work across all industries and adapt to your market.'],
              ['Do I need technical skills to use this system?','Not at all. We handle all implementation and training.'],
            ].map(([q, a], idx) => (
              <FAQItem key={idx} question={String(q)} answer={String(a)} />
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section id="demo" className="py-20 bg-primary text-white relative overflow-hidden" data-aos-once="false">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-once="false">
              <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6" data-aos="zoom-in" data-aos-delay="100" data-aos-once="false">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 urgency-pulse"></span>
                <span>Only {Math.max(0, slots - 4)} consultation slots remaining this month</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up" data-aos-delay="150" data-aos-once="false">Ready to Transform Your Closing Ratio?</h2>
              <p className="text-xl text-primary-100 mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">Book your free strategy session and discover exactly how our psychology-based system can increase your conversion rate from 2-5% to 10-25%.</p>
              <div className="space-y-4 mb-8">
                {['45-minute personalized consultation','Custom conversion analysis for your business','Revenue projection based on your current leads','No obligation - completely free'].map((t, idx) => (
                  <div key={t} className="flex items-center" data-aos="fade-up" data-aos-delay={250 + idx * 100} data-aos-once="false"><svg className="w-6 h-6 text-accent mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span>{t}</span></div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left" data-aos-once="false">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center" data-aos="zoom-in" data-aos-delay="150" data-aos-once="false">Book Your Free Strategy Session</h3>
                <form onSubmit={onSubmit} className="space-y-6">
                  {formStep === 1 && (
                    <div className="form-step">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div data-aos="fade-right" data-aos-delay="100" data-aos-once="false"><Field label="First Name *" type="text" name="firstName" placeholder="John" required /></div>
                        <div data-aos="fade-left" data-aos-delay="150" data-aos-once="false"><Field label="Last Name *" type="text" name="lastName" placeholder="Smith" required /></div>
                      </div>
                      <div data-aos="fade-up" data-aos-delay="200" data-aos-once="false"><Field label="Business Email *" type="email" name="email" placeholder="john@company.com" required /></div>
                      <div data-aos="fade-up" data-aos-delay="250" data-aos-once="false"><Field label="Phone Number *" type="tel" name="phone" placeholder="+1 (555) 123-4567" required /></div>
                      <div data-aos="fade-up" data-aos-delay="300" data-aos-once="false"><Field label="Company Name *" type="text" name="company" placeholder="Your Company Inc." required /></div>
                      <button type="button" onClick={() => setFormStep(2)} className="btn-primary w-full mt-4" data-aos="zoom-in" data-aos-delay="350" data-aos-once="false">Continue to Business Details</button>
                    </div>
                  )}
                  {formStep === 2 && (
                    <div className="form-step">
                      <div data-aos="fade-up" data-aos-delay="100" data-aos-once="false"><Select label="Industry *" name="industry" options={["Manufacturing","Real Estate","Consulting","B2B Services","Coaching","Travel","Other"]} required /></div>
                      <div data-aos="fade-up" data-aos-delay="150" data-aos-once="false"><Select label="Monthly Leads *" name="monthlyLeads" options={["50-100","100-200","200-500","500+"]} required /></div>
                      <div data-aos="fade-up" data-aos-delay="200" data-aos-once="false"><Select label="Current Closing Rate" name="closingRate" options={["1-3%","3-5%","5-8%","8%+","Not sure"]} /></div>
                      <div data-aos="fade-up" data-aos-delay="250" data-aos-once="false"><Textarea label="Biggest Challenge" name="challenge" placeholder="What's your biggest challenge with lead conversion?" /></div>
                      <div className="flex space-x-4">
                        <button type="button" onClick={() => setFormStep(1)} className="bg-primary-200 text-primary font-semibold py-3 px-6 rounded-lg transition-smooth flex-1" data-aos="fade-right" data-aos-once="false">← Back</button>
                        <button type="button" onClick={() => setFormStep(3)} className="btn-primary flex-1" data-aos="fade-left" data-aos-once="false">Schedule Consultation</button>
                      </div>
                    </div>
                  )}
                  {formStep === 3 && (
                    <div className="form-step">
                      <h4 className="text-lg font-bold text-primary mb-4" data-aos="fade-up" data-aos-once="false">Select Your Preferred Time</h4>
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        {[
                          ['Tuesday, December 12','2:00 PM - 2:45 PM EST','Dec 12, 2025 - 2:00 PM EST'],
                          ['Wednesday, December 13','10:00 AM - 10:45 AM EST','Dec 13, 2025 - 10:00 AM EST'],
                          ['Thursday, December 14','3:00 PM - 3:45 PM EST','Dec 14, 2025 - 3:00 PM EST'],
                        ].map(([day, time, val]) => (
                          <button key={String(val)} type="button" onClick={() => setSelectedTime(String(val))} className={`border rounded-lg p-4 text-left transition-smooth ${selectedTime === val ? 'border-accent bg-accent-50' : 'border-primary-200 hover:bg-primary-50'}`} data-aos="zoom-in" data-aos-once="false">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-primary">{String(day)}</div>
                                <div className="text-sm text-secondary">{String(time)}</div>
                              </div>
                              <div className={`w-4 h-4 rounded-full border-2 ${selectedTime === val ? 'bg-accent border-accent' : 'border-primary-300'}`}></div>
                            </div>
                          </button>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <button type="button" onClick={() => setFormStep(2)} className="bg-primary-200 text-primary font-semibold py-3 px-6 rounded-lg transition-smooth flex-1" data-aos="fade-right" data-aos-once="false">← Back</button>
                        <button type="submit" className={`btn-primary flex-1 ${!canSubmit ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!canSubmit} data-aos="fade-left" data-aos-once="false">Confirm Booking</button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-accent mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-2xl font-bold">PsychoConvert Pro</span>
              </div>
              <p className="text-primary-300 mb-6 max-w-md">Transform your business with psychology-driven conversion optimization. From 2-5% to 10-25% closing ratios.</p>
              <div className="flex space-x-4">
                {['twitter','linkedin'].map((k) => (
                  <a key={k} href="#" className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-accent transition-smooth" aria-label={k}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-300">
                {['Solution','#solution','Process','#process','Industries','#industries','Results','#testimonials','Book Demo','#demo'].reduce<[string, string][]>((acc, cur, i, arr) => (i % 2 === 0 ? (acc.push([String(cur), String(arr[i+1])]), acc) : acc), []).map(([t, href]) => (
                  <li key={t}><a href={href} className="hover:text-white transition-smooth">{t}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-300">
                <li><svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> +1 (555) 123-4567</li>
                <li><svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> hello@psychoconvertpro.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-400 text-sm">© 2025 PsychoConvert Pro. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy','Terms of Service','Data Security'].map((t) => (
                <a key={t} href="#" className="text-primary-400 hover:text-white text-sm transition-smooth">{t}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

function Field(props: { label: string; name: string; type: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-2">{props.label}</label>
      <input className="form-field w-full" {...props} />
    </div>
  )
}

function Select(props: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-2">{props.label}</label>
      <select name={props.name} required={props.required} className="form-field w-full">
        <option value="">Select</option>
        {props.options.map((opt) => (
          <option key={opt} value={opt.toLowerCase()}> {opt} </option>
        ))}
      </select>
    </div>
  )
}

function Textarea(props: { label: string; name: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-2">{props.label}</label>
      <textarea name={props.name} placeholder={props.placeholder} className="form-field w-full h-24" />
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl p-8 shadow-card" data-aos="fade-up">
      <button className="w-full text-left flex justify-between items-center" onClick={() => setOpen((o) => !o)}>
        <h3 className="text-xl font-bold text-primary">{question}</h3>
        <svg className={`w-6 h-6 text-primary transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="mt-4 text-secondary">{answer}</div>}
    </div>
  )
}


