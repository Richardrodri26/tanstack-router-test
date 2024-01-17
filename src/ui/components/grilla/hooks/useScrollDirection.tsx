import { useEffect, useState } from "react";

export const useScrollDirection = (tableRef: React.RefObject<HTMLDivElement>) => {
    

    const [hasOverflow, setHasOverFlow] = useState(false)
    const [navigationDirection, setNavigationDirection] = useState<{ left: boolean, right: boolean }>({
        left: false,
        right: true
    })


    const scrollToInicio = () => {
        if (tableRef.current) {
            tableRef.current.scrollLeft = 0;
            setNavigationDirection({ left: false, right: true })
        }
    };

    const scrollToEnd = () => {
        if (tableRef.current) {
            tableRef.current.scrollLeft = tableRef.current.scrollWidth - tableRef.current.clientWidth;
            setNavigationDirection({ left: true, right: false })
        }
    };

    useEffect(() => {
        if (tableRef.current) {
            const container = tableRef.current;

            if(container) {
                const hasOverflowing = container.offsetWidth < container.scrollWidth;
                    setHasOverFlow(hasOverflowing);
            }

            const handleScroll = () => {
                if (container) {

                    if (container.scrollLeft === 0) {
                        setNavigationDirection({ left: false, right: true });
                    } else if (Math.abs(Math.ceil(container.scrollLeft) - (container.scrollWidth - container.clientWidth)) <= 1) {
                        setNavigationDirection({ left: true, right: false });
                    } else {
                        setNavigationDirection({ left: true, right: true });
                    }
                }
            }

            container.addEventListener('scroll', handleScroll);

            return () => {
                container.removeEventListener('scroll', handleScroll);
            };

        }

    }, []);



    return { ref: tableRef, hasOverflow, navigationDirection, scrollToInicio, scrollToEnd }
}