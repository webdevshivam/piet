import { Link } from 'wouter';

type QuickLinkProps = {
  icon: string;
  title: string;
  href: string;
};

const QuickLink = ({ icon, title, href }: QuickLinkProps) => (
  <Link href={href}>
    <a className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md border border-neutral-200 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-white/20">
        <i className={`${icon} text-3xl text-primary group-hover:text-white`}></i>
      </div>
      <span className="font-heading font-semibold text-center">{title}</span>
    </a>
  </Link>
);

// News marquee component
const NewsMarquee = () => {
  const newsItems = [
    {
      title: "Admissions Open 2025-26",
      description: "Online applications are now open for all undergraduate and postgraduate programs",
      link: "/admissions"
    },
    {
      title: "Campus Placement Drive",
      description: "Major tech companies visiting campus for recruitment from June 2025",
      link: "/placements"
    },
    {
      title: "Research Conference",
      description: "National Conference on Emerging Technologies scheduled for July 2025",
      link: "/events"
    },
    {
      title: "Scholarship Programs",
      description: "Merit-based scholarships available for deserving students",
      link: "/scholarships"
    },
    {
      title: "Industry Collaboration",
      description: "New MOU signed with leading tech companies for internships",
      link: "/industry-partnerships"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center mb-3">
        <i className="fas fa-bullhorn text-accent mr-2"></i>
        <h3 className="font-bold text-lg">Latest Updates</h3>
      </div>
      <div className="relative h-32 overflow-hidden">
        <div className="animate-marquee-vertical space-y-4">
          {newsItems.concat(newsItems).map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-md p-3 border border-white/20">
              <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-white/90 mb-2 line-clamp-2">{item.description}</p>
              <Link href={item.link}>
                <a className="text-accent hover:text-accent-light text-xs font-medium flex items-center">
                  Read More <i className="fas fa-arrow-right ml-1 text-xs"></i>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function QuickLinks() {
  const links: QuickLinkProps[] = [
    {
      icon: "fas fa-graduation-cap",
      title: "Admissions",
      href: "/admissions"
    },
    {
      icon: "fas fa-book-open",
      title: "Programs",
      href: "/programs"
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Events",
      href: "/events"
    },
    {
      icon: "fas fa-briefcase",
      title: "Placements",
      href: "/placements"
    }
  ];

  return (
    <section className="py-12 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-primary-light/20 to-secondary-light/20"></div>
      
      <div className="container mx-auto px-4 lg:px-0 pt-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-heading font-bold text-primary">Quick Access</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-3"></div>
        </div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left side - News marquee */}
          <div className="lg:col-span-1">
            <NewsMarquee />
          </div>
          
          {/* Right side - Quick links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {links.map((link, index) => (
                <QuickLink key={index} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
