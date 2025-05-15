import { useSlider } from '@/hooks/use-slider';
import { useEffect, useRef } from 'react';
import { Link } from 'wouter';

type SlideContent = {
  backgroundImage: string;
  title: string;
  description: string;
  cta1Text: string;
  cta1Link: string;
  cta2Text: string;
  cta2Link: string;
};

const slides: SlideContent[] = [
  {
    backgroundImage: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80',
    title: 'Shaping Future Leaders',
    description: 'Poornima Institute of Engineering & Technology offers world-class education to create future innovators and leaders.',
    cta1Text: 'Explore Programs',
    cta1Link: '/programs',
    cta2Text: 'Virtual Tour',
    cta2Link: '/virtual-tour'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80',
    title: 'Excellence in Education',
    description: 'Discover state-of-the-art facilities and advanced curriculum designed for tomorrow\'s professionals.',
    cta1Text: 'Apply Now',
    cta1Link: '/apply',
    cta2Text: 'Learn More',
    cta2Link: '/about'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80',
    title: 'Innovation Through Research',
    description: 'Our cutting-edge research facilities prepare students to solve real-world engineering challenges.',
    cta1Text: 'Research Centers',
    cta1Link: '/research',
    cta2Text: 'Student Projects',
    cta2Link: '/projects'
  }
];

export default function HeroSlider() {
  const { currentSlide, goToSlide, nextSlide, prevSlide } = useSlider({
    totalSlides: slides.length,
    autoPlayInterval: 6000
  });

  const slideContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideContainerRef.current) {
      const slideHeight = window.innerWidth <= 768 ? '450px' : '650px';
      slideContainerRef.current.style.height = slideHeight;
    }
  }, []);

  return (
    <section className="hero-slider relative overflow-hidden">
      <div ref={slideContainerRef} className="slider-container h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide h-full bg-cover bg-center absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
            }`} 
            style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-black/60 flex items-center">
              <div className="container mx-auto px-4 lg:px-0">
                <div className="max-w-2xl animate-fadeIn">
                  <h2 className="text-white font-heading font-bold text-3xl md:text-5xl mb-6 leading-tight drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href={slide.cta1Link}>
                      <a className="btn-secondary rounded-lg shadow-md hover-lift">
                        {slide.cta1Text}
                      </a>
                    </Link>
                    <Link href={slide.cta2Link}>
                      <a className="btn-outline border-white text-white hover:bg-white hover:text-primary rounded-lg shadow-md">
                        {slide.cta2Text}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Navigation Buttons */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        
        {/* Slider Dots Navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-secondary w-8' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
