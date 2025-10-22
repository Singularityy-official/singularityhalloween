
import React, { useEffect } from 'react';
import { Monitor, Wrench, Shield, Cloud, HardDrive, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';

const ITPage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Cinematic Background */}
      <section className="pt-32 pb-20 relative min-h-screen flex items-center">
        {/* Animated Nebula Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-600/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-nexrank-violet/20 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-nexrank-violet/10 animated-gradient"></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6 glow-text">
              Servizi Informatici<br />
              Professionali
            </h1>
            
            <p className="subtitle-text mb-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
              Consulenza, assistenza e supporto informatico per privati e aziende. 
              Risolviamo i tuoi problemi tecnologici con competenza e professionalità.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="primary-button-glow flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
                  Richiedi Assistenza
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-fade-in scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text-subtle">I Nostri Servizi IT</h2>
            <p className="subtitle-text">
              Soluzioni tecnologiche complete per ogni esigenza informatica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.1s'}}>
              <FeatureCard 
                icon={Monitor} 
                title="Assistenza Computer" 
                description="Riparazione, manutenzione e ottimizzazione di PC desktop e laptop per prestazioni ottimali." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.2s'}}>
              <FeatureCard 
                icon={Wrench} 
                title="Installazione Software" 
                description="Configurazione e installazione di programmi, sistemi operativi e applicazioni personalizzate." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.3s'}}>
              <FeatureCard 
                icon={Shield} 
                title="Sicurezza Informatica" 
                description="Protezione da virus, malware e implementazione di soluzioni di sicurezza avanzate." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.4s'}}>
              <FeatureCard 
                icon={Cloud} 
                title="Backup e Cloud" 
                description="Configurazione di sistemi di backup automatici e migrazione verso soluzioni cloud." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.5s'}}>
              <FeatureCard 
                icon={HardDrive} 
                title="Recupero Dati" 
                description="Recupero di file e documenti da dispositivi danneggiati o formattati accidentalmente." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.6s'}}>
              <FeatureCard 
                icon={Wifi} 
                title="Reti e Connettività" 
                description="Configurazione di reti domestiche e aziendali, risoluzione problemi di connessione." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-nexrank-violet/20 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="section-container relative z-10">
          <div className="glass-card-enhanced p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text-subtle">
              Hai problemi informatici da risolvere?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita e scopri come possiamo aiutarti a ottimizzare la tua tecnologia.
            </p>
            <Link to="/contact">
              <Button className="primary-button-glow text-lg px-8 py-6">
                Ottieni supporto ora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITPage;
