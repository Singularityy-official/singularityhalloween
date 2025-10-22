import React from 'react';
import { ArrowRight, Pen, Monitor, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import ImmersiveBackground from '@/components/ImmersiveBackground';

const HomePage = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Enhanced Cinematic Background */}
      <section className="pt-32 pb-20 relative min-h-screen flex items-center">
        <ImmersiveBackground variant="default" showParticles={true} showNoise={true} />
        
        <div className="section-container relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6">
              Coloriamo l'universo<br />
              partendo dal suo punto più oscuro
            </h1>
            
            <p className="subtitle-text mb-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
              Singularity offre servizi professionali di alta qualità a prezzi accessibili nel campo dell'informatica, grafica e video editing.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="magnetic-button primary-button-glow flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
                  Contattaci <ArrowRight size={18} />
                </Button>
              </Link>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                className="glass-button text-foreground border-border hover:bg-accent/10 hover:border-accent hover:text-foreground text-lg w-full sm:w-auto magnetic-button"
              >
                Scopri i nostri servizi
              </Button>
            </div>
          </div>
        </div>
      </section>
      
<!-- TrustBox widget - Review Collector -->
<div class="trustpilot-widget" data-locale="it-IT" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="68762f0f88114dfce8764a82" data-style-height="52px" data-style-width="100%">
  <a href="https://it.trustpilot.com/review/singularitydream.it" target="_blank" rel="noopener">Trustpilot</a>
</div>
<!-- End TrustBox widget -->

      {/* Services Section with Enhanced Animations */}
      <section id="services-section" className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-30"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-fade-in scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">I Nostri Servizi</h2>
            <p className="subtitle-text">
              Offriamo servizi professionali di alta qualità a costi accessibili.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.1s'}}>
              <FeatureCard 
                icon={Pen} 
                title="Grafica" 
                description="Loghi, identità visiva, banner per social media, locandine, curriculum e altro ancora, curati nei minimi dettagli." 
              />
            </div>
            <div className="animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.2s'}}>
              <FeatureCard 
                icon={Monitor} 
                title="Informatica" 
                description="Consulenza e assistenza informatica, risoluzione problemi, supporto remoto e in loco per tutte le tue esigenze tecnologiche." 
              />
            </div>
            <div className="animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.3s'}}>
              <FeatureCard 
                icon={Video} 
                title="Video Editing" 
                description="Montaggio video professionale per YouTube, vlog, eventi, social media, con transizioni, titoli e musica di qualità." 
              />
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground animate-fade-in scroll-animate">Perché scegliere Singularity?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              <div className="glass-card-enhanced p-6 hover-lift-glow animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.1s'}}>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                  <span className="text-primary text-xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">Qualità</h4>
                <p className="text-muted-foreground">Servizi professionali con cura per ogni dettaglio</p>
              </div>
              
              <div className="glass-card-enhanced p-6 hover-lift-glow animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.2s'}}>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                  <span className="text-primary text-xl font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">Accessibilità</h4>
                <p className="text-muted-foreground">Prezzi competitivi per rendere l'eccellenza alla portata di tutti</p>
              </div>
              
              <div className="glass-card-enhanced p-6 hover-lift-glow animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.3s'}}>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                  <span className="text-primary text-xl font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">Personalizzazione</h4>
                <p className="text-muted-foreground">Soluzioni su misura per le tue esigenze specifiche</p>
              </div>
              
              <div className="glass-card-enhanced p-6 hover-lift-glow animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.4s'}}>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                  <span className="text-primary text-xl font-bold">4</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">Assistenza</h4>
                <p className="text-muted-foreground">Supporto costante e disponibilità per ogni necessità</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Effects */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="section-container relative z-10">
          <div className="glass-card-enhanced p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate interactive-card">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Pronto a dare vita ai tuoi progetti?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Scopri come possiamo aiutarti a realizzare le tue idee con professionalità e creatività.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/graphics">
                <Button className="magnetic-button primary-button-glow text-lg px-6 py-5">
                  Servizi di grafica
                </Button>
              </Link>
              <Link to="/it">
                <Button className="magnetic-button primary-button-glow text-lg px-6 py-5">
                  Servizi informatici
                </Button>
              </Link>
              <Link to="/video-editing">
                <Button className="magnetic-button primary-button-glow text-lg px-6 py-5">
                  Servizi di video editing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;