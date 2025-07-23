
import React from 'react';

interface MessageProps {
    title: string;
    content: string;
    imageUrl: string;
    imageAlt: string;
}

const Message: React.FC<MessageProps> = ({ title, content, imageUrl, imageAlt }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Image Section */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        {title}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        {content && content.split('\n').map((paragraph, index) => (
                            paragraph.trim() && (
                                <p key={index} className="mb-4">
                                    {paragraph}
                                </p>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
