import { useEffect, useState } from "react";

export default function Slideshow() {
    const imageURLs = [
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg",
        "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg",
        "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
        "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg",
        "https://images.pexels.com/photos/325845/pexels-photo-325845.jpeg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleNext() {
        if (currentIndex == imageURLs.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function handlePrev() {
        if (currentIndex === 0) {
            setCurrentIndex(imageURLs.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Slideshow component</h1>
            <div className="w-full max-w-md">
                <div className="relative">
                    {
                        imageURLs.map((url, index) => (
                            <img key={index} src={url} alt="watch" className="w-full h-100 object-cover rounded-lg mb-4"
                                style={{
                                    display: index === currentIndex ? 'block' : 'none',
                                }} />
                        ))
                    }
                </div>
                <div className="flex justify-between mt-2">
                    <button className="bg-gray-500 text-white p-2 rounded" onClick={handlePrev}>Prev</button>
                    <button className="bg-gray-500 text-white p-2 rounded" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}