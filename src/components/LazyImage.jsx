// components/LazyImage.jsx
import React, { useState, useEffect } from "react";

const LazyImage = ({
  src,
  alt,
  className,
  placeholder = "/assets/placeholder.jpg",
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${imageLoaded ? "loaded" : "loading"}`}
      loading="lazy"
    />
  );
};

export default LazyImage;
