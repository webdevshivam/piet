
import React from 'react';
import LazyImage from './LazyImage';

interface MessageProps {
    title: string;
    content: string;
    imageUrl: string;
    imageAlt: string;
}

const Message: React.FC<MessageProps> = ({ title, content, imageUrl, imageAlt }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {title}
            </h2>
            
            {/* Mobile view - Image above text */}
            <div className="block md:hidden mb-6">
                <LazyImage
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>

            {/* Desktop view - Text wraps around image */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <LazyImage
                    src={imageUrl}
                    alt={imageAlt}
                    className="hidden md:block float-left w-80 h-auto rounded-lg shadow-lg mr-6 mb-4"
                />
                {content && content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                        <p key={index} className="mb-4 text-justify">
                            {paragraph}
                        </p>
                    )
                ))}
            </div>
        </div>
    );
};

export default Message;
