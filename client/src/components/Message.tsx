import React from 'react';
import { Link } from 'wouter';
import LazyImage from './LazyImage';
interface MessageProps {
    heading: string;
    name: string;
    title: string;
    imageSrc: string;
    imageAlt?: string;
    shortBio: string;
    messageExcerpt: React.ReactNode;
    messageLink: string;           // URL for "Read more" or details
    buttonLabel?: string;          // Button text (optional, default "Read Full Message")
    showButton?: boolean;          // Show/hide button (default true)
    reverse?: boolean;             // Reverse image/text positions (default false)
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
    buttonLabel = 'Read Full Message',
    showButton = true,
    reverse = false,
}) => {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${reverse ? 'md:grid-flow-col-dense' : ''
                    }`}
            >
                {/* Image Section */}
                <div className={`${reverse ? 'md:col-start-2' : ''} flex flex-col items-center md:text-left`}>
                    <LazyImage
                        src={imageSrc}
                        alt={imageAlt || name}
                        className="rounded-xl shadow-lg object-cover w-64 h-64 mb-6 border border-1 border-primary"
                    />

                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
                        <p className="text-sm text-primary font-medium">{title}</p>
                        <p className="mt-4 text-gray-700 text-sm leading-relaxed max-w-md">{shortBio}</p>
                    </div>
                </div>

                {/* Text Section */}
                <div className={`${reverse ? 'md:col-start-1' : ''}`}>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-4 leading-tight font-extrabold text-gray-900 inline-block">
                        {heading}
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6"></div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{messageExcerpt}</p>

                    {showButton && (
                        <Link href={messageLink}>
                            <a className="inline-block px-6 py-2 text-white btn-primary transition rounded-md font-semibold shadow">
                                {buttonLabel} <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Message;
