import './App.css';

function NavBar() {
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <div className="brand">
          <div className="brand-mark" />
          <span>ExQute</span>
        </div>
        <nav className="nav-links">
          <a href="https://github.com/IPPATAPUVENKATASRICHANDRA/ExQute_Zip/blob/main/win-x64.zip?raw=true" download>Download</a>
          <a href="/about.html">About</a>
          <a href="/product.html">Product</a>
          <a href="/quantum-basis.html">Quantum basis</a>
        </nav>
        <div className="nav-actions">
          <a className="btn" href="/contact.html">Contact</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container" style={{textAlign:'center'}}>
        <div className="hero-head glass">build quantum circuits</div>
        <h1 className="hero-title">Design circuit, show the world</h1>
        <p className="hero-sub">
          Create and share quantum circuit designs effortlessly.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="https://github.com/IPPATAPUVENKATASRICHANDRA/ExQute_Zip/blob/main/win-x64.zip?raw=true" download>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:8}}>
              <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download ExQute Quantum Designer
          </a>
          <p className="muted" style={{marginTop: '12px', fontSize: '14px'}}>Windows x64</p>
        </div>
      </div>
    </section>
  );
}

// removed duplicate DownloadBlock section

function SiteFooter() {
  return (
    <footer>
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <div className="brand-mark" />
          <span>ExQute</span>
        </div>
        <div className="muted">© {new Date().getFullYear()} ExQute. All rights reserved.</div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      {/* Download block removed to avoid duplicate CTAs */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="muted">Why ExQute?</div>
            <h2 className="section-title">Advantages</h2>
          </div>
          <div className="advantages">
            <div className="card">
              <div className="advantage-icon">🎯</div>
              <div className="advantage-title">Drag‑and‑drop designer</div>
              <div className="advantage-desc">Pick gates, place them on a matrix canvas, connect, and iterate with intuitive visual design.</div>
            </div>
            <div className="card">
              <div className="advantage-icon">⚡</div>
              <div className="advantage-title">Fast simulation</div>
              <div className="advantage-desc">Run circuits and view results and analysis instantly with optimized quantum state simulation.</div>
            </div>
            <div className="card">
              <div className="advantage-icon">📚</div>
              <div className="advantage-title">Learn by doing</div>
              <div className="advantage-desc">Save, load, and explain features help you study each step of quantum computation in detail.</div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

export default App;
