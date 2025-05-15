import { Link } from 'wouter';

type QuickLinkProps = {
  icon: string;
  title: string;
  href: string;
};

const QuickLink = ({ icon, title, href }: QuickLinkProps) => (
  <Link href={href}>
    <a className="flex flex-col items-center justify-center p-6 rounded-lg bg-neutral-100 hover:bg-primary hover:text-white transition-all duration-300 group">
      <i className={`${icon} text-3xl text-primary group-hover:text-white mb-3`}></i>
      <span className="font-heading font-semibold text-center">{title}</span>
    </a>
  </Link>
);

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
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <QuickLink key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
