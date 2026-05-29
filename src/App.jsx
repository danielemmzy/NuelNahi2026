import './App.css'
import coupleImg from './assets/couple.jpg'
import wedinvite from './assets/nuel_nahi.jpg'

const Petals = ({ count = 6 }) => {
  const configs = [
    { left:'6%',  duration:'10s',   delay:'0s',   width:'9px',  height:'13px' },
    { left:'18%', duration:'11s',   delay:'1.2s', width:'8px',  height:'11px' },
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

function App() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <div className="wedding-hero">

        <div className="hero-image-wrap">
          <img className="hero-img" src={coupleImg} alt="Nuel and Nahi" />
          <div  />
          <div className="hero-fade-bottom" />
        </div>

        

        <div className="hero-text">
          <Petals  />
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
          <p className="wedding-date">Together Forever · 2026</p>
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
          <span className="caption-sub">Together Forever · 2026</span>
        </div>
      </section>

      {/* ── WEDDING DETAILS SECTION ── */}
      <section className="details-section">
        <Petals count={5} />

        <p className="section-label">Wedding Details</p>

        <h2 className="details-heading">
          Join Us to Celebrate
        </h2>

        <div className="details-grid">

          {/* Date */}
          <div className="detail-card">
            <svg className="detail-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="4" y="8" width="32" height="28" rx="4" fill="none" stroke="#9e2a2b" strokeWidth="1.5"/>
              <line x1="4" y1="16" x2="36" y2="16" stroke="#9e2a2b" strokeWidth="1.5"/>
              <line x1="13" y1="4" x2="13" y2="12" stroke="#9e2a2b" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="27" y1="4" x2="27" y2="12" stroke="#9e2a2b" strokeWidth="1.5" strokeLinecap="round"/>
              <text x="20" y="30" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="13" fontWeight="600" fill="#2a1f14">20</text>
            </svg>
            <span className="detail-card-label">Date</span>
            <span className="detail-card-value">Friday</span>
            <span className="detail-card-big">June 20</span>
            <span className="detail-card-sub">2025</span>
          </div>

          {/* Time */}
          <div className="detail-card">
            <svg className="detail-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#9e2a2b" strokeWidth="1.5"/>
              <line x1="20" y1="20" x2="20" y2="10" stroke="#9e2a2b" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="20" y1="20" x2="27" y2="24" stroke="#9e2a2b" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="20" cy="20" r="1.5" fill="#9e2a2b"/>
            </svg>
            <span className="detail-card-label">Time</span>
            <span className="detail-card-value">Ceremony</span>
            <span className="detail-card-big">10:00 amM</span>
            <span className="detail-card-sub">Reception follows</span>
          </div>

          {/* Venue */}
          <div className="detail-card">
            <svg className="detail-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M20 4 C13 4 8 10 8 16 C8 25 20 36 20 36 C20 36 32 25 32 16 C32 10 27 4 20 4Z" fill="none" stroke="#9e2a2b" strokeWidth="1.5"/>
              <circle cx="20" cy="16" r="4" fill="none" stroke="#9e2a2b" strokeWidth="1.5"/>
            </svg>
            <span className="detail-card-label">Venue</span>
            <span className="detail-card-value">Location</span>
            <span className="detail-card-big">Richmond Gate estate Ikate Lekki Lagos</span>
            <span className="detail-card-sub">Nigeria</span>
          </div>

          {/* Dress Code */}
          <div className="detail-card">
            <svg className="detail-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M14 6 L10 14 L16 14 L16 34 L24 34 L24 14 L30 14 L26 6 Q20 10 14 6Z" fill="none" stroke="#9e2a2b" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span className="detail-card-label">Dress Code</span>
            <span className="detail-card-value">Attire</span>
            <span className="detail-card-big">Formal</span>
            <span className="detail-card-sub">Black tie welcome</span>
          </div>

        </div>

        {/* Ornamental quote */}
        <div className="details-quote">
          <div className="quote-divider">
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>
          <p className="quote-text">"Two souls, one love, one celebration."</p>
          <div className="quote-divider">
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>
          
        </div>
        {/* Venue Button */}

  <a className="venue-btn"
  href="https://maps.google.com/?q=Richmond+Gate+Estate+Ikate+Lekki+Lagos+Nigeria"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="venue-btn-icon">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  </span>
  <span className="venue-btn-text">
    <span className="venue-btn-main">Find the Venue</span>
    <span className="venue-btn-sub">Richmond Gate Estate · Ikate, Lekki · Lagos</span>
  </span>
  <span className="venue-btn-arrow">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
</a>
        

      </section>
    </>
  )
}

export default App