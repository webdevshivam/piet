import { Link } from 'wouter';

export default function AnnouncementBar() {
  return (
    <div className="bg-accent py-3">
      <div className="container mx-auto px-4 lg:px-0 flex items-center justify-between">
        <div className="flex items-center">
          <span className="bg-white text-accent font-bold px-3 py-1 rounded-md mr-4">NEW</span>
          <p className="font-medium text-primary">Admissions open for 2025-26 academic year. Apply before June 30 for early bird discounts.</p>
        </div>
        <Link href="/admissions">
          <a className="hidden md:block text-primary font-semibold hover:underline">
            Learn More <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}
