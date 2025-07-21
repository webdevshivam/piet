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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Profile Info */}
          <div className={`lg:col-span-4 flex flex-col items-center text-center ${reverse ? 'lg:order-2' : ''}`}>
            <img
              src={image}
              alt={name}
              className="rounded-xl shadow-lg object-cover w-64 h-64 mb-6 border border-primary"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
              {designation && <p className="text-sm text-primary font-medium mb-4">{designation}</p>}
              {bio && (
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  {bio}
                </p>
              )}
            </div>
          </div>

          {/* Message Content */}
          <div className={`lg:col-span-8 ${reverse ? 'lg:order-1' : ''}`}>
            <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
              {messageTitle}
            </h2>
            <div className="w-24 h-1 bg-secondary mb-8"></div>
            <div className="text-lg text-gray-700 leading-relaxed text-justify space-y-4">
              {message}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileMessageSection;