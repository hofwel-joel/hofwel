import React,{useState,useEffect}from"react";
import{createRoot}from"react-dom/client";
import"./index.css";
import"./App.css";
import"./hero.css";

const hero="/images/hero-estate.png";

// TODO: replace with the real GA4 Measurement ID when analytics is ready to go live
const GA_MEASUREMENT_ID="G-XXXXXXXXXX";
const COOKIE_CONSENT_KEY="hofwel-cookie-consent";

function loadAnalytics(){
 if(!GA_MEASUREMENT_ID||GA_MEASUREMENT_ID==="G-XXXXXXXXXX")return;
 if(document.getElementById("ga-script"))return;
 const script=document.createElement("script");
 script.id="ga-script";
 script.async=true;
 script.src=`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
 document.head.appendChild(script);
 window.dataLayer=window.dataLayer||[];
 function gtag(){window.dataLayer.push(arguments)}
 gtag("js",new Date());
 gtag("config",GA_MEASUREMENT_ID);
}

function App(){
 const[submitted,setSubmitted]=useState(false);
 const[menu,setMenu]=useState(false);
 const[privacyOpen,setPrivacyOpen]=useState(false);
 const[cookieConsent,setCookieConsent]=useState(()=>localStorage.getItem(COOKIE_CONSENT_KEY));

 useEffect(()=>{
  if(cookieConsent==="accepted")loadAnalytics();
 },[cookieConsent]);

 function chooseCookies(choice){
  localStorage.setItem(COOKIE_CONSENT_KEY,choice);
  setCookieConsent(choice);
 }

 function resetCookieChoice(){
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  setCookieConsent(null);
 }

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
     <a className="discover" href="#house">Discover HOFWEL</a>
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
     {/* TODO: wire this up to a real email capture backend (Netlify Forms, Formspree, Mailchimp, etc.) before launch — right now submissions are not stored anywhere */}
     {!submitted ? <form onSubmit={e=>{e.preventDefault();setSubmitted(true)}}>
      <label>Join the House</label>
      <div className="email-row"><input type="email" required placeholder="Your email"/><button aria-label="Submit">→</button></div>
      <div className="consent">
       <input type="checkbox" id="consent" required/>
       <label htmlFor="consent">Acepto la <button type="button" className="privacy-trigger" onClick={e=>{e.stopPropagation();setPrivacyOpen(true)}}>Política de Privacidad</button> y el tratamiento de mi email para la lista de espera de HOFWEL.</label>
      </div>
     </form> : <p className="success">Thank you. You are on the list.</p>}
    </div>
   </section>
  </main>

  <footer>
   <div className="footer-main">
    <div><a className="footer-logo" href="#top">HOFWEL</a><p>European Menswear</p></div>
    <div className="footer-links"><a href="#house">The House</a><a href="#collection">Collection</a><a href="#contact">Contact</a><a href="https://www.instagram.com/hofwel.house/" target="_blank" rel="noreferrer">Instagram</a><button type="button" className="footer-link-btn" onClick={resetCookieChoice}>Cookies</button></div>
   </div>
   <div className="footer-bottom"><span>© 2026 HOFWEL</span><span>Designed in Spain</span><span>European Menswear</span></div>
  </footer>

  {/* TODO: fill in the bracketed placeholders below with HOFWEL's real legal name, address, privacy contact email and email-marketing provider before launch */}
  {privacyOpen && <div className="privacy-overlay" onClick={()=>setPrivacyOpen(false)}>
   <div className="privacy-modal" onClick={e=>e.stopPropagation()}>
    <button className="privacy-close" onClick={()=>setPrivacyOpen(false)} aria-label="Cerrar">×</button>
    <h3>Política de Privacidad</h3>
    <p><strong>Responsable del tratamiento:</strong> [PENDIENTE: razón social, NIF y dirección de HOFWEL]. Contacto: [PENDIENTE: email de contacto para privacidad].</p>
    <p><strong>Finalidad:</strong> gestionar tu inscripción en la lista de espera y enviarte comunicaciones sobre el lanzamiento y la Colección 01 de HOFWEL.</p>
    <p><strong>Legitimación:</strong> tu consentimiento, otorgado al marcar la casilla de este formulario (art. 6.1.a RGPD).</p>
    <p><strong>Destinatarios:</strong> tu email se almacena en [PENDIENTE: proveedor de email marketing]; no se cede a terceros salvo obligación legal.</p>
    <p><strong>Conservación:</strong> hasta que solicites la baja o finalice la campaña de lanzamiento.</p>
    <p><strong>Tus derechos:</strong> puedes acceder, rectificar y suprimir tus datos, oponerte al tratamiento o solicitar su limitación y portabilidad escribiendo a [PENDIENTE: email de contacto]. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).</p>
    <p><strong>Cookies:</strong> HOFWEL no utiliza cookies propias. Si aceptas las cookies analíticas, usamos Google Analytics para medir visitas de forma agregada; puedes cambiar tu elección en cualquier momento desde el enlace "Cookies" al pie de la página.</p>
   </div>
  </div>}

  {cookieConsent===null && <div className="cookie-banner">
   <p>Usamos cookies analíticas para entender cómo se usa el sitio. Podés aceptarlas o rechazarlas — no afecta a la navegación. Más detalle en la <button type="button" className="privacy-trigger" onClick={()=>setPrivacyOpen(true)}>Política de Privacidad</button>.</p>
   <div className="cookie-actions">
    <button type="button" className="cookie-reject" onClick={()=>chooseCookies("rejected")}>Rechazar</button>
    <button type="button" className="cookie-accept" onClick={()=>chooseCookies("accepted")}>Aceptar</button>
   </div>
  </div>}
 </div>
}
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
