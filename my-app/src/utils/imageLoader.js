// src/utils/imageLoader.js
export const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
};

export const preloadImages = async (imageArray) => {
    const promises = imageArray.map(src => loadImage(src));
    await Promise.all(promises);
};