import {MutableRefObject, ReactNode, useEffect, useRef} from "react";

function useHorizontalScroll() {
    const elRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth"
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
    return elRef;
}

export default function HorizontalScroll(props: {children: ReactNode}) {
    const scrollRef: MutableRefObject<any> = useHorizontalScroll();
    return (
        <div ref={scrollRef} className="d-flex overflow-auto children-horizontal-margin text-capitalize">
            {props.children}
        </div>
    )
}
