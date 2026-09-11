import React,{useState}from"react";
import{createRoot}from"react-dom/client";
import"./index.css";
import"./App.css";
import"./hero.css";

const hero="/images/hero-estate.png";

function App(){
 const[submitted,setSubmitted]=useState(false);
 const[menu,setMenu]=useState(false);
 return <div className="site">
  <div className="topbar">
   <span>HOFWEL</span>
   <span className="topbar-center">EUROPEAN MENSWEAR</span>
   <span>COLLECTION 01 / 26</span>
  </div>

  <header className="header">
   <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Open menu">
    <i/><i/>
   </button>
   <nav className={menu?"open":""}>
    <a href="#house">The House</a>
    <a href="#collection">Collection 01</a>
    <a href="#contact">Contact</a>
   </nav>
   <a className="logo" href="#top">HOFWEL</a>
   <div className="header-right"><a href="#contact">Join the House</a></div>
  </header>

  <main id="top">
   <section className="hero">
    <img src={hero} alt="HOFWEL European menswear campaign"/>
    <div className="hero-gradient"/>
    <div className="hero-copy">
     <p className="kicker">HOFWEL / EUROPEAN MENSWEAR</p>
     <h1>A new house<br/><em>is taking shape.</em></h1>
     <a className="discover" href="#house">Discover HOFWEL <span>↘</span></a>
    </div>
   </section>

   <section className="manifesto" id="house">
    <div className="rule"/>
    <p className="section-label">THE HOUSE</p>
    <h2>Modern European<br/>menswear.</h2>
    <p className="manifesto-text">HOFWEL is a new menswear house built around exceptional tailoring, considered proportions and a quieter approach to dressing.</p>
   </section>

   <section className="image-break">
    <img src="https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=2000&q=85" alt="Tailoring editorial"/>
    <div className="image-break-caption"><span>01</span><span>THE ART OF DRESSING</span></div>
   </section>

   <section className="collection" id="collection">
    <div className="collection-head">
     <div><p className="section-label">COLLECTION 01 / 26</p><h2>The first<br/><em>chapter.</em></h2></div>
     <p>Tailoring is where HOFWEL begins.</p>
    </div>
    <div className="tiles">
     <div><img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85" alt="HOFWEL tailoring"/></div>
     <div><img src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1400&q=85" alt="HOFWEL menswear"/></div>
    </div>
   </section>

   <section className="join" id="contact">
    <div className="join-inner">
     <p className="section-label">THE HOUSE</p>
     <h2>Be there<br/><em>from the beginning.</em></h2>
     {!submitted ? <form onSubmit={e=>{e.preventDefault();setSubmitted(true)}}>
      <label>Join the House</label>
      <div className="email-row"><input type="email" required placeholder="Your email"/><button aria-label="Submit">→</button></div>
     </form> : <p className="success">Thank you. You are on the list.</p>}
    </div>
   </section>
  </main>

  <footer>
   <div className="footer-main">
    <div><a className="footer-logo" href="#top">HOFWEL</a><p>European Menswear</p></div>
    <div className="footer-links"><a href="#house">The House</a><a href="#collection">Collection</a><a href="#contact">Contact</a><a href="#">Instagram</a><a href="#">TikTok</a></div>
   </div>
   <div className="footer-bottom"><span>© 2026 HOFWEL</span><span>Designed in Spain</span><span>European Menswear</span></div>
  </footer>
 </div>
}
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
