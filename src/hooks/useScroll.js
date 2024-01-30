import { useEffect, useRef, useState } from 'react';

const useScroll = () => {
    const sliderRef = useRef(null);
    const [isScrollLeft, setIsScrollLeft] = useState(false);
    const [isScrollRight, setIsScrollRight] = useState(true);


    useEffect(() => {
        const sliderCurrent = sliderRef?.current;
        const handleScroll = () => {
            setIsScrollLeft(sliderCurrent.scrollLeft > 0);
            setIsScrollRight(sliderCurrent.scrollLeft + sliderCurrent.offsetWidth < sliderCurrent.scrollWidth);
        };
        sliderCurrent.addEventListener("scroll", handleScroll);

        return (() => {
            sliderCurrent.removeEventListener('scroll', handleScroll);
        });

    }, [])


    const handleDirection = (direction) => {
        const sliderCurrent = sliderRef?.current
        if (direction === 'left') {
            sliderCurrent.scrollLeft -= sliderCurrent.offsetWidth;
        } else {
            sliderCurrent.scrollLeft += sliderCurrent.offsetWidth;
        }

    }

    return {
        isScrollLeft,
        isScrollRight,
        handleDirection,
        sliderRef
    }
}

export default useScroll