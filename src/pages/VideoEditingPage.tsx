
import React, { useEffect } from 'react';
import { Video, Film, Music, Scissors, Play, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';

const VideoEditingPage = () => {
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
          <div className="absolute top-0 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-orange-600/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-yellow-500/20 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-600/10 animated-gradient"></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-radial from-red-500/5 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-red-500 bg-clip-text text-transparent">
              Video Editing<br />
              Professionale
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-6 sm:mb-8 animate-slide-up px-4" style={{animationDelay: '0.3s'}}>
              Montaggio video di qualità cinematografica per YouTube, social media, eventi e progetti aziendali. 
              Trasformiamo le tue idee in contenuti coinvolgenti.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up px-4" style={{animationDelay: '0.6s'}}>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="primary-button-glow flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                  Inizia il tuo progetto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 glow-text-subtle">I Nostri Servizi Video</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto px-4">
              Soluzioni complete per ogni tipo di progetto video.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.1s'}}>
              <FeatureCard 
                icon={Video} 
                title="YouTube Content" 
                description="Montaggio ottimizzato per YouTube con intro, outro, transizioni fluide e grafica accattivante." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.2s'}}>
              <FeatureCard 
                icon={Film} 
                title="Video Aziendali" 
                description="Presentazioni professionali, video promozionali e contenuti corporate di alta qualità." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.3s'}}>
              <FeatureCard 
                icon={Scissors} 
                title="Montaggio Eventi" 
                description="Matrimoni, feste, conferenze: trasformiamo i tuoi momenti speciali in ricordi indimenticabili." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.4s'}}>
              <FeatureCard 
                icon={Music} 
                title="Audio & Musica" 
                description="Sincronizzazione audio perfetta, colonne sonore personalizzate e effetti sonori professionali." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.5s'}}>
              <FeatureCard 
                icon={Play} 
                title="Social Media Video" 
                description="Contenuti ottimizzati per Instagram, TikTok, Facebook con formati e durate specifiche." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.6s'}}>
              <FeatureCard 
                icon={Upload} 
                title="Post-Produzione" 
                description="Color correction, stabilizzazione, effetti speciali e ottimizzazione per ogni piattaforma." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-enhanced p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 glow-text-subtle">
              Pronto a creare contenuti video straordinari?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Inviaci il tuo materiale grezzo e lo trasformeremo in un video professionale che cattura l'attenzione.
            </p>
            <Link to="/contact">
              <Button className="primary-button-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6">
                Inizia il montaggio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditingPage;
