import './index.css'
import { useState, useEffect } from 'react'

function GPCLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="12" x2="24" y2="24" stroke="#2B5FEC" strokeWidth="1.2" opacity="0.6"/>
      <line x1="36" y1="12" x2="24" y2="24" stroke="#2B5FEC" strokeWidth="1.2" opacity="0.6"/>
      <line x1="24" y1="24" x2="24" y2="40" stroke="#F5A623" strokeWidth="1.2" opacity="0.7"/>
      <line x1="12" y1="12" x2="36" y2="12" stroke="#2B5FEC" strokeWidth="1" opacity="0.3"/>
      <circle cx="12" cy="12" r="6" fill="#2B5FEC" opacity="0.9"/>
      <circle cx="36" cy="12" r="6" fill="#2B5FEC" opacity="0.9"/>
      <circle cx="24" cy="40" r="6" fill="#F5A623" opacity="0.9"/>
      <circle cx="24" cy="24" r="4" fill="#111827" stroke="#2B5FEC" strokeWidth="1.5"/>
      <circle cx="24" cy="24" r="1.5" fill="#2B5FEC"/>
      <text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="7" fontFamily="Space Grotesk, sans-serif" fontWeight="700">G</text>
      <text x="36" y="15.5" textAnchor="middle" fill="white" fontSize="7" fontFamily="Space Grotesk, sans-serif" fontWeight="700">P</text>
      <text x="24" y="43.5" textAnchor="middle" fill="#070C1A" fontSize="7" fontFamily="Space Grotesk, sans-serif" fontWeight="700">C</text>
    </svg>
  )
}

function HeroLogo() {
  return (
    <div style={{ position: 'relative', width: 120, height: 120 }}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="55" stroke="rgba(43,95,236,0.08)" strokeWidth="1"/>
        <circle cx="60" cy="60" r="44" stroke="rgba(43,95,236,0.06)" strokeWidth="1"/>
        <line x1="30" y1="30" x2="60" y2="60" stroke="#2B5FEC" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 3"/>
        <line x1="90" y1="30" x2="60" y2="60" stroke="#2B5FEC" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 3"/>
        <line x1="60" y1="60" x2="60" y2="96" stroke="#F5A623" strokeWidth="1.5" opacity="0.6" strokeDasharray="4 3"/>
        <line x1="30" y1="30" x2="90" y2="30" stroke="#2B5FEC" strokeWidth="1" opacity="0.25"/>
        <circle cx="30" cy="30" r="16" fill="#0F1829" stroke="#2B5FEC" strokeWidth="1.5"/>
        <circle cx="90" cy="30" r="16" fill="#0F1829" stroke="#2B5FEC" strokeWidth="1.5"/>
        <circle cx="60" cy="96" r="16" fill="#0F1829" stroke="#F5A623" strokeWidth="1.5"/>
        <circle cx="30" cy="30" r="16" fill="rgba(43,95,236,0.12)"/>
        <circle cx="90" cy="30" r="16" fill="rgba(43,95,236,0.12)"/>
        <circle cx="60" cy="96" r="16" fill="rgba(245,166,35,0.12)"/>
        <circle cx="60" cy="60" r="11" fill="#070C1A" stroke="#2B5FEC" strokeWidth="1.5"/>
        <circle cx="60" cy="60" r="4" fill="#2B5FEC"/>
        <text x="30" y="34" textAnchor="middle" fill="white" fontSize="14" fontFamily="Space Grotesk, sans-serif" fontWeight="700">G</text>
        <text x="90" y="34" textAnchor="middle" fill="white" fontSize="14" fontFamily="Space Grotesk, sans-serif" fontWeight="700">P</text>
        <text x="60" y="100" textAnchor="middle" fill="#070C1A" fontSize="14" fontFamily="Space Grotesk, sans-serif" fontWeight="700">C</text>
      </svg>
    </div>
  )
}

// Status types
type StatusType = 'live' | 'live-partial' | 'paused' | 'built' | 'in-dev' | 'needs-deploy'

