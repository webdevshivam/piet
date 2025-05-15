import { Link } from 'wouter';

type StatProps = {
  number: string;
  label: string;
};

const Stat = ({ number, label }: StatProps) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
    <span className="text-primary font-bold text-4xl mb-2">{number}</span>
    <span className="text-neutral-600 text-center">{label}</span>
  </div>
);

export default function AboutSection() {
  const stats: StatProps[] = [
    { number: "20+", label: "Years of Excellence" },
    { number: "50+", label: "Faculty Members" },
    { number: "2000+", label: "Students" },
    { number: "95%", label: "Placement Rate" }
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">About Poornima Institute</h2>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              Poornima Institute of Engineering & Technology (PIET) was established in 2007 with the goal of providing quality technical education and creating skilled professionals. Located in Jaipur, Rajasthan, PIET has state-of-the-art infrastructure and is affiliated with Rajasthan Technical University.
            </p>
            <p className="text-neutral-700 mb-8 leading-relaxed">
              Our institute is known for its excellence in academics, research, and placements. We focus on holistic development of students through various co-curricular and extracurricular activities alongside rigorous academic programs.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Stat key={index} {...stat} />
              ))}
            </div>
            
            <Link href="/about">
              <a className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                Discover More About Us
              </a>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Poornima Institute Campus" 
              className="rounded-lg shadow-lg w-full h-auto z-10 relative"
            />
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-secondary rounded-lg -z-10"></div>
            <div className="absolute -top-5 -left-5 w-40 h-40 bg-accent rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
