import { Link } from 'wouter';

type ProgramProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const Program = ({ icon, title, description, href }: ProgramProps) => (
  <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="h-48 bg-primary-light flex items-center justify-center">
      <i className={`${icon} text-5xl text-white`}></i>
    </div>
    <div className="p-6">
      <h3 className="font-heading font-bold text-xl mb-2 text-primary">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link href={href}>
        <a className="text-secondary hover:text-secondary-dark font-semibold flex items-center">
          Learn More <i className="fas fa-arrow-right ml-2"></i>
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Academic Programs</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Explore our diverse range of undergraduate and postgraduate programs designed to prepare students for successful careers in engineering and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Program key={index} {...program} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/programs">
            <a className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-md transition duration-300">
              View All Programs
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
