import './App.css'
import coupleImg from './assets/couple.jpg'
import wedinvite from './assets/nuel_nahi.jpg'
import { useEffect, useState } from 'react'

const Petals = ({ count = 6 }) => {
  const configs = [
    { left:'6%',  duration:'10s',  delay:'0s',   width:'9px',  height:'13px' },
    { left:'18%', duration:'11s',  delay:'1.2s', width:'8px',  height:'11px' },
    { left:'35%', duration:'9s',   delay:'2.5s', width:'7px',  height:'10px' },
    { left:'55%', duration:'11s',  delay:'0.5s', width:'9px',  height:'13px' },
    { left:'72%', duration:'7.5s', delay:'3s',   width:'8px',  height:'11px' },
    { left:'88%', duration:'9.5s', delay:'1.8s', width:'7px',  height:'10px' },
    { left:'92%', duration:'6.5s', delay:'4s',   width:'6px',  height:'9px'  },
    { left:'28%', duration:'10s',  delay:'5s',   width:'8px',  height:'12px' },
  ]
  return configs.slice(0, count).map((c, i) => (
    <div key={i} className="petal" style={{
      left: c.left,
      animationDuration: c.duration,
      animationDelay: c.delay,
      width: c.width,
      height: c.height,
      top: 0,
      position: 'absolute',
    }} />
  ))
}

const EventIcon = ({ type }) => {
  const icons = {
    rings: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17" cy="24" r="9" stroke="#9e2a2b" strokeWidth="1.8" fill="none"/>
        <circle cx="31" cy="24" r="9" stroke="#b89a50" strokeWidth="1.8" fill="none"/>
        <path d="M22 20.5 Q24 18 26 20.5" stroke="#9e2a2b" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    hands: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 28 Q12 22 16 18 Q18 16 20 18 L20 12 Q20 10 22 10 Q24 10 24 12 L24 20 Q25 18 27 18 Q29 18 29 20 Q30 18 32 18 Q34 18 34 21 Q35 20 37 21 Q39 22 38 25 L36 32 Q34 37 28 38 L20 38 Q15 38 14 32Z" stroke="#9e2a2b" strokeWidth="1.5" fill="rgba(158,42,43,0.06)" strokeLinejoin="round"/>
      </svg>
    ),
    fork: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="16" y1="10" x2="16" y2="20" stroke="#9e2a2b" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 10 L12 18 Q12 22 16 22 Q20 22 20 18 L20 10" stroke="#9e2a2b" strokeWidth="1.5" fill="none"/>
        <line x1="16" y1="22" x2="16" y2="38" stroke="#9e2a2b" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="30" y1="10" x2="30" y2="38" stroke="#b89a50" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M27 10 Q30 14 33 10" stroke="#b89a50" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    camera: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="32" height="22" rx="4" stroke="#9e2a2b" strokeWidth="1.8" fill="none"/>
        <circle cx="24" cy="27" r="6" stroke="#9e2a2b" strokeWidth="1.5" fill="none"/>
        <circle cx="24" cy="27" r="2.5" fill="rgba(158,42,43,0.2)" stroke="#9e2a2b" strokeWidth="1"/>
        <path d="M18 16 L20 11 L28 11 L30 16" stroke="#9e2a2b" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <circle cx="36" cy="21" r="1.5" fill="#b89a50"/>
      </svg>
    ),
    music: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 34 L20 16 L36 13 L36 31" stroke="#9e2a2b" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="20" y1="16" x2="36" y2="13" stroke="#9e2a2b" strokeWidth="1.5"/>
        <circle cx="17" cy="34" r="4" stroke="#9e2a2b" strokeWidth="1.5" fill="rgba(158,42,43,0.1)"/>
        <circle cx="33" cy="31" r="4" stroke="#b89a50" strokeWidth="1.5" fill="rgba(184,154,80,0.1)"/>
      </svg>
    ),
  }
  return icons[type] || null
}

