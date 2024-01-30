import useScroll from "../hooks/useScroll";
import { images } from "../utils/images";

const Slider = () => {
    const {
        isScrollLeft,
        isScrollRight,
        handleDirection,
        sliderRef
    }
        = useScroll();
    return (
        <div className="m-36 p-20 relative bg-gray-400 rounded-lg">
            {isScrollLeft && <button onClick={() => handleDirection('left')} className="z-10 cursor-pointer opacity-50 hover:opacity-100 absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl">⬅</button>}

            <div ref={sliderRef} id="slider" className="overflow-x-hidden whitespace-nowrap scroll-smooth ">
                {images.map((image, index) => (
                    <div key={index} className="w-[320px] p-2 inline-block cursor-pointer hover:scale-110 ease-in-out duration-300">
                        <img className=" shadow-inherit rounded-md" src={image} alt='images' />
                    </div>
                ))}
            </div>
            {isScrollRight && <button onClick={() => handleDirection('right')} className="cursor-pointer opacity-50 hover:opacity-100 z-10 absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl">➡</button>}

        </div>
    )
}

export default Slider