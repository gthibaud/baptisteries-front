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
                        <circle id="path-1" cx="16" cy="16" r="5"></circle>
                        <filter x="-45.0%" y="-45.0%" width="190.0%" height="190.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0.672752491   0 0 0 0 0.672752491   0 0 0 0 0.672752491  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="halo1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Oval">
                            <use fill="black" fill-opacity="1" filter="url(#filter-2)" href="#path-1"></use>
                            <circle stroke="#FFFFFF" stroke-width="2" stroke-linejoin="square" fill="#0079FF" fill-rule="evenodd" cx="16" cy="16" r="4"></circle>
                        </g>
                    </g>
                </svg>
            )
        case 1:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <defs>
                        <circle id="path-1" cx="16" cy="16" r="5"></circle>
                        <filter x="-45.0%" y="-45.0%" width="190.0%" height="190.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0.672752491   0 0 0 0 0.672752491   0 0 0 0 0.672752491  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="halo2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <circle id="halo1-copy-2" fill-opacity="0.35" fill="#0079FF" cx="16" cy="16" r="10"></circle>
                        <g id="Oval-Copy">
                            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink="#path-1"></use>
                            <circle stroke="#FFFFFF" stroke-width="2" stroke-linejoin="square" fill="#0079FF" fill-rule="evenodd" cx="16" cy="16" r="4"></circle>
                        </g>
                    </g>
                </svg>
            )
        case 2:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <defs>
                        <circle id="path-1" cx="16" cy="16" r="5"></circle>
                        <filter x="-45.0%" y="-45.0%" width="190.0%" height="190.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0.672752491   0 0 0 0 0.672752491   0 0 0 0 0.672752491  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="halo3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <circle id="halo1-copy" fill-opacity="0.35" fill="#0079FF" cx="16" cy="16" r="13"></circle>
                        <g id="Oval-Copy-2">
                            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink="#path-1"></use>
                            <circle stroke="#FFFFFF" stroke-width="2" stroke-linejoin="square" fill="#0079FF" fill-rule="evenodd" cx="16" cy="16" r="4"></circle>
                        </g>
                    </g>
                </svg>
            )
        default:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <defs>
                        <circle id="path-1" cx="16" cy="16" r="5"></circle>
                        <filter x="-45.0%" y="-45.0%" width="190.0%" height="190.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0.672752491   0 0 0 0 0.672752491   0 0 0 0 0.672752491  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="halo4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <circle id="halo1" fill-opacity="0.35" fill="#0079FF" cx="16" cy="16" r="16"></circle>
                        <g id="Oval-Copy-3">
                            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink="#path-1"></use>
                            <circle stroke="#FFFFFF" stroke-width="2" stroke-linejoin="square" fill="#0079FF" fill-rule="evenodd" cx="16" cy="16" r="4"></circle>
                        </g>
                    </g>
                </svg>
            )
    }
};

export default Halo;