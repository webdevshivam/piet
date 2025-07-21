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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Photo & Info */}
          <div className={`lg:col-span-4 flex flex-col items-center text-center ${reverse ? 'lg:order-2' : ''}`}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-xl shadow-lg object-cover w-64 h-64 mb-6 border border-primary"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
              <p className="text-sm text-primary font-medium mb-4">{title}</p>
              <p className="text-gray-700 text-sm leading-relaxed text-justify">
                {shortBio}
              </p>
            </div>
          </div>

          {/* Message Content */}
          <div className={`lg:col-span-8 ${reverse ? 'lg:order-1' : ''}`}>
            <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
              {heading}
            </h2>
            <div className="w-24 h-1 bg-secondary mb-8"></div>
            <div className="text-lg text-gray-700 leading-relaxed text-justify space-y-4">
              {messageExcerpt}
            </div>
            {showButton && messageLink && (
              <div className="mt-8">
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
      </div>
    </section>
  );
};

export default Message;