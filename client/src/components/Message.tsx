import React from 'react';

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
  messageLink = "",
  buttonLabel = "Read More",
  showButton = true,
  reverse = false
}) => {
  return (
    <section className={`py-16 ${reverse ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <h2 className="text-4xl font-bold text-primary mb-6 leading-tight text-center lg:text-left">
          {heading}
        </h2>
        <div className="w-24 h-1 bg-secondary mb-8 mx-auto lg:mx-0"></div>
        
        <div className="relative">
          {/* Floating Image with Profile Info */}
          <div className={`${reverse ? 'float-right ml-8 mb-6' : 'float-left mr-8 mb-6'} max-w-xs`}>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="rounded-lg shadow-md object-cover w-full h-64 mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{title}</p>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {shortBio}
                </p>
              </div>
            </div>
          </div>

          {/* Message Content that wraps around the image */}
          <div className="text-lg text-gray-700 leading-relaxed text-justify space-y-4 overflow-hidden">
            {messageExcerpt}
          </div>
          
          {/* Clear float to ensure proper layout */}
          <div className="clear-both"></div>
          
          {showButton && messageLink && (
            <div className="mt-8 text-center lg:text-left">
              <a
                href={messageLink}
                className="inline-block px-8 py-3 text-white bg-primary hover:bg-primary/90 transition-colors rounded-md font-semibold shadow-lg"
              >
                {buttonLabel} <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Message;