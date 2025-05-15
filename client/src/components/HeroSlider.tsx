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
  const { currentSlide, goToSlide } = useSlider({
    totalSlides: slides.length,
    autoPlayInterval: 5000
  });

  const slideContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideContainerRef.current) {
      const slideHeight = window.innerWidth <= 768 ? '400px' : '600px';
      slideContainerRef.current.style.height = slideHeight;
    }
  }, []);

  return (
    <section className="hero-slider relative">
      <div ref={slideContainerRef} className="slider-container h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide h-full bg-cover bg-center absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`} 
            style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
              <div className="container mx-auto px-4 lg:px-0">
                <div className="max-w-2xl">
                  <h2 className="text-white font-heading font-bold text-3xl md:text-5xl mb-4">{slide.title}</h2>
                  <p className="text-white text-lg md:text-xl mb-8">{slide.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <Link href={slide.cta1Link}>
                      <a className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                        {slide.cta1Text}
                      </a>
                    </Link>
                    <Link href={slide.cta2Link}>
                      <a className="bg-white hover:bg-neutral-200 text-primary font-semibold px-6 py-3 rounded-md transition duration-300">
                        {slide.cta2Text}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Navigation */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3 z-20">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                index === currentSlide ? 'bg-white bg-opacity-70' : 'bg-white bg-opacity-40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
