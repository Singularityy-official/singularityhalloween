
import React, { useEffect } from 'react';
import { Palette, Pen, Image, FileText, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';

const GraphicsPage = () => {
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
      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative min-h-screen flex items-center">
        {/* Animated Nebula Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-nexrank-violet/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-purple-600/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-nexrank-purple/20 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-nexrank-violet/10 via-transparent to-purple-600/10 animated-gradient"></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-radial from-nexrank-violet/5 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Servizi di Grafica<br />
              Professionale
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-6 sm:mb-8 animate-slide-up px-4" style={{animationDelay: '0.3s'}}>
              Dalla creazione di loghi al design di materiali promozionali, realizziamo progetti grafici 
              di alta qualità che danno vita alla tua identità visiva.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up px-4" style={{animationDelay: '0.6s'}}>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="primary-button-glow flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                  Richiedi Preventivo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-nexrank-violet/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 glow-text-subtle">I Nostri Servizi Grafici</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto px-4">
              Soluzioni creative per ogni esigenza di comunicazione visiva.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.1s'}}>
              <FeatureCard 
                icon={Palette} 
                title="Logo Design" 
                description="Creazione di loghi unici e memorabili che rappresentano al meglio la tua identità aziendale." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.2s'}}>
              <FeatureCard 
                icon={Image} 
                title="Brand Identity" 
                description="Sviluppo completo dell'identità visiva: colori, font, stile e materiali coordinati." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.3s'}}>
              <FeatureCard 
                icon={FileText} 
                title="Materiali Promozionali" 
                description="Brochure, volantini, banner e locandine per promuovere efficacemente il tuo business." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.4s'}}>
              <FeatureCard 
                icon={Users} 
                title="Social Media Design" 
                description="Post, copertine e grafiche ottimizzate per tutti i principali social network." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.5s'}}>
              <FeatureCard 
                icon={Pen} 
                title="Curriculum Design" 
                description="CV creativi e professionali che ti aiutano a distinguerti nel mondo del lavoro." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.6s'}}>
              <FeatureCard 
                icon={Star} 
                title="Progetti Personalizzati" 
                description="Soluzioni grafiche su misura per esigenze specifiche e progetti unici." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-nexrank-violet/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-enhanced p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 glow-text-subtle">
              Pronto a dare vita alla tua identità visiva?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contattaci per discutere del tuo progetto grafico e ricevere un preventivo personalizzato.
            </p>
            <Link to="/contact">
              <Button className="primary-button-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6">
                Inizia il tuo progetto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicsPage;
