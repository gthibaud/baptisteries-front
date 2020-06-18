import React from "react";

const Halo = ({
    type = 0
}) => {
    const size = "32px"
    switch (type) {
        case 0:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <defs>
                        <circle id="path-1" cx="16" cy="16" r="7"></circle>
                        <filter x="-32.1%" y="-32.1%" width="164.3%" height="164.3%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0.672752491   0 0 0 0 0.672752491   0 0 0 0 0.672752491  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="halo1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Oval">
                            <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlink="#path-1"></use>
                            <circle stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="square" fill="#0079FF" fillRule="evenodd" cx="16" cy="16" r="6"></circle>
                        </g>
                    </g>
                </svg>
            )
        case 1:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <defs>
                        <circle id="path-1" cx="16" cy="16" r="7"></circle>
                        <filter x="-32.1%" y="-32.1%" width="164.3%" height="164.3%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0.672752491   0 0 0 0 0.672752491   0 0 0 0 0.672752491  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="halo2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <circle id="halo1-copy-2" fillOpacity="0.35" fill="#0079FF" cx="16" cy="16" r="10"></circle>
                        <g id="Oval-Copy">
                            <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlink="#path-1"></use>
                            <circle stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="square" fill="#0079FF" fillRule="evenodd" cx="16" cy="16" r="6"></circle>
                        </g>
                    </g>
                </svg>
            )
        case 2:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <defs>
                        <circle id="path-1" cx="16" cy="16" r="7"></circle>
                        <filter x="-32.1%" y="-32.1%" width="164.3%" height="164.3%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0.672752491   0 0 0 0 0.672752491   0 0 0 0 0.672752491  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="halo3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <circle id="halo1-copy" fillOpacity="0.35" fill="#0079FF" cx="16" cy="16" r="13"></circle>
                        <g id="Oval-Copy-2">
                            <use fill="black" fillOpacity="1" filter="url(#filter-2)" href="#path-1"></use>
                            <circle stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="square" fill="#0079FF" fillRule="evenodd" cx="16" cy="16" r="6"></circle>
                        </g>
                    </g>
                </svg>
            )
        default:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <defs>
                        <circle id="path-1" cx="16" cy="16" r="7"></circle>
                        <filter x="-32.1%" y="-32.1%" width="164.3%" height="164.3%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0.672752491   0 0 0 0 0.672752491   0 0 0 0 0.672752491  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="halo4" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <circle id="halo1" fillOpacity="0.35" fill="#0079FF" cx="16" cy="16" r="16"></circle>
                        <g id="Oval-Copy-3">
                            <use fill="black" fillOpacity="1" filter="url(#filter-2)" href="#path-1"></use>
                            <circle stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="square" fill="#0079FF" fillRule="evenodd" cx="16" cy="16" r="6"></circle>
                        </g>
                    </g>
                </svg>
            )
    }
};

export default Halo;