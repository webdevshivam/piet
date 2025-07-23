
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
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-primary to-secondary p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-white/30 rounded"></div>
                </div>
                
                <div className="p-8">
                    {/* Mobile view - Image above text */}
                    <div className="block md:hidden mb-8">
                        <div className="relative group">
                            <LazyImage
                                src={imageUrl}
                                alt={imageAlt}
                                className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-lg border-2 border-primary/20 transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* Desktop view - Text wraps around image */}
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <div className="hidden md:block float-left mr-8 mb-6 group">
                            <LazyImage
                                src={imageUrl}
                                alt={imageAlt}
                                className="w-72 h-auto rounded-xl shadow-lg border-2 border-primary/20 transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        {content && content.split('\n').map((paragraph, index) => (
                            paragraph.trim() && (
                                <p key={index} className="mb-6 text-justify leading-7 text-gray-600 first-letter:text-2xl first-letter:font-bold first-letter:text-primary first-letter:mr-1">
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
