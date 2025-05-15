import { Link } from 'wouter';

type ProgramProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const Program = ({ icon, title, description, href }: ProgramProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-200 hover:shadow-xl hover:border-primary transition-all duration-300 group hover:-translate-y-2">
    <div className="h-48 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute w-32 h-32 bg-white/10 rounded-full -top-10 -right-10"></div>
      <div className="absolute w-24 h-24 bg-white/10 rounded-full -bottom-8 -left-8"></div>
      <i className={`${icon} text-5xl text-white z-10 transform group-hover:scale-110 transition-transform duration-300`}></i>
    </div>
    <div className="p-6">
      <h3 className="font-heading font-bold text-xl mb-3 text-primary group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-neutral-600 mb-5">{description}</p>
      <Link href={href}>
        <a className="text-secondary hover:text-secondary-dark font-semibold flex items-center group-hover:translate-x-1 transition-transform">
          Learn More <i className="fas fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
        </a>
      </Link>
    </div>
  </div>
);

export default function AcademicPrograms() {
  const programs: ProgramProps[] = [
    {
      icon: "fas fa-laptop-code",
      title: "Computer Science Engineering",
      description: "Study algorithms, programming languages, software design, and computer systems.",
      href: "/programs/cse"
    },
    {
      icon: "fas fa-bolt",
      title: "Electrical Engineering",
      description: "Focus on electrical systems, power generation, electronics, and control systems.",
      href: "/programs/electrical"
    },
    {
      icon: "fas fa-cogs",
      title: "Mechanical Engineering",
      description: "Study design, production, and operation of machinery and mechanical systems.",
      href: "/programs/mechanical"
    },
    {
      icon: "fas fa-microchip",
      title: "Electronics & Communication",
      description: "Focus on electronic devices, circuits, communication systems, and signal processing.",
      href: "/programs/electronics"
    }
  ];

  return (
    <section className="py-20 bg-neutral-50 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50"></div>
      
      <div className="container mx-auto px-4 lg:px-0 relative z-10">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Academic Programs</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
            Explore our diverse range of undergraduate and postgraduate programs designed to prepare students for successful careers in engineering and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="animate-scaleUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <Program {...program} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/programs">
            <a className="btn-primary rounded-lg shadow-md hover-lift">
              View All Programs <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
