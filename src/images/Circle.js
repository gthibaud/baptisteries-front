import React from "react";

const Circle = ({
    fill = "#FFFFFF",
    size = "60px"
}) => {
    switch (size) {
        case 24:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <g id="circle24" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <circle id="Oval" fill={fill} cx="12" cy="12" r="10"></circle>
                        <path d="M12,24.0114833 C18.5799043,24.0114833 24,18.5913876 24,12.0114833 C24,5.43157895 18.5684211,0 12,0 C5.42009569,0 0,5.43157895 0,12.0114833 C0,18.5913876 5.42009569,24.0114833 12,24.0114833 Z M12,21.3129187 C6.84401914,21.3129187 2.71004785,17.1674641 2.71004785,12.0114833 C2.71004785,6.85550239 6.83253589,2.69856459 12,2.69856459 C17.1559809,2.69856459 21.3014354,6.85550239 21.3129187,12.0114833 C21.3129187,17.1674641 17.1559809,21.3129187 12,21.3129187 Z" id="circle" fill="#000000" fill-rule="nonzero"></path>
                    </g>
                </svg>
            )
        case 40:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <g id="circle40" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <circle id="halo1" fill-opacity="0.35" fill="#0079FF" cx="20" cy="20" r="20"></circle>
                        <circle id="Oval" fill={fill} cx="20" cy="20" r="10"></circle>
                        <path d="M20,32.0114833 C26.5799043,32.0114833 32,26.5913876 32,20.0114833 C32,13.4315789 26.5684211,8 20,8 C13.4200957,8 8,13.4315789 8,20.0114833 C8,26.5913876 13.4200957,32.0114833 20,32.0114833 Z M20,29.3129187 C14.8440191,29.3129187 10.7100478,25.1674641 10.7100478,20.0114833 C10.7100478,14.8555024 14.8325359,10.6985646 20,10.6985646 C25.1559809,10.6985646 29.3014354,14.8555024 29.3129187,20.0114833 C29.3129187,25.1674641 25.1559809,29.3129187 20,29.3129187 Z" id="circle" fill="#000000" fill-rule="nonzero"></path>
                    </g>
                </svg>
            )
        case 50:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <g id="circle50" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <circle id="halo1-copy" fill-opacity="0.35" fill="#0079FF" cx="25" cy="25" r="25"></circle>
                        <circle id="Oval" fill={fill} cx="25" cy="25" r="10"></circle>
                        <path d="M25,37.0114833 C31.5799043,37.0114833 37,31.5913876 37,25.0114833 C37,18.4315789 31.5684211,13 25,13 C18.4200957,13 13,18.4315789 13,25.0114833 C13,31.5913876 18.4200957,37.0114833 25,37.0114833 Z M25,34.3129187 C19.8440191,34.3129187 15.7100478,30.1674641 15.7100478,25.0114833 C15.7100478,19.8555024 19.8325359,15.6985646 25,15.6985646 C30.1559809,15.6985646 34.3014354,19.8555024 34.3129187,25.0114833 C34.3129187,30.1674641 30.1559809,34.3129187 25,34.3129187 Z" id="circle" fill="#000000" fill-rule="nonzero"></path>
                    </g>
                </svg>
            )
        default:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <g id="circle60" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <circle id="halo1-copy-2" fill-opacity="0.35" fill="#0079FF" cx="30" cy="30" r="30"></circle>
                        <circle id="Oval" fill={fill} cx="30" cy="30" r="10"></circle>
                        <path d="M30,42.0114833 C36.5799043,42.0114833 42,36.5913876 42,30.0114833 C42,23.4315789 36.5684211,18 30,18 C23.4200957,18 18,23.4315789 18,30.0114833 C18,36.5913876 23.4200957,42.0114833 30,42.0114833 Z M30,39.3129187 C24.8440191,39.3129187 20.7100478,35.1674641 20.7100478,30.0114833 C20.7100478,24.8555024 24.8325359,20.6985646 30,20.6985646 C35.1559809,20.6985646 39.3014354,24.8555024 39.3129187,30.0114833 C39.3129187,35.1674641 35.1559809,39.3129187 30,39.3129187 Z" id="circle" fill="#000000" fill-rule="nonzero"></path>
                    </g>
                </svg>
            )
    }
};

export default Circle;