function App() {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
  const target = new Date('2026-06-20T10:00:00')

  const tick = () => {
    const now = new Date()
    const diff = target.getTime() - now.getTime()

    if (diff <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      return
    }

    setTimeLeft({
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    })
  }

  tick()
  const id = setInterval(tick, 1000)
  return () => clearInterval(id)
}, [])

  return (
    <>
      {/* ── HERO SECTION ── */}
      <div className="wedding-hero">
        <div className="hero-image-wrap">
          <img className="hero-img" src={coupleImg} alt="Nuel and Nahi" />
          <div  />
          <div className="hero-fade-bottom" />
        </div>

        <Petals count={8} />

        <div className="hero-text">
          <span className="pre-label">The Wedding of</span>
          <h1 className="couple-names">
            Nuel
            <span className="ampersand">& Nahi</span>
          </h1>
          <div className="divider-wrap">
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>
          <p className="wedding-date">ELNAHI 2026 · Together Forever</p>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-dot" />
        </div>
      </div>

      {/* ── PHOTO SECTION ── */}
      <section className="photo-section">
        <Petals count={6} />

        <p className="photo-label">Our Invitation</p>

        <div className="photo-frame-outer">
          <div className="glow-ring" />
          <div className="photo-inner">
            <img src={wedinvite} alt="Nuel and Nahi Wedding Invitation" />
          </div>
          {['tl','tr','bl','br'].map(pos => (
            <svg key={pos} className={`corner-ornament ${pos}`} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 42 L6 8 Q6 6 8 6 L42 6" stroke="#b89a50" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M6 18 Q6 6 18 6" stroke="#b89a50" strokeWidth="1" fill="none" opacity="0.5"/>
              <circle cx="6" cy="6" r="2.5" fill="#b89a50"/>
              <circle cx="6" cy="42" r="1.5" fill="#b89a50" opacity="0.6"/>
              <circle cx="42" cy="6" r="1.5" fill="#b89a50" opacity="0.6"/>
              <path d="M6 6 Q10 10 8 16" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.7"/>
              <path d="M6 6 Q14 8 16 6" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.7"/>
            </svg>
          ))}
        </div>

        <div className="photo-caption">
          <span className="caption-names">Nuel & Nahi</span>
          <span className="caption-sub">ELNAHI 2026 · Together Forever</span>
        </div>
      </section>

      {/* ── WEDDING DETAILS SECTION ── */}
      <section className="details-section">
        <Petals count={5} />

        <p className="section-label">Wedding Details</p>
        <h2 className="details-heading">Join Us to Celebrate</h2>

        <div className="details-grid">

          <div className="detail-card">
            <svg className="detail-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="4" y="8" width="32" height="28" rx="4" fill="none" stroke="#9e2a2b" strokeWidth="1.5"/>
              <line x1="4" y1="16" x2="36" y2="16" stroke="#9e2a2b" strokeWidth="1.5"/>
              <line x1="13" y1="4" x2="13" y2="12" stroke="#9e2a2b" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="27" y1="4" x2="27" y2="12" stroke="#9e2a2b" strokeWidth="1.5" strokeLinecap="round"/>
              <text x="20" y="30" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="13" fontWeight="600" fill="#2a1f14">20</text>
            </svg>
            <span className="detail-card-label">Date</span>
            <span className="detail-card-value">Saturday</span>
            <span className="detail-card-big">June 20</span>
            <span className="detail-card-sub">2026</span>
          </div>

          <div className="detail-card">
            <svg className="detail-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#9e2a2b" strokeWidth="1.5"/>
              <line x1="20" y1="20" x2="20" y2="10" stroke="#9e2a2b" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="20" y1="20" x2="27" y2="24" stroke="#9e2a2b" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="20" cy="20" r="1.5" fill="#9e2a2b"/>
            </svg>
            <span className="detail-card-label">Time</span>
            <span className="detail-card-value">Ceremony</span>
            <span className="detail-card-big">10:00 AM</span>
            <span className="detail-card-sub">Reception follows</span>
          </div>

          <div className="detail-card">
            <svg className="detail-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M20 4 C13 4 8 10 8 16 C8 25 20 36 20 36 C20 36 32 25 32 16 C32 10 27 4 20 4Z" fill="none" stroke="#9e2a2b" strokeWidth="1.5"/>
              <circle cx="20" cy="16" r="4" fill="none" stroke="#9e2a2b" strokeWidth="1.5"/>
            </svg>
            <span className="detail-card-label">Venue</span>
            <span className="detail-card-value">Location</span>
            <span className="detail-card-big">Mijl Residences & Villa</span>
            <span className="detail-card-sub">Orji Murray St, Ikate Lekki · Lagos</span>
          </div>

          <div className="detail-card">
            <svg className="detail-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M14 6 L10 14 L16 14 L16 34 L24 34 L24 14 L30 14 L26 6 Q20 10 14 6Z" fill="none" stroke="#9e2a2b" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span className="detail-card-label">Dress Code</span>
            <span className="detail-card-value">Attire</span>
            <span className="detail-card-big">Traditional Attire</span>
            <span className="detail-card-sub">Gold and Red</span>
          </div>

        </div>

        <div className="details-quote">
          <div className="quote-divider">
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>
          <p className="quote-text">"ELNAHI 2026 · Two souls, one love, one celebration."</p>
          <div className="quote-divider">
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>
        </div>

      </section>

      {/* ── COUNTDOWN SECTION ── */}
      <section className="countdown-section">
        <Petals count={4} />
        <p className="section-label">Counting Down</p>
        <h2 className="details-heading">The Big Day Approaches</h2>
        <div className="countdown-grid">
          {[
            { value: timeLeft.days,    label: 'Days'    },
            { value: timeLeft.hours,   label: 'Hours'   },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' },
          ].map(({ value, label }) => (
            <div key={label} className="countdown-card">
              <div className="countdown-number">
                {String(value ?? '00').padStart(2, '0')}
              </div>
              <div className="countdown-label">{label}</div>
            </div>
          ))}
        </div>
        <p className="countdown-date-note">Saturday · June 20, 2026 · 3:00 PM</p>
      </section>

      {/* ── TIMELINE SECTION ── */}
      <section className="timeline-section">
        <Petals count={4} />
        <p className="section-label">The Day's Events</p>
        <h2 className="details-heading">What to Expect</h2>

        <div className="timeline">
          {[
            {
              time: '9:00 AM',
              title: 'Wedding Ceremony',
              desc: 'The celebration begins as Nuel & Nahi exchange their vows surrounded by loved ones.',
              icon: 'rings',
            },
            {
              time: '12:00 PM',
              title: 'Marriage Rites',
              desc: 'A sacred and joyful celebration of traditional rites honoring both families.',
              icon: 'hands',
            },
            {
              time: '2:00 PM',
              title: 'Ceremonial Lunch',
              desc: 'Sit down and enjoy a beautifully curated dining experience with family and friends.',
              icon: 'fork',
            },
            {
              time: '4:00 PM',
              title: 'Photos & Portraits',
              desc: 'Capture memories with the couple — family portraits, group shots, and candid moments.',
              icon: 'camera',
            },
            {
              time: '7:00 PM',
              title: 'Evening Party',
              desc: 'Dance the night away as we celebrate the newlyweds with music, joy, and laughter.',
              icon: 'music',
            },
          ].map((event, i) => (
            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-img-placeholder">
                  <EventIcon type={event.icon} />
                </div>
                <span className="timeline-time">{event.time}</span>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-desc">{event.desc}</p>
              </div>
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </section>

      {/* ── RSVP SECTION (LAST) ── */}
      <section className="rsvp-section">
        <Petals count={5} />
        <p className="section-label">Kindly Respond</p>
        <h2 className="details-heading">Will You Join Us?</h2>
        <p className="rsvp-note">
          Please let us know you're coming. Reach out to us directly — we'd love to hear from you.
        </p>

        <div className="rsvp-buttons">
          <a className="rsvp-btn rsvp-call" href="tel:+2347067999062">
            <span className="rsvp-btn-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="rsvp-btn-text">
              <span className="rsvp-btn-main">Call Us</span>
              <span className="rsvp-btn-sub">0706 799 9062</span>
            </span>
          </a>

          
           <a className="rsvp-btn rsvp-msg"
            href="https://wa.me/2347067999062?text=Hello%2C%20I%20would%20like%20to%20RSVP%20for%20Nuel%20%26%20Nahi%27s%20wedding%20on%20June%2020th%202026!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="rsvp-btn-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="rsvp-btn-text">
              <span className="rsvp-btn-main">WhatsApp</span>
              <span className="rsvp-btn-sub">Send us a message</span>
            </span>
          </a>
        </div>

        {/* Venue Button */}
        
        <a  className="venue-btn"
          href="https://maps.google.com/?q=Mijl+Residences+And+Villa+Orji+Murray+Street+Ikate+Lekki+Lagos+Nigeria"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '24px' }}
        >
          <span className="venue-btn-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </span>
          <span className="venue-btn-text">
            <span className="venue-btn-main">Find the Venue</span>
            <span className="venue-btn-sub">Mijl Residences & Villa · Orji Murray St · Ikate, Lekki · Lagos</span>
          </span>
          <span className="venue-btn-arrow">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>

        <div className="rsvp-deadline" style={{ marginTop: '40px' }}>
          <div className="divider-wrap" style={{ marginBottom: '16px' }}>
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>
          <p className="rsvp-deadline-text">Kindly RSVP before June 10th, 2026</p>
        </div>
      </section>
    </>
  )
}

export default App