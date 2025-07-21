import React from 'react';

interface ProfileMessageSectionProps {
  name: string;
  designation: string;
  image: string;
  bio: string;
  messageTitle: string;
  message: React.ReactNode;
  reverse?: boolean;
}

const ProfileMessageSection: React.FC<ProfileMessageSectionProps> = ({
  name,
  designation,
  image,
  bio,
  messageTitle,
  message,
  reverse = false
}) => {
  return (
    <section className={`py-16 ${reverse ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <h2 className="text-4xl font-bold text-primary mb-6 leading-tight text-center lg:text-left">
          {messageTitle}
        </h2>
        <div className="w-24 h-1 bg-secondary mb-8 mx-auto lg:mx-0"></div>
        
        <div className="relative">
          {/* Floating Profile Card */}
          <div className={`${reverse ? 'float-right ml-8 mb-6' : 'float-left mr-8 mb-6'} max-w-xs`}>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <img
                src={image}
                alt={name}
                className="rounded-lg shadow-md object-cover w-full h-64 mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                {designation && <p className="text-sm text-primary font-medium mb-3">{designation}</p>}
                {bio && (
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">
                    {bio}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Message Content that wraps around the profile card */}
          <div className="text-lg text-gray-700 leading-relaxed text-justify space-y-4 overflow-hidden">
            {message}
          </div>
          
          {/* Clear float to ensure proper layout */}
          <div className="clear-both"></div>
        </div>
      </div>
    </section>
  );
};

export default ProfileMessageSection;