const STATUS_CONFIG: Record<StatusType, { label: string; color: string; dot: string; tooltip?: string }> = {
  'live':         { label: 'Live',            color: '#22c55e', dot: '#22c55e', },
  'live-partial': { label: 'Live — partial',  color: '#F5A623', dot: '#F5A623', tooltip: 'Some endpoints pending regulation verification' },
  'paused':       { label: 'Paused',          color: '#ef4444', dot: '#ef4444', tooltip: 'Supabase project inactive — temporarily offline' },
  'built':        { label: 'Built — local',   color: '#8B99B5', dot: '#8B99B5', tooltip: 'Fully functional offline build' },
  'in-dev':       { label: 'In development',  color: '#a855f7', dot: '#a855f7', },
  'needs-deploy': { label: 'Awaiting deploy', color: '#F5A623', dot: '#F5A623', tooltip: 'Backend live, frontend deployment pending' },
}

interface Project {
  id: number
  name: string
  category: string
  status: StatusType
  description: string
  tags: string[]
  icon: string
  color: string
  url: string | null
  featured: boolean
  pauseReason?: string
}

const portfolio: Project[] = [
  {
    id: 1,
    name: 'EU Compliance Data APIs',
    category: 'API Product',
    status: 'live-partial',
    description: 'Metered REST API serving EU regulatory reference data — breach-notification deadlines, EUDR country risk, AI Act obligation dates, Pay Transparency, CSRD scope, Battery Regulation, DSA VLOP designation, grid carbon intensity, late-payment interest rates, and more. 10 endpoints live; CBAM, CSDDD and PPWR pending source verification.',
    tags: ['REST API', 'EU Regulation', 'Next.js', 'Stripe'],
    icon: '⚖️',
    color: '#2B5FEC',
    url: 'https://compliancerates.com',
    featured: true,
  },
  {
    id: 2,
    name: 'CBAM Rates API',
    category: 'API Product',
    status: 'live-partial',
    description: 'Standalone API for EU Carbon Border Adjustment Mechanism data — default emission values by CN code and country, ETS free-allocation phase-out schedule, and grid carbon intensity. CBAM default value and allocation endpoints pending official source verification; grid intensity live.',
    tags: ['CBAM', 'Carbon', 'REST API', 'Next.js'],
    icon: '🌍',
    color: '#10B981',
    url: 'https://cbamrates.com',
    featured: true,
  },
  {
    id: 3,
    name: 'GreenCareerBoard',
    category: 'Job Board Platform',
    status: 'live',
    description: 'Niche job board connecting green-economy talent with renewable energy employers. Categories span solar, wind, hydrogen, EV, battery storage, smart grid, and more. Free for job seekers; employer job posting monetisation in build-out.',
    tags: ['Platform', 'Sustainability', 'Job Board'],
    icon: '🌱',
    color: '#22C55E',
    url: 'https://www.greencareerboard.com',
    featured: true,
  },
  {
    id: 4,
    name: 'Apoios',
    category: 'Civic Tech',
    status: 'live',
    description: 'Portuguese government funding tracker for homeowners. Monitors Fundo Ambiental, PT2030 and PRR environmental grants across a dozen official sources, then alerts users when a programme they follow opens — before the allocation runs out.',
    tags: ['Civic Tech', 'Portugal', 'Next.js', 'Supabase'],
    icon: '🏡',
    color: '#06B6D4',
    url: 'https://web-three-gules-95.vercel.app/',
    featured: true,
  },
  {
    id: 5,
    name: 'Marine Data API',
    category: 'API Product',
    status: 'needs-deploy',
    description: 'Metered REST API serving tide predictions, astronomical data and marine forecasts. Tidal harmonics sourced from NOAA CO-OPS and Instituto Hidrográfico. Backend (Supabase) is live and healthy; frontend deployment pending.',
    tags: ['API', 'Marine', 'Tides', 'Supabase'],
    icon: '🌊',
    color: '#0EA5E9',
    url: null,
    featured: false,
  },
  {
    id: 6,
    name: 'AI Engineering Compliance Assistant',
    category: 'B2B SaaS',
    status: 'in-dev',
    description: 'RAG-based maritime compliance platform covering SOLAS, MARPOL, MLC, Load Line and IMO regulations. Evidence-cited answers, compliance gap reports, and a multi-module SaaS expansion roadmap.',
    tags: ['Maritime', 'RAG/AI', 'SaaS', 'Next.js'],
    icon: '⚓',
    color: '#6366F1',
    url: null,
    featured: false,
  },
  {
    id: 7,
    name: 'AI Video Generator',
    category: 'Creative AI',
    status: 'paused',
    description: 'AI-powered video creation pipeline. Converts prompts or scripts into video sequences using generative models, with editing and export capabilities.',
    tags: ['AI', 'Video', 'Generative'],
    icon: '🎬',
    color: '#EF4444',
    url: null,
    featured: false,
    pauseReason: 'Supabase paused',
  },
  {
    id: 8,
    name: 'Bureaucracy Assistant AI',
    category: 'Productivity',
    status: 'paused',
    description: 'AI-assisted administrative workflow tool. Manages complex form submissions, approval chains, and document tracking for bureaucratic processes — reducing manual overhead.',
    tags: ['AI', 'Admin', 'Workflow'],
    icon: '🗂️',
    color: '#64748B',
    url: null,
    featured: false,
    pauseReason: 'Supabase paused',
  },
  {
    id: 9,
    name: 'Fishing Vessel Operations App',
    category: 'Industry Tool',
    status: 'built',
    description: 'Offline-capable single-file web app for fishing captains. Tracks trip parameters, fuel, bait, ice, catch species with weight and value. JSON import/export for fleet manager analysis.',
    tags: ['PWA', 'Offline', 'Fisheries'],
    icon: '🎣',
    color: '#F5A623',
    url: null,
    featured: false,
  },
  {
    id: 10,
    name: 'Personal Trading Bot',
    category: 'Fintech',
    status: 'built',
    description: 'Automated trading system for portfolio management and algorithmic strategy execution. Connects to market data feeds and executes rule-based orders.',
    tags: ['Fintech', 'Automation', 'Algo'],
    icon: '📈',
    color: '#A855F7',
    url: null,
    featured: false,
  },
  {
    id: 11,
    name: 'Personal Dashboard',
    category: 'Productivity',
    status: 'built',
    description: 'Command-centre dashboard consolidating personal metrics, schedules, tasks, and data feeds into one unified view.',
    tags: ['Dashboard', 'Productivity', 'React'],
    icon: '🖥️',
    color: '#14B8A6',
    url: null,
    featured: false,
  },
  {
    id: 12,
    name: 'PAC Stock Management',
    category: 'Enterprise Tool',
    status: 'built',
    description: 'Full-featured inventory and stock management system with migration pack. Handles product catalogues, stock levels, movement history and reporting.',
    tags: ['Inventory', 'Enterprise', 'Migration'],
    icon: '📦',
    color: '#F97316',
    url: null,
    featured: false,
  },
  {
    id: 13,
    name: 'Personal Trainer App',
    category: 'Health & Fitness',
    status: 'built',
    description: 'Workout planning and progress-tracking application. Structured programmes, session logging, and performance analytics for fitness goal management.',
    tags: ['Health', 'Fitness', 'Tracking'],
    icon: '💪',
    color: '#EC4899',
    url: null,
    featured: false,
  },
  {
    id: 14,
    name: 'Portfolio Manager',
    category: 'Fintech',
    status: 'built',
    description: 'Investment portfolio tracking and analysis tool. Monitors asset allocation, P&L, historical performance and risk exposure across multiple positions.',
    tags: ['Fintech', 'Portfolio', 'Analytics'],
    icon: '💹',
    color: '#6366F1',
    url: null,
    featured: false,
  },
  {
    id: 15,
    name: 'SnapGrid',
    category: 'Productivity Tool',
    status: 'built',
    description: 'Window management and grid snapping utility for desktop productivity. Organise open applications into configurable layouts with keyboard shortcuts.',
    tags: ['Desktop', 'Utility', 'UX'],
    icon: '⊞',
    color: '#0EA5E9',
    url: null,
    featured: false,
  },
  {
    id: 16,
    name: 'Wall Acoustic Behaviour Simulator',
    category: 'Engineering Tool',
    status: 'built',
    description: 'Simulation tool for modelling acoustic behaviour of wall systems. Engineers input material properties and geometry to predict sound transmission and absorption.',
    tags: ['Engineering', 'Simulation', 'Physics'],
    icon: '🔊',
    color: '#8B5CF6',
    url: null,
    featured: false,
  },
  {
    id: 17,
    name: 'Domestic Expense Manager',
    category: 'Personal Finance',
    status: 'built',
    description: 'Household budget and expense tracking application. Categorises spending, tracks against monthly budgets, and surfaces savings opportunities.',
    tags: ['Finance', 'Budget', 'Personal'],
    icon: '🏠',
    color: '#F59E0B',
    url: null,
    featured: false,
  },
  {
    id: 18,
    name: 'Flight Booking App',
    category: 'Travel',
    status: 'built',
    description: 'Flight search and booking interface with itinerary management. Integrates travel data APIs for real-time availability, pricing and reservation flows.',
    tags: ['Travel', 'API', 'Booking'],
    icon: '✈️',
    color: '#06B6D4',
    url: null,
    featured: false,
  },
  {
    id: 19,
    name: 'Philanthropist App',
    category: 'Social Impact',
    status: 'built',
    description: 'Platform for managing charitable giving, tracking donation impact and discovering causes aligned with your values.',
    tags: ['Social', 'Impact', 'Giving'],
    icon: '❤️',
    color: '#F43F5E',
    url: null,
    featured: false,
  },
  {
    id: 20,
    name: 'System Performance Analyzer',
    category: 'DevOps Tool',
    status: 'built',
    description: 'Real-time system diagnostics dashboard. Monitors CPU, memory, disk I/O and network throughput with historical charting and alert thresholds.',
    tags: ['DevOps', 'Monitoring', 'Performance'],
    icon: '⚙️',
    color: '#10B981',
    url: null,
    featured: false,
  },
  {
    id: 21,
    name: 'Watch Face Designer',
    category: 'Creative Tool',
    status: 'built',
    description: 'Custom watch face creation and preview tool. Design digital and analog faces with custom complications, typography and colour themes.',
    tags: ['Design', 'Creative', 'Wearables'],
    icon: '⌚',
    color: '#6B7280',
    url: null,
    featured: false,
  },
  {
    id: 22,
    name: 'Crypto Mining Dashboard',
    category: 'Crypto',
    status: 'built',
    description: 'Mining operation monitoring and analytics. Tracks hashrate, earnings, pool status and profitability across multiple rigs and algorithms.',
    tags: ['Crypto', 'Mining', 'Dashboard'],
    icon: '⛏️',
    color: '#FBBF24',
    url: null,
    featured: false,
  },
  {
    id: 23,
    name: 'OBIT Schedule Manager',
    category: 'Education Tool',
    status: 'built',
    description: 'Academic schedule and timetable management system. Manages class schedules, room assignments and instructor availability for educational institutions.',
    tags: ['Education', 'Scheduling', 'Admin'],
    icon: '📅',
    color: '#7C3AED',
    url: null,
    featured: false,
  },
  {
    id: 24,
    name: 'GPC DevHub',
    category: 'Studio Website',
    status: 'live',
    description: 'This site. A portfolio and studio website for GPC DevHub — built as a production-grade React app, bundled to a single HTML artifact. Showcases all live, paused, and locally-built projects with verified deployment statuses pulled from Supabase and Vercel.',
    tags: ['React', 'Portfolio', 'Meta'],
    icon: '🌐',
    color: '#2B5FEC',
    url: null,
    featured: false,
  },
]

