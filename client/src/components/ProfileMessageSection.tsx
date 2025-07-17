import React from "react";
import { Link } from "wouter";

interface ProfileMessageSectionProps {
    name: string;
    designation: string;
    image: string;
    bio?: string;
    messageTitle: string;
    message: string | React.ReactNode;
    readMoreLink?: string;
    reverse?: boolean;
}

const ProfileMessageSection: React.FC<ProfileMessageSectionProps> = ({
    name,
    designation,
    image,
    bio,
    messageTitle,
    message,
    readMoreLink,
    reverse = false,
}) => {
    return (
        <section className="py-16 px-6 border-b border-gray-300">
            <div
                className={`max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start ${reverse ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
            >
                {/* Image and info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-64 shrink-0">
                    <img
                        src={image}
                        alt={name}
                        className="rounded-xl shadow-lg object-cover w-64 h-64 border border-primary"
                    />
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
                        <p className="text-sm text-primary font-medium">{designation}</p>
                        {bio && (
                            <p className="mt-4 text-gray-700 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                                {bio}
                            </p>
                        )}
                    </div>
                </div>

                {/* Vertical connecting line (hidden on small screens, shown on md and above) */}
                <div className="hidden md:block w-1 bg-primary opacity-50 self-stretch" />

                {/* Message content */}
                <div className="w-full md:flex-1">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-4 leading-tight">
                        {messageTitle}
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6" />
                    <div className="text-lg text-gray-700 leading-relaxed mb-6">
                        {typeof message === "string" ? <p>{message}</p> : message}
                    </div>
                    {readMoreLink && (
                        <Link href={readMoreLink}>
                            <a className="inline-block px-6 py-2 text-white btn-primary transition rounded-md font-semibold shadow">
                                Read Full Message <i className="fas fa-arrow-right ml-2" />
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProfileMessageSection;
