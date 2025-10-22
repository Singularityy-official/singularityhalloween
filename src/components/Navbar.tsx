
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home, Palette, Monitor, Video, Heart, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToTop: true } });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Grafica', path: '/graphics', icon: Palette },
    { name: 'Informatica', path: '/it', icon: Monitor },
    { name: 'Video Editing', path: '/video-editing', icon: Video },
    { name: 'Impegno Sociale', path: '/social-commitment', icon: Heart },
    { name: 'Contatti', path: '/contact', icon: Mail },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path ? 'nav-link-active' : 'nav-link';
  };

  const renderNavLink = (link: any) => {
    const IconComponent = link.icon;
    return (
      <Link 
        key={link.name} 
        to={link.path} 
        className={`${isActiveLink(link.path)} flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 group`}
        style={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'transparent'
        }}
      >
        <IconComponent 
          size={16} 
          className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" 
        />
        <span className="hidden lg:inline">{link.name}</span>
      </Link>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 md:py-3 shadow-2xl' 
          : 'py-3 md:py-5'
      }`}
      style={{
        background: scrolled 
          ? 'linear-gradient(180deg, rgba(15,15,19,0.95) 0%, rgba(26,31,44,0.9) 100%)'
          : 'linear-gradient(180deg, rgba(15,15,19,0.7) 0%, rgba(26,31,44,0.5) 100%)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick} 
              className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300 group"
              aria-label="Go to Home"
            >
              <img 
                src="/lovable-uploads/355f7e8e-eadc-4c20-b8d3-a150790a2885.png" 
                alt="Singularity Logo" 
                className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
              />
              <span className="text-white font-bold text-lg md:text-xl transition-all duration-300 group-hover:text-nexrank-purple">
                Singularity
              </span>
            </button>
          </div>

          <nav 
            className="hidden md:flex items-center space-x-2 lg:space-x-4 rounded-full px-4 py-2"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            {navLinks.map(renderNavLink)}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link to="/about">
              <Button className="primary-button-glow animate-pulse-glow flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <User size={16} className="transition-transform duration-300 hover:rotate-12" />
                Chi sono?
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-lg transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)'
              }}
              aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav 
          className="md:hidden animate-fade-in"
          style={{
            background: 'rgba(15,15,19,0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="p-4 space-y-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${isActiveLink(link.path)} py-3 px-4 block rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 ${
                    location.pathname === link.path ? 'bg-nexrank-purple/20 border border-nexrank-purple/30' : ''
                  }`}
                  style={{
                    background: location.pathname !== link.path 
                      ? 'rgba(255, 255, 255, 0.05)' 
                      : undefined
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IconComponent size={20} className="text-nexrank-purple" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
            <Link
              to="/about"
              className="primary-button-glow w-full text-center mt-4 flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User size={16} />
              Chi sono?
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
