import React from "react";

const Dot = ({
    fill = "#000",
    size = "12px",
}) => (
        <svg
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="dot" fill={fill}>
                <circle cx="6" cy="6" r="6"></circle>
            </g>
        </svg>
    );

export default Dot;