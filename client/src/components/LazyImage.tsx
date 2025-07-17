import React, { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, ...rest }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {!isLoaded && (
                <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-full h-full absolute top-0 left-0" />
            )}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`block w-full h-auto transition-opacity duration-500 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                onLoad={() => setIsLoaded(true)}
                {...rest}
            />
        </div>
    );
};

export default LazyImage;