function StatusBadge({ status, pauseReason }: { status: StatusType; pauseReason?: string }) {
  const cfg = STATUS_CONFIG[status]
  const tip = pauseReason || cfg.tooltip
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: cfg.dot, display: 'inline-block', boxShadow: status === 'live' ? `0 0 5px ${cfg.dot}` : 'none' }}/>
        <span className="mono" style={{ fontSize: 10, color: cfg.color, letterSpacing: '0.06em' }}>{cfg.label}</span>
      </div>
      {tip && (
        <span style={{ fontSize: 10, color: 'var(--text-muted)', maxWidth: 160, textAlign: 'right', lineHeight: 1.4, fontStyle: 'italic' }}>{tip}</span>
      )}
    </div>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'nav-blur' : ''}`} style={{ transition: 'all 0.3s' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <GPCLogo size={36} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em', lineHeight: 1.1 }}>GPC DevHub</div>
              <div className="mono" style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>DIGITAL PRODUCT STUDIO</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <nav style={{ display: 'flex', gap: 28 }}>
              {['Work', 'About', 'Services', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-muted)'}
                >{item}</a>
              ))}
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-muted)' }}>
              <span className="status-dot"/>
              <span className="mono">Building</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const liveCount = portfolio.filter(p => p.status === 'live' || p.status === 'live-partial').length
  return (
    <section className="grid-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 64 }}>
      <div style={{ position: 'absolute', top: '15%', left: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(43,95,236,0.08) 0%, transparent 70%)', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 70%)', pointerEvents: 'none' }}/>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="section-label animate-float" style={{ marginBottom: 24 }}>Digital Product Studio</div>
            <h1 className="animate-float-delay" style={{ fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 24px' }}>
              We build{' '}
              <span className="shimmer-text">software</span>{' '}
              that moves industries.
            </h1>
            <p className="animate-float-delay2" style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 480, margin: '0 0 40px' }}>
              GPC DevHub ships production-grade web apps, APIs, SaaS platforms, and industrial tools — across maritime, fintech, sustainability, civic tech, and beyond.
            </p>
            <div className="animate-float-delay3" style={{ display: 'flex', gap: 16 }}>
              <a href="#work" className="btn-primary">View our work</a>
              <a href="#contact" className="btn-ghost">Get in touch</a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
            <div className="animate-float"><HeroLogo /></div>
            <div className="animate-float-delay" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, width: '100%' }}>
              {[
                { value: `${portfolio.length}+`, label: 'Apps shipped' },
                { value: `${liveCount}`, label: 'Live products' },
                { value: '5', label: 'Live domains' },
                { value: '∞', label: 'Ideas building' },
              ].map(s => (
                <div key={s.label} className="stat-card">
                  <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4, letterSpacing: '0.05em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ item, large = false }: { item: Project; large?: boolean }) {
  return (
    <div className="portfolio-card" style={{ borderRadius: 0, padding: large ? '32px' : '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{ fontSize: large ? 40 : 32, lineHeight: 1 }}>{item.icon}</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <span className="tag gold">{item.category}</span>
          <StatusBadge status={item.status} pauseReason={item.pauseReason} />
        </div>
      </div>
      <h3 style={{ fontWeight: 700, fontSize: large ? 22 : 17, letterSpacing: '-0.02em', margin: '0 0 10px', lineHeight: 1.2 }}>{item.name}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.65, margin: '0 0 20px', flex: 1 }}>{item.description}</p>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: item.url ? 20 : 0 }}>
          {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        {item.url && (
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: '8px 16px', fontSize: 12, marginTop: 16, display: 'inline-flex' }}>
            Visit site →
          </a>
        )}
        {!item.url && item.status === 'needs-deploy' && (
          <div className="mono" style={{ fontSize: 10, color: 'var(--gold)', marginTop: 12, letterSpacing: '0.06em' }}>⏳ Frontend deployment in progress</div>
        )}
        {!item.url && item.status === 'paused' && (
          <div className="mono" style={{ fontSize: 10, color: '#ef4444', marginTop: 12, letterSpacing: '0.06em' }}>⏸ Temporarily offline — Supabase paused</div>
        )}
        {!item.url && item.status === 'in-dev' && (
          <div className="mono" style={{ fontSize: 10, color: '#a855f7', marginTop: 12, letterSpacing: '0.06em' }}>🔨 In active development</div>
        )}
      </div>
    </div>
  )
}

function Work() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Live', 'API Product', 'B2B SaaS', 'Civic Tech', 'Fintech', 'Industry Tool', 'Paused', 'Built — local']

  const featured = portfolio.filter(p => p.featured)
  const rest = portfolio.filter(p => !p.featured)

  const filtered = rest.filter(p => {
    if (filter === 'All') return true
    if (filter === 'Live') return p.status === 'live' || p.status === 'live-partial' || p.status === 'needs-deploy'
    if (filter === 'Paused') return p.status === 'paused'
    if (filter === 'Built — local') return p.status === 'built'
    return p.category === filter
  })

  return (
    <section id="work" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 56 }}>
        <div className="section-label" style={{ marginBottom: 16 }}>Portfolio</div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 16px' }}>What we've built</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 520, lineHeight: 1.65, margin: '0 0 24px' }}>
          From solo MVPs to multi-endpoint API products. Every project here is real software — built, shipped, or in active development.
        </p>
        {/* Legend */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
          {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: cfg.dot, display: 'inline-block', boxShadow: key === 'live' ? `0 0 5px ${cfg.dot}` : 'none' }}/>
              <span className="mono" style={{ fontSize: 10, color: cfg.color, letterSpacing: '0.05em' }}>{cfg.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 2 }}>
        {featured.map(item => <PortfolioCard key={item.id} item={item} large />)}
      </div>

      {/* Filter */}
      <div style={{ display: 'flex', gap: 8, margin: '32px 0 24px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}
            style={{ padding: '6px 14px', border: `1px solid ${filter === cat ? 'var(--cobalt)' : 'var(--border)'}`,
              background: filter === cat ? 'rgba(43,95,236,0.15)' : 'transparent',
              color: filter === cat ? 'var(--cobalt-light)' : 'var(--text-muted)',
              fontFamily: 'Space Mono, monospace', fontSize: 11, cursor: 'pointer',
              letterSpacing: '0.04em', transition: 'all 0.2s', borderRadius: 0 }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
        {filtered.map(item => <PortfolioCard key={item.id} item={item} />)}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--border)', background: 'var(--panel)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>About</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 24px', lineHeight: 1.1 }}>
              Building the future, one product at a time.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.75, margin: '0 0 20px' }}>
              GPC DevHub is an independent product studio driven by a single belief: complex industries deserve sophisticated software. We prototype fast, build for production, and ship things that actually work.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.75 }}>
              Our portfolio spans EU regulatory APIs, maritime compliance, green job boards, civic tech, financial tooling, fisheries operations — each product shaped by deep domain knowledge and a rigorous planning-first approach.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { title: 'Planning-first', desc: 'Every platform starts with PRDs, architecture decisions, and security models before a line of production code is written.' },
              { title: 'AI-native', desc: 'RAG pipelines, generative tools, and intelligent automation are built into the product from day one — not bolted on.' },
              { title: 'Domain depth', desc: 'We go deep: EU regulations verified against primary statute text, tidal harmonics from official hydrographic sources, acoustic physics from first principles.' },
              { title: 'Ship to production', desc: 'Everything in the portfolio is functional, tested software. No mockups. No vaporware.' },
            ].map(p => (
              <div key={p.title} style={{ paddingLeft: 20, borderLeft: '2px solid var(--border)' }}>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{p.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.65 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    { icon: '⚙️', title: 'SaaS Platforms', desc: 'End-to-end B2B SaaS — architecture, database design, Stripe billing, auth, and multi-tenant deployments on Vercel + Supabase.' },
    { icon: '🔌', title: 'API Products', desc: 'Metered data APIs with key management, usage tracking, rate limiting, and full OpenAPI documentation. Built for reliability and developer experience.' },
    { icon: '🤖', title: 'AI / RAG Systems', desc: 'Production RAG pipelines with vector search, citation-backed answers, and evidence chains. Domain-specific knowledge bases on demand.' },
    { icon: '🏛️', title: 'Civic & Regulatory Tech', desc: 'Government data scrapers, grant trackers, regulatory reference APIs — turning official sources into clean, queryable products.' },
    { icon: '🏗️', title: 'Platform Architecture', desc: 'Technical planning artefacts — PRDs, ADRs, system architecture, ERD, security threat models, API specs — reviewed to production standard.' },
    { icon: '📱', title: 'Offline-first Apps', desc: 'Single-file or PWA applications that work without connectivity. Data sync via JSON import/export for environments without reliable internet.' },
  ]
  return (
    <section id="services" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Services</div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0 }}>What we do</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {services.map(s => (
            <div key={s.title} style={{ background: 'var(--panel)', border: '1px solid var(--border)', padding: '28px', borderRadius: 0 }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 16, margin: '0 0 10px', letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" style={{ borderTop: '1px solid var(--border)', background: 'var(--panel)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div className="section-label" style={{ marginBottom: 16 }}>Contact</div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 20px', lineHeight: 1.1 }}>
            Have an idea that needs building?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.75, margin: '0 0 32px' }}>
            Whether it's a B2B SaaS, a regulatory data API, a niche industry tool, or a civic tech project — let's talk about making it real.
          </p>
          <a href="mailto:hello@gpcdevhub.com" className="btn-primary">Start a conversation</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { label: 'Studio', value: 'GPC DevHub' },
            { label: 'Specialisation', value: 'Web apps · APIs · SaaS · AI systems' },
            { label: 'Live products', value: `${portfolio.filter(p => ['live','live-partial','needs-deploy'].includes(p.status)).length} deployed` },
            { label: 'Total portfolio', value: `${portfolio.length} projects` },
            { label: 'Status', value: 'Actively building' },
          ].map(r => (
            <div key={r.label} style={{ display: 'flex', gap: 24, padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', minWidth: 120, letterSpacing: '0.08em', textTransform: 'uppercase', paddingTop: 2 }}>{r.label}</div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{r.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <GPCLogo size={24} />
          <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.08em' }}>GPC DEVHUB © 2026</span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
          DIGITAL PRODUCT STUDIO — BUILDING SINCE DAY ONE
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

