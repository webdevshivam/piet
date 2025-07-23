import React from 'react';
import { Button } from '@/components/ui/button';
import LazyImage from './LazyImage';

interface MessageProps {
  heading: string;
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  shortBio: string;
  messageExcerpt: React.ReactNode;
  messageLink?: string;
  buttonLabel?: string;
  showButton?: boolean;
  reverse?: boolean;
}

const Message: React.FC<MessageProps> = ({
  heading,
  name,
  title,
  imageSrc,
  imageAlt,
  shortBio,
  messageExcerpt,
  messageLink,
  buttonLabel = "Read More",
  showButton = true,
  reverse = false
}) => {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start ${reverse ? 'lg:grid-cols-2' : ''}`}>
          {/* Image Section */}
          <div className={`${reverse ? 'lg:order-2' : ''} w-full flex justify-center lg:justify-start`}>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full max-w-sm mx-auto lg:mx-0">
              <div className="aspect-square md:aspect-[3/4] lg:h-64 w-full mb-4 overflow-hidden rounded-lg">
                <LazyImage
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-2 text-center lg:text-left">{name}</h3>
              <p className="text-secondary font-medium mb-3 text-sm md:text-base text-center lg:text-left">{title}</p>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-center lg:text-left">{shortBio}</p>
            </div>
          </div>

          {/* Content Section */}
          <div className={`${reverse ? 'lg:order-1' : ''} w-full`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6 text-center lg:text-left leading-tight">{heading}</h2>
            <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed">
              <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                {messageExcerpt}
              </div>
            </div>
            {showButton && messageLink && (
              <div className="mt-6 md:mt-8 text-center lg:text-left">
                <Button asChild className="w-full sm:w-auto">
                  <a href={messageLink} className="inline-flex items-center justify-center px-6 py-3">
                    {buttonLabel}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;